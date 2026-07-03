"use client";

import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

import Cover from "@/components/Cover";
import WeddingExperience from "@/components/WeddingExperience";

export default function InvitationPage() {
  const [opened, setOpened] = useState(false);

  const params = useParams();
  const searchParams = useSearchParams();

  // slug undangan
  const slug =
    typeof params.slug === "string"
      ? decodeURIComponent(params.slug)
      : "";

  // nama tamu
  const guest = searchParams.get("to") ?? "Tamu Undangan";

  /**
   * Sementara hardcode.
   * Nanti bisa diganti fetch dari Laravel berdasarkan slug.
   */
  const invitation = {
    slug,
    bride: "Wiwik Puspita Sari",
    groom: "Moh. Yudianto",
    weddingDate: "11 Juli 2026",
  };

  return (
    <>
      {!opened && (
        <Cover
          guest={guest}
          onOpen={() => setOpened(true)}
        />
      )}

      {opened && (
        <WeddingExperience
          guest={guest}
        />
      )}
    </>
  );
}