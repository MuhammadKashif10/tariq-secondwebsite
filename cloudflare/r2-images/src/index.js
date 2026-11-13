/**
 * LOCAL STAND-IN for the bucket's public r2.dev URL, used only for testing.
 * Serves the site's photos from the R2 bucket bound as IMAGES.
 *
 * Only GET and HEAD for keys under "images/" are allowed, so the bucket
 * cannot be listed or written through this Worker. Supports ETag
 * revalidation (304) and byte ranges (206).
 */

const json404 = () =>
  new Response("Not found", { status: 404, headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=60" } });

function objectKey(url) {
  let key;
  try {
    key = decodeURIComponent(url.pathname.slice(1));
  } catch {
    return null;
  }
  if (!key.startsWith("images/") || key.includes("..") || key.includes("\\") || key.endsWith("/")) return null;
  return key;
}

export default {
  async fetch(request, env) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", { status: 405, headers: { allow: "GET, HEAD" } });
    }

    const key = objectKey(new URL(request.url));
    if (!key) return json404();

    const object =
      request.method === "HEAD"
        ? await env.IMAGES.head(key)
        : await env.IMAGES.get(key, { onlyIf: request.headers, range: request.headers });
    if (object === null) return json404();

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("etag", object.httpEtag);
    headers.set("last-modified", object.uploaded.toUTCString());
    headers.set("cache-control", env.CACHE_CONTROL || "public, max-age=604800, stale-while-revalidate=86400");
    headers.set("accept-ranges", "bytes");
    headers.set("access-control-allow-origin", "*");
    headers.set("x-content-type-options", "nosniff");

    // head() never has a body; get() has none when a precondition stopped it.
    if (!("body" in object)) {
      if (request.method === "HEAD") {
        headers.set("content-length", String(object.size));
        return new Response(null, { headers });
      }
      const failedMatch = request.headers.has("if-match") || request.headers.has("if-unmodified-since");
      return new Response(null, { status: failedMatch ? 412 : 304, headers });
    }

    if (request.headers.has("range") && object.range) {
      const r = object.range;
      const offset = "suffix" in r ? object.size - r.suffix : (r.offset ?? 0);
      const length = "suffix" in r ? r.suffix : (r.length ?? object.size - offset);
      headers.set("content-range", `bytes ${offset}-${offset + length - 1}/${object.size}`);
      headers.set("content-length", String(length));
      return new Response(object.body, { status: 206, headers });
    }

    headers.set("content-length", String(object.size));
    return new Response(object.body, { headers });
  },
};
