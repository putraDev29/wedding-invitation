"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Props {
    guest: string;
    onOpen: () => void;
}

export default function Cover({ guest, onOpen }: Props) {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 overflow-hidden"
        >
            {/* Background */}
            <motion.div
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 20,
                    ease: "easeOut",
                }}
                className="absolute inset-0"
            >
                <Image
                    src="/images/foto1.jpeg"
                    alt="Wedding"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/65" />

            {/* Decorative Frame */}
            <div className="absolute inset-5 rounded-[40px] border border-white/20" />
            <div className="absolute inset-8 rounded-[34px] border border-[#D4AF37]/40" />

            {/* Gold Glow */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

            {/* Content */}
            <div className="relative flex h-full flex-col items-center justify-center px-8 text-center text-white">

                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: .2 }}
                    className="tracking-[8px] uppercase text-md md:text-sm text-white/80 mb-2"
                >
                    The Wedding Of
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .4 }}
                    className="font-script mt-8 text-4xl md:text-3xl leading-none"
                >
                    Wiwik Puspita Sari
                </motion.h1>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: .6 }}
                    className="my-3 text-4xl text-[#D4AF37]"
                >
                    &
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .8 }}
                    className="font-script text-4xl md:text-3xl leading-none"
                >
                    Moh. Yudianto
                </motion.h1>

                {/* Ornament */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-10 flex items-center gap-5"
                >
                    <div className="h-px w-16 bg-[#D4AF37]" />
                    <span className="text-xl text-[#D4AF37]">❦</span>
                    <div className="h-px w-16 bg-[#D4AF37]" />
                </motion.div>

                {/* Date */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 mb-20"
                >
                    <p className="tracking-[6px] uppercase text-xs text-white/70">
                        Save The Date
                    </p>

                    <h3 className="mt-2 font-title text-2xl md:text-3xl">
                        11 July 2026
                    </h3>
                </motion.div>

                {/* Guest */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    style={{
                        marginTop: "40px"
                    }}
                >
                    <p className="uppercase tracking-[4px] text-xs text-white/70">
                        Kepada Yth.
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold">
                        {guest}
                    </h2>
                </motion.div>

                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpen}
                    style={{
                        padding: "16px 40px", // 16px atas/bawah, 40px kiri/kanan
                        marginTop: "20px",
                        marginBottom: "20px",
                    }}
                    className="group rounded-full border border-[#D4AF37] bg-white/10 backdrop-blur-md transition-all duration-500 hover:bg-[#D4AF37] hover:text-black"
                >
                    <span className="flex items-center gap-2">
                        Buka Undangan
                    </span>
                </motion.button>

                {/* Footer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: .7 }}
                    transition={{ delay: 1.8 }}
                    className="mt-8 max-w-sm text-xs leading-6 tracking-wide text-white/60"
                >
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                    Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
                </motion.p>

            </div>
        </motion.section>
    );
}