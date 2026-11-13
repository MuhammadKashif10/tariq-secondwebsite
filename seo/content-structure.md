# Content structure standards

How each page type is built, so every page is complete, consistent and machine-readable. The templates already generate most of this from data. This file records what the data must contain and what the templates guarantee.

Related: [style-guide.md](style-guide.md) (how to write), [keyword-map.md](keyword-map.md) (what to target), [qa-checklist.md](qa-checklist.md) (how to verify).

## Site-wide guarantees (from the code)

These apply to every page. Don't recreate them per page.

| Element | Where it comes from |
|---|---|
| Title, description, canonical, Open Graph, Twitter card | `pageMetadata()` in `src/lib/seo.ts`. Every page must use it. |
| Share image (1200×630) | `opengraph-image.tsx` per service, area and guide. Other pages use the home card. |
| `LocalBusiness` + `WebSite` structured data | `src/app/layout.tsx`, on every page |
| `BreadcrumbList` | `PageHero` on every inner page |
| Sitemap with `lastmod` | `src/app/sitemap.ts`. Guides use `updated ?? date`. Other pages use `contentUpdated`. |
| Exactly one H1 | `PageHero` renders the page title as the only H1 |
| WhatsApp, phone and CTA | Header, mobile bar and `CtaBand` |
| Photos | `src/data/images.ts`, served from R2. `alt` is required. |

## Metadata rules (all page types)

| Field | Rule |
|---|---|
| Title | **Contains the primary keyword**, ideally near the start. About 60 characters or fewer, including " \| Dubai Junk Removal" where the brand is appended. Unique across the site. Reads as a promise, not a keyword list. |
| Meta description | 120–160 characters. Unique. Says what the page offers and why to click. Not a ranking factor, but it drives clicks. |
| H1 | One per page. Can be more human than the title, but on guides it repeats the title. |
| URL | Lowercase, hyphenated, descriptive. Never changed once live without a 301. |
| Canonical | The page's own URL on `https://dubaijunkremovalservices.com` (no `www`). Set automatically. |

## Heading hierarchy

- **H1:** page title, from the template.
- **H2:** the main sections. They should read like a table of contents for the page. On guides, every H2 appears in the "On this page" contents list automatically.
- **H3:** sub-points inside an H2 only. Never skip a level, and never use a heading for visual styling.
- Write headings as plain statements or questions a reader would scan for, such as "Where it doesn't reach". Don't make them keyword strings.

## Page type templates

### Service page (`src/data/services.ts` → `/services/<slug>`)

| Field | Requirement |
|---|---|
| `metaTitle` | "<Service> Dubai: <specific benefit>", absolute (no brand suffix), at most 60 characters. Must not use another page's subject words. See C-1 and C-3. |
| `metaDescription` | 120–160 characters |
| `headline` (H1) | A human, situation-based line |
| `intro` | 2 paragraphs: the real problem, then how the job is done |
| `includes` | 4 concrete inclusions |
| `items` | 6–8 commonly collected items |
| `tips` | 2 practical "before we arrive" tips that are specific to this service |
| `faqs` | 2–3 questions this service actually raises, with honest limits ("we don't…") |
| `related` | 3 sibling services in the same or a neighbouring cluster |
| Structured data | `Service` + `FAQPage` + breadcrumb (automatic) |
| Typical length | About 260–350 words of page-specific text. Don't pad. |

### Area page (`src/data/areas.ts` → `/areas/<slug>`)

| Field | Requirement |
|---|---|
| One page per community | One level only. Never overlap an existing area (for example, Emirates Living covers the Springs, Meadows and Lakes). |
| `intro`, `profile`, `access` | Specific to the area: property mix, building types, gates, lifts, permits, traffic. **A paragraph must stop making sense if you swap in another area name.** |
| `jobs` | 3 typical jobs for this area |
| `tips` | 2 local tips |
| `faqs` | 2 questions specific to the area. Two general FAQs are added by the template. |
| `services` / `nearby` | 3 relevant service slugs. 3 real neighbouring areas that exist in the data. |
| `seoDescription` | 120–160 characters, unique |
| Photo | Unique to the page. A real photo of the area where one exists. Otherwise a property-type photo whose alt text describes only what is shown. |
| Structured data | `Service` (area-served) + `FAQPage` + breadcrumb (automatic) |
| Minimum | **At least 250 words unique to the page.** No sentence may repeat across area pages. The current pages run 437–482 words, including the template FAQs. |

### Guide (`src/data/posts.ts` → `/blog/<slug>`)

