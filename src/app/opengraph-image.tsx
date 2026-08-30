import { ImageResponse } from "next/og";

export const alt = "Agyl Restu Hermanto — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#071a36",
        color: "white",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: 72,
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
        <span style={{ color: "#77b5ff", fontSize: 28, letterSpacing: 4, textTransform: "uppercase" }}>Software Engineer</span>
        <strong style={{ fontSize: 78, lineHeight: 1.05, marginTop: 24 }}>Agyl Restu Hermanto</strong>
        <span style={{ color: "#c6d8ee", fontSize: 34, marginTop: 28 }}>Full-stack web · Android · Backend · Cloud</span>
      </div>
    </div>,
    size,
  );
}
