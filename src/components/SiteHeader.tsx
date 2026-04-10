import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 md:px-8">
        <Link
          href="/"
          className="font-semibold text-slate-900 transition hover:text-emerald-700"
        >
          Canteen Noise Kit
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
          <Link href="/" className="transition hover:text-emerald-700">
            Accueil
          </Link>
          <Link href="/tarifs" className="transition hover:text-emerald-700">
            Tarifs &amp; commande
          </Link>
          <Link
            href="/#portail-pilote"
            className="transition hover:text-emerald-700"
          >
            Pilote portail
          </Link>
          <Link href="/#contact" className="transition hover:text-emerald-700">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