| Field | Requirement |
|---|---|
| `title` | A question or problem phrase, in sentence case, at most 60 characters. It's used as both the page title and the H1, because `Post` has no separate meta title. Contains the guide's own keyword. **Never the service keyword** and never an area name. |
| `slug` | The URL reserved in [keyword-map.md](keyword-map.md#reserved-for-planned-guides-30-day-plan). Don't change it after publishing. |
| `description` | 120–160 characters |
| `date` / `updated` | ISO dates. Set `updated` on any meaningful revision. |
| `tag` | One of the existing tags unless a new topic genuinely needs another |
| `relatedService` | The pillar service this guide supports. It renders as a card. |
| `blocks` | `p`, `h2`, `h3`, `ul`, `ol`, `callout` (title optional), `quote` (cite optional) |
| `sources` | Required whenever the guide states a fact about rules, organisations, prices or services that the business doesn't control. Link to the primary or most authoritative source. |
| Opening | The first two sentences answer the question, so they can stand alone as a snippet. The primary keyword appears naturally in the first 100 words. No throat-clearing. |
| Structure | 4–6 H2 sections, following the brief's outline where it fits. Use lists only where the content really is a list. A comparison table is fine where the brief has one. |
| Experience | At least one real example from a job: the area, the access problem and how it was solved. It must come from the owner or crew. Never invent one. If none is available yet, leave it out. |
| FAQs | An optional final "FAQs" H2 with 2–3 questions. They must be unique to the guide, not copied from `/faq` or a service page. The template has no `FAQPage` markup for guides. |
| Calls to action | One natural mention of the WhatsApp photo quote after the opening answer. The template adds the end-of-page call to action and the service card. |
| Closing | A practical decision or next step. Mention the service only where it honestly helps. |
| Updated date | Required on rules content (fines, permits, drop-off points). Set `updated` whenever a fact is rechecked or changed. |
| Structured data | `BlogPosting` (with image, word count and dates) + breadcrumb (automatic). The author is the business until a named `Person` is added. |
| Length | **900–1,600 words for the 30-day plan guides**, depending on the question. The six earlier guides run 290–400 words. Length follows the question. Never pad to reach the range. |

## Internal linking

Links tell readers and Google how pages relate. Current gaps are listed in [cannibalization-report.md](cannibalization-report.md#other-issues-found-during-the-audit-not-cannibalization).

1. **Every guide links up** to its pillar service (automatic via `relatedService`).
2. **Every pillar links down** to its guides. *This is not implemented yet.* Service pages need a "Related guides" block (content plan, Phase 1). Until then, no guide links from its service. Once it exists, update it every Friday with that week's live guides.
3. **Owners get the strongest support.** The page that owns a keyword should receive more contextual links than any page near it. For example, `/pricing` must out-link the pricing guide (C-2).
4. **Area pages** link to 3 nearby areas and 3 services (automatic). Nearby links should be reciprocal where it's geographically true.
5. **Anchor text** describes the target in plain words ("our pricing page", "sofa removal"). Never "click here", and never the same exact-match anchor repeated everywhere.
6. **Guide body links:** the `Block` type has no inline links yet, so links within guide text aren't possible. If added, limit them to 2–4 per guide, each pointing to a page that genuinely helps. The briefs in the 30-day plan list more. Pick the most useful ones.
7. **Only link to live pages.** A guide may link to a planned guide only once that guide is published. Add the link when it goes live, and set `updated`.
8. **Price and cost links go to `/pricing`**, not the pricing guide (C-2).
9. **Area pages** link to at most 2 guides, and only where the area page genuinely covers the topic.

## Structured data rules

- **Only mark up what is visible** on the page.
- **Never add `AggregateRating` or `Review`** unless genuine reviews are displayed on the page. `src/lib/schema.ts` deliberately omits them.
- `FAQPage` markup no longer earns rich results for most sites (Google limited it in 2023). Keep it accurate. Don't duplicate the same Q&As on several URLs (C-4).
- Test changes with Google's Rich Results Test and the Schema.org validator.

## Images

- One unique photo per page where the template has a hero. Never reuse an area photo on another area page.
- **Alt text** describes what is visibly in the photo, in one sentence, with no keyword stuffing. Never claim a photo shows a place it doesn't.
- Licensed (Unsplash, Pexels or the owner's own), recorded in `src/data/area-photo-credits.ts` for area photos.
- Add the file to `public/images` and upload it to R2 (`cloudflare/r2-images`, `npm run upload:remote`). `next/image` handles sizes and AVIF.

## Semantic SEO

Cover the topic the way a knowledgeable local would. Include:
- **Entities:** Dubai Municipality, service lifts, NOCs and move permits, gated-community security, free zones, specific communities and roads, where they matter
- **Related questions:** answer the follow-up a reader will have next
- **Specifics over synonyms:** "book the goods lift with reception the day before" beats repeating "junk removal"

Write these naturally, where they help. Never add a list of terms to a page.
