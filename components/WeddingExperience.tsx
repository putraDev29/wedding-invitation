"use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import LoveStory from "@/components/LoveStory";
import EventSection from "@/components/Event";
import RSVPSection from "@/components/RSVP";
import GallerySection from "./Gallery";
import GiftSection from "./Gift";

interface Props {
  guest: string;
}

export default function WeddingExperience({ guest }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    audioRef.current!.volume = 0.5;

    setTimeout(() => {
      heroRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 200);
  }, []);

  useEffect(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  return (
    <div className="relative">

      <audio ref={audioRef} loop>
        <source src="/music/wedding.mp3" type="audio/mp3" />
      </audio>

      <div ref={heroRef}>
        <Hero slug={guest} />
      </div>

      <LoveStory />
      <GallerySection/>
      <EventSection />
      <RSVPSection />

    <GiftSection />
    </div>
  );
}