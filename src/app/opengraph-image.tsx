import { ImageResponse } from "next/og";

export const alt = "Dubai junk removal, priced from one photo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#0a1a2f", color: "#ffffff" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 80px" }}>
          <div style={{ fontSize: 30, fontWeight: 700, color: "#f5b13d", letterSpacing: 2 }}>DUBAIJUNKREMOVALSERVICES.COM</div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 24, fontSize: 92, fontWeight: 800, lineHeight: 1.04 }}>
            <span>Dubai junk removal,</span>
            <span>priced from one photo.</span>
          </div>
        </div>
        <div style={{ height: 40, display: "flex", background: "#f5b13d" }} />
      </div>
    ),
    size,
  );
}
