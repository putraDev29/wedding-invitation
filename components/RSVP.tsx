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

  // load dari localStorage
  useEffect(() => {
    const data = localStorage.getItem("wishes");
    if (data) {
      setWishes(JSON.parse(data));
    }
  }, []);

  // save ke localStorage
  const handleSubmit = () => {
    if (!name || !message) return;

    const newWish = { name, message };
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
        marginLeft: "40px",
        marginRight: "40px",
        padding: "80px 20px",
      }}
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 h-96 w-96 bg-[#D4AF37]/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-[#D4AF37]/10 blur-[150px]" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        <p style={{ letterSpacing: "6px", color: "#B68D40" }}>
          RSVP & Wishes
        </p>

        <h2 style={{ fontSize: "48px", marginTop: "20px" }}>
          Wedding Wishes
        </h2>
      </motion.div>

      {/* FORM */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama Anda"
          style={{
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid rgba(212,175,55,0.3)",
            outline: "none",
          }}
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tulis ucapan..."
          rows={4}
          style={{
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid rgba(212,175,55,0.3)",
            outline: "none",
            resize: "none",
          }}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          style={{
            background: "#D4AF37",
            color: "#000",
            padding: "14px",
            borderRadius: "999px",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Send size={16} />
          Kirim Ucapan
        </motion.button>
      </div>

      {/* LIST WISHES */}
      <div
        style={{
          maxWidth: "800px",
          margin: "60px auto 0",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {wishes.map((wish, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              padding: "18px",
              borderRadius: "16px",
              border: "1px solid rgba(212,175,55,0.2)",
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Heart size={14} color="#B68D40" />
              <strong>{wish.name}</strong>
            </div>

            <p style={{ marginTop: "6px", color: "#555" }}>
              {wish.message}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}