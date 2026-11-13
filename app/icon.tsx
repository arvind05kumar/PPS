import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  const filePath = path.join(process.cwd(), "public/images/logo-wings.png");
  const fileBuffer = fs.readFileSync(filePath);
  const base64 = `data:image/png;base64,${fileBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0e0e0e",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
          padding: "2px",
        }}
      >
        <img
          src={base64}
          alt="Bhaskendra Photography Wings"
          style={{ width: "28px", height: "auto", objectFit: "contain" }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
