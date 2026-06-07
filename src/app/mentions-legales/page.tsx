import Link from "next/link";

export default function MentionsLegalesPage() {
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
          Mentions légales
        </h1>
        <p className="mt-4 text-slate-700">
          Page statutaire minimale : complétez avec l’éditeur, l’hébergeur, le
          directeur de publication et les coordonnées de contact conformément à
          vos obligations (France / UE).
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-700">
          <li>Raison sociale et forme juridique</li>
          <li>Siège social et contact</li>
          <li>Numéro SIREN / TVA intracommunautaire si applicable</li>
          <li>Hébergeur du site (ex. Vercel Inc.)</li>
        </ul>
      </main>
    </div>
  );
}
