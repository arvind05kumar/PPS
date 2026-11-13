import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Bhaskendra Photography | Prasad Photo & Video Studio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0e0e0e",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "12px solid #1a1712",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Decorative Gold Border Inset */}
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "2px solid #c9a24b",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          {/* Header Script */}
          <div
            style={{
              color: "#e8d9a0",
              fontSize: "26px",
              letterSpacing: "4px",
              marginBottom: "12px",
              fontStyle: "italic",
            }}
          >
            Jai Guru
          </div>

          {/* Main Brand Title */}
          <div
            style={{
              color: "#f6efe6",
              fontSize: "64px",
              fontWeight: 400,
              letterSpacing: "8px",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            BHASKENDRA
          </div>

          <div
            style={{
              color: "#c9a24b",
              fontSize: "22px",
              letterSpacing: "10px",
              textTransform: "uppercase",
              marginTop: "4px",
              fontWeight: 600,
            }}
          >
            PHOTOGRAPHY
          </div>

          {/* Divider line */}
          <div
            style={{
              width: "160px",
              height: "2px",
              backgroundColor: "#c9a24b",
              margin: "24px 0",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              color: "#e8d9a0",
              fontSize: "24px",
              fontStyle: "italic",
            }}
          >
            &ldquo;Every Pheras. Every Smile. Every Memory.&rdquo;
          </div>

          {/* Studio & Location */}
          <div
            style={{
              color: "#a8a29e",
              fontSize: "18px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginTop: "16px",
            }}
          >
            Prasad Photo & Video Studio • Badi Khanjarpur, Bhagalpur
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

