import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#0e0e0e",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: "1.5px solid #c9a24b",
          color: "#c9a24b",
        }}
      >
        <span style={{ fontSize: 13, fontWeight: "bold" }}>BP</span>
      </div>
    ),
    {
      ...size,
    }
  );
}

