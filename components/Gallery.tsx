"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7 },
  },
};

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/images/foto3.jpeg",
    "/images/foto4.jpeg",
    "/images/foto5.jpeg",
    "/images/foto6.jpeg",
  ];

  useEffect(() => {
    const handleKeyDown = (e:any ) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] px-5 md:px-10 py-24">

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] h-[400px] w-[400px] bg-[#D4AF37]/10 blur-[140px]" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[400px] w-[400px] bg-[#D4AF37]/10 blur-[140px]" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="tracking-[8px] text-[#B68D40] uppercase text-sm">
          Our Memories
        </p>

        <h2 className="text-4xl md:text-5xl font-light mt-3">
          Wedding Gallery
        </h2>

        <p className="mt-4 text-gray-500 mb-10" style={{ marginBottom: "40px" }}>
          Setiap momen adalah cerita yang tak tergantikan
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-12 gap-4 max-w-6xl mx-auto"
        style={{ paddingLeft: "8px", paddingRight: "8px" }}
      >

        {/* BIG LEFT */}
        <motion.div
          variants={item}
          className="col-span-12 md:col-span-6 h-[420px] relative rounded-3xl overflow-hidden cursor-pointer group"
          onClick={() => setSelectedImage(images[0])}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src={images[0]}
            alt="gallery-1"
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* RIGHT TOP */}
        <motion.div
          variants={item}
          className="col-span-12 md:col-span-6 h-[200px] relative rounded-2xl overflow-hidden cursor-pointer group"
          onClick={() => setSelectedImage(images[1])}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src={images[1]}
            alt="gallery-2"
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />
        </motion.div>

        {/* BOTTOM LEFT */}
        <motion.div
          variants={item}
          className="col-span-6 md:col-span-3 h-[200px] relative rounded-2xl overflow-hidden cursor-pointer group"
          onClick={() => setSelectedImage(images[2])}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={images[2]}
            alt="gallery-3"
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />
        </motion.div>

        {/* BOTTOM RIGHT */}
        <motion.div
          variants={item}
          className="col-span-6 md:col-span-3 h-[200px] relative rounded-2xl overflow-hidden cursor-pointer group"
          onClick={() => setSelectedImage(images[3])}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={images[3]}
            alt="gallery-4"
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />
        </motion.div>

      </motion.div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-6 text-white text-3xl font-bold hover:scale-110 transition"
            >
              ✕
            </button>

            {/* IMAGE */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="fullscreen"
                fill
                className="object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}