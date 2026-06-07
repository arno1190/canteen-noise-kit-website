import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>Canteen Noise Kit — Le Feu Tricolore Sonore</p>
        <p>
          <Link
            href="/mentions-legales/"
            className="underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
          >
            Mentions légales
          </Link>
          {" — "}
          <Link
            href="/politique-de-confidentialite/"
            className="underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
          >
            Politique de confidentialité
          </Link>
        </p>
      </div>
    </footer>
  );
}
