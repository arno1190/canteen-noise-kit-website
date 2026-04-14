import Link from "next/link";
import { LeadFormFallback } from "@/components/LeadFormFallback";
import { NewsletterForm } from "@/components/NewsletterForm";
import { FORM_COPY_FR } from "@/lib/form-copy-fr";
import { getNewsletterFormAction } from "@/lib/formspree";

type Props = {
  /** Anchor id for in-page links (home uses `#contact`). */
  sectionId?: string;
  titleTag?: "h1" | "h2";
  /** Merged with the section layout classes. */
  sectionClassName?: string;
};

export function ContactLeadSection({
  sectionId = "contact",
  titleTag = "h2",
  sectionClassName = "mt-10",
}: Props) {
  const newsletterAction = getNewsletterFormAction();
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null;
  const Title = titleTag;

  return (
    <section
      id={sectionId}
      className={`rounded-3xl bg-slate-900 p-8 text-white shadow-sm md:p-10 ${sectionClassName}`}
    >
      <Title className="text-3xl font-bold">Contact et precommande</Title>
      <p className="mt-3 max-w-2xl text-slate-300">
        {newsletterAction ? (
          <>
            Laissez votre email pour etre informe du lancement et recevoir les
            informations de precommande.
          </>
        ) : contactEmail ? (
          FORM_COPY_FR.leadFormUnavailable.homeIntroWithEmail
        ) : (
          FORM_COPY_FR.leadFormUnavailable.homeIntroNoEmail
        )}
      </p>
      {newsletterAction ? (
        <NewsletterForm
          action={newsletterAction}
          formClassName="mt-6 flex flex-col flex-wrap gap-3 sm:flex-row"
        />
      ) : (
        <LeadFormFallback contactEmail={contactEmail} />
      )}
      <p className="mt-3 text-xs text-slate-400">
        Pour les commandes détaillées :{" "}
        <Link href="/tarifs#commander" className="underline hover:text-white">
          Tarifs &amp; commande
        </Link>
        .
      </p>
    </section>
  );
}
