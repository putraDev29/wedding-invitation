"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

export default function EventSection() {
  const targetDate = new Date("2026-07-11T09:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(Math.floor((distance / (1000 * 60 * 60)) % 24), 0),
        minutes: Math.max(Math.floor((distance / (1000 * 60)) % 60), 0),
        seconds: Math.max(Math.floor((distance / 1000) % 60), 0),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#FAF7F2]"
      style={{
        marginLeft: "40px",
        marginRight: "40px",
        paddingTop: "100px",
        paddingBottom: "120px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 h-96 w-96 bg-[#D4AF37]/10 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-[#D4AF37]/10 blur-[160px]" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <p
          style={{
            letterSpacing: "8px",
            textTransform: "uppercase",
            color: "#B68D40",
            fontSize: "12px",
          }}
        >
          Save The Date
        </p>

        <h2
          style={{
            marginTop: "24px",
            fontSize: "52px",
            fontFamily: "serif",
            color: "#222",
          }}
        >
          Wedding Day
        </h2>
      </motion.div>

      {/* COUNTDOWN */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "24px",
          marginBottom: "100px",
        }}
      >
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            style={{
              width: "110px",
              height: "110px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "18px",
              border: "1px solid rgba(212, 175, 55, 0.35)",
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <span style={{ fontSize: "28px", fontWeight: 600, color: "#222" }}>
              {item.value}
            </span>
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "2px",
                color: "#B68D40",
                marginTop: "8px",
              }}
            >
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* EVENT CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          marginBottom: "80px",
        }}
      >
        {/* AKAD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{
            borderRadius: "24px",
            border: "1px solid rgba(212,175,55,0.25)",
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(14px)",
            padding: "28px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ display: "flex", gap: "10px", marginBottom: "18px" }}>
            <CalendarDays color="#B68D40" />
            <h3 style={{ fontSize: "20px", fontWeight: 600 }}>Akad Nikah</h3>
          </div>

          <p style={{ color: "#666", lineHeight: 1.8 }}>
            Sabtu, 11 Juli 2026
            <br />
           -
          </p>
        </motion.div>

        {/* RESEPSI */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{
            borderRadius: "24px",
            border: "1px solid rgba(212,175,55,0.25)",
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(14px)",
            padding: "28px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ display: "flex", gap: "10px", marginBottom: "18px" }}>
            <CalendarDays color="#B68D40" />
            <h3 style={{ fontSize: "20px", fontWeight: 600 }}>Resepsi</h3>
          </div>

          <p style={{ color: "#666", lineHeight: 1.8 }}>
            Sabtu, 11 Juli 2026
            <br />
            Jam Bebas
          </p>
        </motion.div>
      </div>

      {/* LOCATION CENTER PREMIUM */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{
          textAlign: "center",
          borderRadius: "28px",
          border: "1px solid rgba(212,175,55,0.25)",
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(14px)",
          padding: "50px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
        }}
      >
        {/* CENTER ICON */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              padding: "14px",
              borderRadius: "50%",
              background: "rgba(212,175,55,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MapPin size={30} color="#B68D40" />
          </div>
        </div>

        <h3 style={{ fontSize: "22px" }}>Lokasi Acara</h3>

        <p style={{ marginTop: "10px", color: "#666" }}>
          Labanasem, Jawa Timur
        </p>

        <a
          href="https://maps.google.com"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "22px",
            padding: "12px 26px",
            borderRadius: "999px",
            background: "#D4AF37",
            color: "#000",
            fontWeight: 500,
            transition: "0.3s",
          }}
        >
          Buka Google Maps
        </a>
      </motion.div>
    </section>
  );
}