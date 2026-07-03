"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send, Heart, Loader2 } from "lucide-react";

type Wish = {
  id: number;
  name: string;
  message: string;
  created_at?: string;
};

export default function RSVPSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const API = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    loadWishes();
  }, []);

  async function loadWishes() {
    try {
      setLoading(true);

      const res = await fetch(`${API}/wishes`, {
        cache: "no-store",
      });

      const json = await res.json();

      if (json.success) {
        setWishes(json.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit() {
    if (!name.trim()) return alert("Nama wajib diisi.");
    if (!message.trim()) return alert("Ucapan wajib diisi.");

    try {
      setSending(true);

      const res = await fetch(`${API}/wishes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          message,
        }),
      });

      const json = await res.json();

      if (json.success) {
        setWishes((prev) => [json.data, ...prev]);

        setName("");
        setMessage("");
      } else {
        alert("Gagal mengirim ucapan");
      }
    } catch (err) {
      console.log(err);
      alert("Terjadi kesalahan.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      className="relative overflow-hidden bg-[#FAF7F2]"
      style={{
        padding: "80px 20px",
      }}
    >
      {/* Glow */}
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
        }}
      />

      <div
        style={{
          maxWidth: 900,
          margin: "auto",
          position: "relative",
          zIndex: 2,
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
              color: "#B68D40",
              letterSpacing: 5,
              fontWeight: 600,
            }}
          >
            RSVP & Wishes
          </p>

          <h2
            style={{
              fontSize: "clamp(34px,5vw,50px)",
              marginTop: 15,
            }}
          >
            Wedding Wishes
          </h2>
        </motion.div>

        {/* Form */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 15,
            maxWidth: 650,
            margin: "auto",
          }}
        >
          <input
            type="text"
            placeholder="Nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: 16,
              borderRadius: 14,
              border: "1px solid rgba(212,175,55,.35)",
              outline: "none",
              fontSize: 16,
              background: "#fff",
            }}
          />

          <textarea
            rows={5}
            placeholder="Tulis ucapan..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              padding: 16,
              borderRadius: 14,
              border: "1px solid rgba(212,175,55,.35)",
              outline: "none",
              resize: "vertical",
              fontSize: 16,
              background: "#fff",
            }}
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: .98 }}
            disabled={sending}
            onClick={handleSubmit}
            style={{
              border: "none",
              borderRadius: 999,
              padding: 16,
              cursor: "pointer",
              background: "#D4AF37",
              color: "#000",
              fontWeight: 700,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            {sending ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Mengirim...
              </>
            ) : (
              <>
                <Send size={18} />
                Kirim Ucapan
              </>
            )}
          </motion.button>
        </div>

        {/* List */}
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
          {loading && (
            <div
              style={{
                textAlign: "center",
                padding: 40,
              }}
            >
              <Loader2
                className="animate-spin"
                size={40}
                color="#B68D40"
              />
            </div>
          )}

          {!loading && wishes.length === 0 && (
            <div
              style={{
                textAlign: "center",
                color: "#888",
                padding: 30,
              }}
            >
              Belum ada ucapan.
            </div>
          )}

          {wishes.map((wish) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                padding: 20,
                borderRadius: 18,
                border: "1px solid rgba(212,175,55,.2)",
                background: "rgba(255,255,255,.85)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 10,
                }}
              >
                <Heart size={15} color="#B68D40" />

                <strong>{wish.name}</strong>
              </div>

              <p
                style={{
                  lineHeight: 1.8,
                  color: "#555",
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