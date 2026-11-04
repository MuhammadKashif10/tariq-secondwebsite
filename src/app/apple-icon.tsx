import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a1a2f" }}>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <div style={{ width: 84, height: 70, background: "#f5b13d" }} />
          <div style={{ width: 44, height: 46, marginLeft: 6, background: "#ffffff" }} />
        </div>
      </div>
    ),
    size,
  );
}
