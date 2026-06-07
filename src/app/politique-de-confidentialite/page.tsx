import Link from "next/link";

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <p className="text-sm text-slate-600">
          <Link
            href="/"
            className="font-medium text-emerald-700 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
          >
            ← Retour à l’accueil
          </Link>
        </p>
        <h1 className="mt-6 text-3xl font-bold tracking-tight">
          Politique de confidentialité
        </h1>
        <p className="mt-4 text-slate-700">
          Cette page décrit comment sont traitées les données collectées via le
          site (formulaire d’intérêt, analytics). Complétez avec votre base
          légale, la durée de conservation, les destinataires, les droits RGPD
          (accès, rectification, effacement, portabilité, opposition) et le
          contact DPO ou référent si applicable.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-700">
          <li>Finalités du traitement (précommande, prospection B2B)</li>
          <li>
            Catégories de données (courriel, éventuellement établissement)
          </li>
          <li>
            Sous-traitants (hébergeur, outil de formulaire, mesure d’audience)
          </li>
          <li>
            Cookies et traceurs — lien vers gestion du consentement si besoin
          </li>
        </ul>
      </main>
    </div>
  );
}
