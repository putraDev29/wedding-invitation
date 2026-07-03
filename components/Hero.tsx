"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

interface Props {
    slug?: string;
}

export default function Hero({ slug }: Props) {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#F8F4EF] flex items-center">

            {/* Glow */}
            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

            <div className="container mx-auto px-6 py-24">
                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative mx-auto"
                    >
                        <div className="absolute -inset-5 rounded-[42px] border border-[#D4AF37]/30" />

                        <div className="relative h-[540px] w-[360px] overflow-hidden rounded-[32px] shadow-2xl">
                            <Image
                                src="/images/foto2.jpeg"
                                alt="Bride & Groom"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center lg:text-left"
                    >

                        <p className="tracking-[10px] uppercase text-xs text-[#B68D40]">
                            The Wedding Of
                        </p>

                        <h1 className="mt-6 font-script text-6xl md:text-8xl text-[#222]">
                            Wiwik
                        </h1>

                        <div className="my-4 text-3xl text-[#B68D40]">&</div>

                        <h1 className="font-script text-6xl md:text-8xl text-[#222]">
                            Yudi
                        </h1>

                        <div className="mx-auto lg:mx-0 mt-10 h-[2px] w-24 bg-[#D4AF37]/70" />

                        <div className="mt-10 space-y-3 text-[#666]">
                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                <CalendarDays size={18} />
                                <span>11 Juli 2026</span>
                            </div>

                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                <MapPin size={18} />
                                <span>Ds. Labanasem - Kec. Babat</span>
                            </div>
                        </div>

                        <div className="mt-10 rounded-2xl border border-[#D4AF37]/20 bg-white/40 backdrop-blur-md p-6" 
                        style={{ marginTop: "40px", marginBottom: "40px" }}>
                            <p className="text-sm italic text-[#555] leading-7">
                                "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.""
                            </p>

                            <p className="mt-3 text-sm text-[#B68D40]">
                                QS. Ar-Rum : 21
                            </p>
                        </div>

                    </motion.div>

                </div>
            </div>

        </section>
    );
}