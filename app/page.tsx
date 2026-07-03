"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import Cover from "@/components/Cover";
import WeddingExperience from "@/components/WeddingExperience";

export default function InvitationPage() {
  const [opened, setOpened] = useState(false);

  const params = useParams();

  const guest =
    params?.guest && typeof params.guest === "string"
      ? decodeURIComponent(params.guest)
      : "";

  return (
    <>
      {!opened && (
        <Cover
          guest={guest}
          onOpen={() => setOpened(true)}
        />
      )}

      {opened && <WeddingExperience guest={guest} />}
    </>
  );
}