import Link from "next/link";
import { LeadFormFallback } from "@/components/LeadFormFallback";
import { NewsletterForm } from "@/components/NewsletterForm";
import { getNewsletterFormAction } from "@/lib/formspree";

export default function Home() {
  const newsletterAction = getNewsletterFormAction();
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
      <section className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <p className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
          Le Feu Tricolore Sonore
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
          Le kit IoT educatif qui transforme le bruit de cantine en projet
          concret pour les eleves.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-700">
          Canteen Noise Kit aide les ecoles a construire un feu tricolore sonore
          avec ESP32, micro et bande LED. Les enfants montent, programment et
          installent eux-memes la solution.
        </p>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          <strong className="text-slate-800">Aujourd&apos;hui</strong>, tout
          passe par des supports concrets (PDF, firmware, kits). Un{" "}
          <strong className="text-slate-800">pilote portail</strong> pour les
          partenaires B2G peut s&apos;ouvrir{" "}
          <strong className="text-slate-800">sur invitation</strong>, sans
          remplacer les PDF : ce site ne propose{" "}
          <strong className="text-slate-800">
            ni connexion portail ni date de mise en ligne
          </strong>{" "}
          publique — le board tranche le perimetre avant toute annonce.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            className="rounded-full bg-emerald-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-700"
            href="/tarifs#commander"
          >
            Precommander
          </Link>
          <a
            className="rounded-full bg-amber-300 px-6 py-3 text-center font-semibold text-amber-900 transition hover:bg-amber-400"
            href="#fonctionnement"
          >
            Voir le fonctionnement
          </a>
        </div>
      </section>

      <section
        id="probleme"
        className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10"
      >
        <h2 className="text-3xl font-bold">Le probleme</h2>
        <p className="mt-4 text-slate-700">
          Le bruit dans les cantines scolaires impacte le confort des enfants,
          la qualite des repas et la fatigue des equipes. Les municipalites et
          etablissements cherchent des solutions pedagogiques, simples a
          deployer et mesurables.
        </p>
      </section>

      <section
        id="solution"
        className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10"
      >
        <h2 className="text-3xl font-bold">La solution</h2>
        <p className="mt-4 text-slate-700">
          Un kit compose d&apos;un ESP32, d&apos;un microphone et d&apos;une
          bande LED. Les eleves apprennent l&apos;electronique, la programmation
          et la sensibilisation a l&apos;environnement sonore en co-construisant
          l&apos;outil de leur ecole.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-emerald-50 p-5">
            <p className="text-2xl">🟢</p>
            <p className="mt-2 font-semibold">Zone calme</p>
          </div>
          <div className="rounded-2xl bg-amber-50 p-5">
            <p className="text-2xl">🟡</p>
            <p className="mt-2 font-semibold">Attention au volume</p>
          </div>
          <div className="rounded-2xl bg-rose-50 p-5">
            <p className="text-2xl">🔴</p>
            <p className="mt-2 font-semibold">Niveau sonore eleve</p>
          </div>
        </div>
      </section>

      <section
        id="fonctionnement"
        className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10"
      >
        <h2 className="text-3xl font-bold">Comment ca marche</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold">1. Construire</h3>
            <p className="mt-2 text-sm text-slate-700">
              Assemblage du kit en atelier, accessible aux classes et
              periscolaires.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold">2. Programmer</h3>
            <p className="mt-2 text-sm text-slate-700">
              Chargement du firmware et personnalisation des seuils de bruit.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold">3. Installer</h3>
            <p className="mt-2 text-sm text-slate-700">
              Mise en place en cantine avec suivi visible des progres.
            </p>
          </article>
        </div>
      </section>

      <section
        id="tarifs"
        className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10"
      >
        <h2 className="text-3xl font-bold">Tarifs</h2>
        <p className="mt-2 text-slate-700">
          Tableau comparatif, FAQ tarifs et formulaire de commande sur la page
          dediee.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-semibold">Guide numerique</h3>
            <p className="mt-1 text-2xl font-bold">~29 EUR</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>PDF pas a pas</li>
              <li>Firmware telechargeable</li>
              <li>Acces communaute</li>
            </ul>
          </article>
          <article className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6">
            <h3 className="font-semibold">Kit complet</h3>
            <p className="mt-1 text-2xl font-bold">~79 EUR</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>Composants inclus</li>
              <li>Guide imprime</li>
              <li>Stickers pedagogiques</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-semibold">Kit premium pre-assemble</h3>
            <p className="mt-1 text-2xl font-bold">~149 EUR</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>Kit pre-assemble</li>
              <li>Supports atelier + videos</li>
              <li>1h d&apos;accompagnement</li>
            </ul>
          </article>
        </div>
        <div className="mt-8">
          <Link
            href="/tarifs"
            className="inline-flex rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Voir tarifs detailles et commander
          </Link>
        </div>
      </section>

      <section
        id="collectivites"
        className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10"
      >
        <h2 className="text-3xl font-bold">Pour les ecoles et collectivites</h2>
        <p className="mt-4 text-slate-700">
          Offre B2B/B2G avec tarifs en volume, accompagnement pedagogique et
          alignement avec les programmes scolaires. Compatible avec les
          objectifs PEDT et les projets de sensibilisation au bien-vivre
          ensemble.
        </p>
      </section>

      <section
        id="portail-pilote"
        className="mt-10 scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
        aria-labelledby="titre-portail-pilote"
      >
        <h2 id="titre-portail-pilote" className="text-3xl font-bold">
          PDF &amp; kits aujourd&apos;hui — pilote portail sur invitation
        </h2>
        <p className="mt-4 text-slate-700">
          Pour les mairies, directions d&apos;etablissement et services
          techniques : voici comment lire notre feuille de route publique sans
          sur-promettre un produit en ligne.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-100">
            <h3 className="text-lg font-semibold text-emerald-900">
              Piste A — Disponible maintenant
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Guides PDF, firmware telechargeable, kits et ateliers.</li>
              <li>
                Commandes et devis via la page{" "}
                <Link
                  href="/tarifs"
                  className="font-medium text-emerald-800 underline"
                >
                  Tarifs &amp; commande
                </Link>
                .
              </li>
              <li>
                Reference operationnelle pour les equipes sur le terrain, hors
                dependance a un compte eleve ou parent.
              </li>
            </ul>
          </article>
          <article className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">
              Piste B — Pilote portail (exploration B2G)
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>
                Eventuel espace en ligne, <strong>invite seulement</strong>,
                pour certains partenaires institutionnels — pas un portail grand
                public.
              </li>
              <li>
                <strong>Aucun calendrier</strong> ni liste de fonctionnalites
                figees n&apos;est annonce ici : le board valide le perimetre
                avant communication officielle.
              </li>
              <li>
                Pas de bouton &laquo; connexion &raquo; sur ce site : manifestez
                un interet via{" "}
                <a
                  href="#contact"
                  className="font-medium text-emerald-800 underline"
                >
                  contact / precommande
                </a>{" "}
                pour un echange direction.
              </li>
            </ul>
          </article>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          Source redactionnelle :{" "}
          <span className="font-mono text-slate-600">
            docs/portal-pilot-gtm-messaging.md
          </span>
          . Conforme a la garde produit : pas d&apos;auth, pas de promesse de
          fonctionnalites portail non validees.
        </p>
      </section>

      <section
        id="faq"
        className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10"
      >
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-6 space-y-4">
          <details className="rounded-xl border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">
              A quel age le kit est-il adapte ?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              A partir du primaire avec encadrement, et ideal pour
              college/periscolaire.
            </p>
          </details>
          <details className="rounded-xl border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">
              Faut-il des competences techniques ?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Non, les guides sont concus pour des ateliers debutants
              accompagnes.
            </p>
          </details>
          <details className="rounded-xl border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">
              Peut-on commander pour plusieurs ecoles ?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Oui, un format groupement/collectivite est prevu avec devis dedie.
            </p>
          </details>
          <details className="rounded-xl border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">
              Les donnees personnelles (RGPD) sont-elles traitees sur ce site ?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Les formulaires de contact ne servent qu&apos;a la relation
              commerciale et projet. Tout futur pilote portail fera l&apos;objet
              d&apos;informations contractuelles et de confidentialite avant
              inscription — a valider avec la direction et le DPO de la
              collectivite si besoin.
            </p>
          </details>
          <details className="rounded-xl border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">
              Ou sont hebergees les donnees si un portail voit le jour ?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Les choix d&apos;hebergement et de sous-traitants seront precises
              dans la documentation juridique du pilote, pas sur cette landing.
              Les equipes peuvent demander une fiche technique en amont via le
              formulaire de contact.
            </p>
          </details>
          <details className="rounded-xl border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">
              Quelle est la source de verite entre PDF et futur portail ?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Aujourd&apos;hui, les PDF et kits restent la reference
              operationnelle. Un portail pilote, s&apos;il existe, viendra en
              complement pour certains partenaires ; toute divergence sera
              tranchee et communiquee par le board avant generalisation.
            </p>
          </details>
          <details className="rounded-xl border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">
              Les eleves ou familles auront-ils un compte ?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Le dispositif en classe repose sur le kit et le guide. Aucun
              compte eleve ou famille n&apos;est requis pour l&apos;offre
              actuelle. Un eventuel pilote B2G cible les equipes et la
              direction, pas un acces grand public aux mineurs.
            </p>
          </details>
          <details className="rounded-xl border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold">
              Quand le portail sera-t-il disponible ?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Aucune date ni engagement de fonctionnalites n&apos;est affiche
              ici. Les partenaires interesses peuvent signaler leur interet par
              contact : le board valide le perimetre et le calendrier avant
              toute annonce publique.
            </p>
          </details>
        </div>
      </section>

      <section
        id="contact"
        className="mt-10 rounded-3xl bg-slate-900 p-8 text-white shadow-sm md:p-10"
      >
        <h2 className="text-3xl font-bold">Contact et precommande</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Laissez votre email pour etre informe du lancement et recevoir les
          informations de precommande.
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
    </main>
  );
}
