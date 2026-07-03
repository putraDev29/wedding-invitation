"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const stories = [
    {
        year: "2022",
        title: "Awal Pertemuan",
        description:
            "Atas izin Allah, kami dipertemukan dalam suasana yang sederhana namun penuh makna."
    },
    {
        year: "2023",
        title: "Menjalin Hubungan",
        description:
            "Dengan niat baik, kami memutuskan untuk saling mengenal dan membangun komitmen menuju ridho-Nya.",
    },
    {
        year: "2026",
        title: "Hari Bahagia",
        description:
            "InsyaAllah kami akan mengikat janji suci pernikahan dan memulai perjalanan baru sebagai keluarga.",
    },
];

export default function LoveStory() {
    return (
        <section
            className="relative overflow-hidden bg-[#FAF7F2]"
            style={{
               
                marginLeft: "8px",
                marginRight: "8px"
            }}
        >
            {/* Glow Background */}
            <div className="absolute top-0 left-0 h-96 w-96 bg-[#D4AF37]/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 bg-[#D4AF37]/10 blur-[140px]" />

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center px-6"
                style={{
                    marginTop: "40px",
                }}
            >
                <p className="uppercase tracking-[8px] text-[#B68D40] text-sm">
                    Our Journey
                </p>

                <h2 className="font-script mt-6 text-6xl md:text-7xl text-[#222]">
                    Love Story
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-gray-600 leading-8">
                    Setiap perjalanan memiliki cerita. Inilah kisah perjalanan cinta kami
                    hingga akhirnya dipertemukan dalam ikatan suci.
                </p>
            </motion.div>

            {/* TIMELINE LINE */}
            <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent md:block" />

            {/* STORIES */}
            <div
                style={{
                    marginTop: "60px",
                    marginBottom: "60px",
                    marginLeft: "8px",
                    marginRight: "8px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                    gap: "60px",
                }}
            >
                {stories.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 0 ? "" : "md:flex-row-reverse"
                            }`}
                    >
                        {/* CARD */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="w-full md:w-1/2"
                        >
                            <div className="relative rounded-3xl border border-[#D4AF37]/20 bg-white/70 backdrop-blur-xl shadow-xl p-10"
                                style={{
                                    padding: "14px"
                                }}>

                                {/* YEAR */}
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="h-px w-10 bg-[#D4AF37]" />
                                    <span className="tracking-[4px] text-sm text-[#B68D40]">
                                        {item.year}
                                    </span>
                                    <span className="h-px w-10 bg-[#D4AF37]" />
                                </div>

                                {/* TITLE */}
                                <h3 className="text-3xl font-semibold text-[#222]">
                                    {item.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="mt-5 text-gray-600 leading-8">
                                    {item.description}
                                </p>

                                {/* FLOATING HEART */}
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="mt-6 text-[#D4AF37]"
                                >
                                    <Heart size={18} fill="#D4AF37" />
                                </motion.div>

                            </div>
                        </motion.div>

                        {/* CENTER DOT */}
                        <div className="hidden md:flex items-center justify-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring" }}
                                className="h-4 w-4 rounded-full bg-[#D4AF37] shadow-lg"
                            />
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
}