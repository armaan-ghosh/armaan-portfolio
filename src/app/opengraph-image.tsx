import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Rendered with the default Node runtime so it prerenders statically.
// Every div sets an explicit display to satisfy Satori's layout rules.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0b0e",
          backgroundImage:
            "radial-gradient(900px circle at 80% 0%, rgba(139,147,255,0.18), transparent 60%)",
          padding: "72px",
          color: "#e8eaef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 14,
              border: "1px solid #2a2e37",
              background: "#15181e",
              alignItems: "center",
              justifyContent: "center",
              color: "#8b93ff",
              fontSize: 26,
              fontWeight: 600,
            }}
          >
            AG
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#8b909c" }}>
            {site.eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 920,
            }}
          >
            I build software where product detail and engineering quality both
            matter.
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#8b909c" }}>
            {site.name} · Software Engineer · 2× Shopify intern
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, fontSize: 22, color: "#aeb3be" }}>
          <div style={{ display: "flex" }}>github.com/armaan-ghosh</div>
          <div style={{ display: "flex", color: "#2a2e37" }}>·</div>
          <div style={{ display: "flex" }}>in/armaanghosh</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
