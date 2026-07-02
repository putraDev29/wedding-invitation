"use client";

import { motion } from "framer-motion";

export default function GiftSection() {
  const copyToClipboard = (text:any) => {
    navigator.clipboard.writeText(text);
    alert("Nomor rekening disalin!");
  };

  return (
    <section
      style={{
        backgroundColor: "#FAF7F2",
        padding: "120px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "400px",
          height: "400px",
          background: "rgba(212,175,55,0.1)",
          filter: "blur(150px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "-120px",
          width: "400px",
          height: "400px",
          background: "rgba(212,175,55,0.1)",
          filter: "blur(150px)",
        }}
      />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <p style={{ letterSpacing: "8px", color: "#B68D40", marginBottom: "10px" }}>
          Wedding Gift
        </p>

        <h2 style={{ fontSize: "44px", fontWeight: 300 }}>
          Kirim Hadiah
        </h2>

        <p style={{ marginTop: "14px", color: "#777" }}>
          Doa restu Anda adalah hadiah paling berharga bagi kami
        </p>
      </motion.div>

      {/* CARD WRAPPER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* MAIN CARD */}
        <div
          style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: "24px",
            padding: "50px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          }}
        >

          {/* GOLD TOP LINE */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "3px",
              width: "100%",
              background:
                "linear-gradient(to right, transparent, #D4AF37, transparent)",
            }}
          />

          {/* CARD LIST */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* BCA */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "18px",
                borderRadius: "16px",
                background: "#fff",
                border: "1px solid #eee",
              }}
            >
              <div>
                <p style={{ fontSize: "12px", color: "#aaa" }}>BANK</p>
                <p style={{ fontSize: "18px", fontWeight: 600 }}>BCA</p>
                <p style={{ fontSize: "13px", color: "#777" }}>A/N: Nama Pengantin</p>
              </div>

              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "12px", color: "#aaa" }}>REKENING</p>
                <p style={{ fontFamily: "monospace", fontSize: "16px" }}>
                  1234567890
                </p>
                <button
                  onClick={() => copyToClipboard("1234567890")}
                  style={{
                    marginTop: "6px",
                    fontSize: "12px",
                    color: "#B68D40",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                  }}
                >
                  Copy
                </button>
              </div>
            </div>

            {/* BRI */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "18px",
                borderRadius: "16px",
                background: "#fff",
                border: "1px solid #eee",
              }}
            >
              <div>
                <p style={{ fontSize: "12px", color: "#aaa" }}>BANK</p>
                <p style={{ fontSize: "18px", fontWeight: 600 }}>BRI</p>
                <p style={{ fontSize: "13px", color: "#777" }}>A/N: Nama Pengantin</p>
              </div>

              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "12px", color: "#aaa" }}>REKENING</p>
                <p style={{ fontFamily: "monospace", fontSize: "16px" }}>
                  0987654321
                </p>
                <button
                  onClick={() => copyToClipboard("0987654321")}
                  style={{
                    marginTop: "6px",
                    fontSize: "12px",
                    color: "#B68D40",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                  }}
                >
                  Copy
                </button>
              </div>
            </div>

            {/* E-WALLET */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "18px",
                borderRadius: "16px",
                background:
                  "linear-gradient(to right, #fff, #FAF7F2)",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              <div>
                <p style={{ fontSize: "12px", color: "#aaa" }}>E-WALLET</p>
                <p style={{ fontSize: "18px", fontWeight: 600 }}>
                  DANA / OVO / GOPAY
                </p>
                <p style={{ fontSize: "13px", color: "#777" }}>A/N: Nama Pengantin</p>
              </div>

              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "12px", color: "#aaa" }}>NOMOR</p>
                <p style={{ fontFamily: "monospace", fontSize: "16px" }}>
                  0812-3456-7890
                </p>
                <button
                  onClick={() => copyToClipboard("0812-3456-7890")}
                  style={{
                    marginTop: "6px",
                    fontSize: "12px",
                    color: "#B68D40",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                  }}
                >
                  Copy
                </button>
              </div>
            </div>

          </div>

          {/* FOOTER */}
          <p
            style={{
              textAlign: "center",
              marginTop: "40px",
              color: "#888",
              fontSize: "14px",
            }}
          >
            Terima kasih atas doa & restu 💛
          </p>

        </div>
      </motion.div>
    </section>
  );
}