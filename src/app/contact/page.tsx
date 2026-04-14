import type { Metadata } from "next";
import { ContactLeadSection } from "@/components/ContactLeadSection";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact et precommande pour Canteen Noise Kit : interet pour le kit, lancement et devis.",
  alternates: {
    canonical: `${SITE_ORIGIN}/contact/`,
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
      <ContactLeadSection titleTag="h1" sectionClassName="mt-0" />
    </main>
  );
}
