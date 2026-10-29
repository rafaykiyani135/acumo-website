import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = "Acumo AI — AI Voice Agents, Chatbots & Web Development for SMBs";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#060B19",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -200,
            width: 760,
            height: 760,
            borderRadius: 9999,
            backgroundColor: "rgba(37, 99, 255, 0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -320,
            left: -240,
            width: 640,
            height: 640,
            borderRadius: 9999,
            backgroundColor: "rgba(37, 99, 255, 0.10)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                backgroundColor: "#2563FF",
              }}
            />
            <div
              style={{
                fontSize: 44,
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: 4,
              }}
            >
              ACUMO AI
            </div>
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#8FA3C8",
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Technical Engineering
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 96,
              height: 10,
              backgroundColor: "#2563FF",
              marginBottom: 40,
            }}
          />
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: -1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>AI Voice Agents, Chatbots</div>
            <div>& Web Development for SMBs</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ fontSize: 26, color: "#8FA3C8", fontWeight: 700 }}>
            acumoai.com
          </div>
          <div style={{ fontSize: 26, color: "#5F7398", fontWeight: 700 }}>
            AI Voice Agents · Chatbots · Web Development
          </div>
        </div>
      </div>
    ),
    size
  );
}
