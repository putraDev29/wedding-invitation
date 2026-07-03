"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send, Heart } from "lucide-react";

type Wish = {
  name: string;
  message: string;
};

export default function RSVPSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("wishes");

    if (data) {
      setWishes(JSON.parse(data));
    }
  }, []);

  const handleSubmit = () => {
    if (!name.trim() || !message.trim()) return;

    const newWish = {
      name,
      message,
    };

    const updated = [newWish, ...wishes];

    setWishes(updated);

    localStorage.setItem("wishes", JSON.stringify(updated));

    setName("");
    setMessage("");
  };

  return (
    <section
      className="relative overflow-hidden bg-[#FAF7F2]"
      style={{
        padding: "80px 20px",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(212,175,55,.15)",
          filter: "blur(140px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(212,175,55,.15)",
          filter: "blur(140px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: 50,
          }}
        >
          <p
            style={{
              letterSpacing: 5,
              color: "#B68D40",
              fontWeight: 600,
            }}
          >
            RSVP & Wishes
          </p>

          <h2
            style={{
              fontSize: "clamp(32px,5vw,48px)",
              marginTop: 15,
            }}
          >
            Wedding Wishes
          </h2>
        </motion.div>

        {/* Form */}
        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 15,
            position: "relative",
            zIndex: 20,
          }}
        >
          <input
            type="text"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda"
            style={{
              width: "100%",
              padding: 16,
              borderRadius: 14,
              border: "1px solid rgba(212,175,55,.35)",
              outline: "none",
              fontSize: 16,
              background: "#fff",
              position: "relative",
              zIndex: 100,
              touchAction: "manipulation",
            }}
          />

          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis ucapan..."
            style={{
              width: "100%",
              padding: 16,
              borderRadius: 14,
              border: "1px solid rgba(212,175,55,.35)",
              outline: "none",
              resize: "vertical",
              fontSize: 16,
              background: "#fff",
              position: "relative",
              zIndex: 100,
              touchAction: "manipulation",
            }}
          />

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            onClick={handleSubmit}
            style={{
              border: "none",
              cursor: "pointer",
              padding: 16,
              borderRadius: 999,
              background: "#D4AF37",
              color: "#000",
              fontWeight: 600,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Send size={18} />
            Kirim Ucapan
          </motion.button>
        </div>

        {/* Wishes */}
        <div
          style={{
            marginTop: 60,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 800,
            marginInline: "auto",
          }}
        >
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                padding: 20,
                borderRadius: 18,
                border: "1px solid rgba(212,175,55,.2)",
                background: "rgba(255,255,255,.75)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <Heart size={15} color="#B68D40" />
                <strong>{wish.name}</strong>
              </div>

              <p
                style={{
                  color: "#555",
                  lineHeight: 1.7,
                }}
              >
                {wish.message}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}