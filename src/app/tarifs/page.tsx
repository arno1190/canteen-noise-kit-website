import type { Metadata } from "next";
import { getOrderFormAction } from "@/lib/formspree";

export const metadata: Metadata = {
  title: "Tarifs et commande | Canteen Noise Kit",
  description:
    "Offres Guide numerique, Kit complet et Kit premium. Demande de devis ou precommande pour les ecoles et collectivites.",
};

const tiers = [
  {
    id: "guide",
    name: "Guide numerique",
    price: "29",
    blurb:
      "Demarrer avec le contenu pedagogique et le firmware, zero logistique materiel.",
    highlight: false,
  },
  {
    id: "complet",
    name: "Kit complet",
    price: "79",
    blurb:
      "Tout pour monter le feu tricolore sonore en atelier avec les eleves.",
    highlight: true,
  },
  {
    id: "premium",
    name: "Kit premium pre-assemble",
    price: "149",
    blurb:
      "Installation rapide, ideal pour un premier deploiement ou un pilote.",
    highlight: false,
  },
] as const;

const comparisonRows: {
  label: string;
  guide: string;
  complet: string;
  premium: string;
}[] = [
  {
    label: "Guide PDF pas a pas",
    guide: "Oui",
    complet: "Oui",
    premium: "Oui",
  },
  {
    label: "Firmware telechargeable",
    guide: "Oui",
    complet: "Oui",
    premium: "Oui",
  },
  {
    label: "Acces communaute & mises a jour",
    guide: "Oui",
    complet: "Oui",
    premium: "Oui",
  },
  {
    label: "Composants electroniques (ESP32, micro, LED…)",
    guide: "—",
    complet: "Oui",
    premium: "Oui",
  },
  {
    label: "Guide imprime & stickers",
    guide: "—",
    complet: "Oui",
    premium: "Oui",
  },
  {
    label: "Kit pre-assemble et teste",
    guide: "—",
    complet: "—",
    premium: "Oui",
  },
  {
    label: "Supports atelier & videos",
    guide: "—",
    complet: "Option",
    premium: "Oui",
  },
  {
    label: "Accompagnement dedie (1h)",
    guide: "—",
    complet: "—",
    premium: "Oui",
  },
];

export default function TarifsPage() {
  const formAction = getOrderFormAction();

  return (
    <div className="bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
            Tarifs transparents
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Choisissez l&apos;offre adaptee a votre ecole ou votre collectivite
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700">
            Pas de paiement en ligne pour cette version : envoyez une demande,
            nous recontactons pour confirmer la commande et la facturation.
          </p>
        </section>

        <section
          aria-labelledby="offres"
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          <h2 id="offres" className="sr-only">
            Nos trois offres
          </h2>
          {tiers.map((t) => (
            <article
              key={t.id}
              className={
                t.highlight
                  ? "flex flex-col rounded-3xl border-2 border-amber-300 bg-amber-50 p-8 shadow-sm"
                  : "flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              }
            >
              {t.highlight ? (
                <p className="text-sm font-semibold text-amber-800">
                  Le plus choisi
                </p>
              ) : null}
              <h3 className="mt-1 text-xl font-bold">{t.name}</h3>
              <p className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-bold">{t.price} EUR</span>
                <span className="text-sm text-slate-500">TTC indicatif</span>
              </p>
              <p className="mt-4 flex-1 text-sm text-slate-700">{t.blurb}</p>
              <a
                href="#commander"
                className="mt-6 inline-flex justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Demander un devis
              </a>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-3xl bg-white p-6 shadow-sm md:p-10">
          <h2 className="text-2xl font-bold md:text-3xl">
            Comparer les offres
          </h2>
          <p className="mt-2 text-slate-600">
            Vue synthetique des contenus inclus. Les details peuvent evoluer
            selon votre cahier des charges.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 font-semibold text-slate-900">
                    Fonctionnalite
                  </th>
                  <th className="p-4 font-semibold text-slate-900">
                    Guide numerique
                  </th>
                  <th className="p-4 font-semibold text-slate-900">
                    Kit complet
                  </th>
                  <th className="p-4 font-semibold text-slate-900">
                    Kit premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="p-4 text-slate-800">{row.label}</td>
                    <td className="p-4 text-slate-600">{row.guide}</td>
                    <td className="p-4 text-slate-600">{row.complet}</td>
                    <td className="p-4 text-slate-600">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          id="commander"
          className="mt-12 scroll-mt-24 rounded-3xl bg-slate-900 p-8 text-white shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold">Commande ou precommande</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Indiquez votre structure et le volume souhaite. Nous vous repondons
            sous quelques jours ouvrables.
          </p>
          <form
            action={formAction}
            method="POST"
            className="mt-8 grid max-w-xl gap-4"
          >
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-200">Nom complet</span>
              <input
                name="name"
                required
                autoComplete="name"
                className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500"
                placeholder="Jean Dupont"
              />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-200">Email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500"
                placeholder="contact@ecole.fr"
              />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-200">
                Organisation (ecole, mairie, association…)
              </span>
              <input
                name="organization"
                required
                className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500"
                placeholder="College Les Tilleuls"
              />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-200">
                Offre souhaitee
              </span>
              <select
                name="tier"
                required
                className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white"
                defaultValue=""
              >
                <option value="" disabled>
                  Choisir une offre
                </option>
                <option value="guide_numerique">
                  Guide numerique (~29 EUR)
                </option>
                <option value="kit_complet">Kit complet (~79 EUR)</option>
                <option value="kit_premium">
                  Kit premium pre-assemble (~149 EUR)
                </option>
                <option value="plusieurs">
                  Plusieurs offres / ne sais pas encore
                </option>
              </select>
            </label>
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-200">
                Quantite estimee (kits ou licences)
              </span>
              <input
                name="quantity"
                type="number"
                min={1}
                required
                className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500"
                placeholder="10"
              />
            </label>
            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            <button
              type="submit"
              className="mt-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
            >
              Envoyer la demande
            </button>
          </form>
          <p className="mt-4 text-xs text-slate-400">
            Configurez{" "}
            <code className="rounded bg-slate-800 px-1">
              NEXT_PUBLIC_FORMSPREE_ORDER_URL
            </code>{" "}
            sur Vercel avec l&apos;URL de votre formulaire Formspree.
          </p>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold">Questions frequentes (tarifs)</h2>
          <div className="mt-6 space-y-4">
            <details className="rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                Les prix sont-ils definitifs ?
              </summary>
              <p className="mt-2 text-sm text-slate-700">
                Les montants indiques sont des repères TTC pour une commande
                standard. Les collectivites et achats groupés peuvent faire
                l&apos;objet d&apos;un devis personnalise.
              </p>
            </details>
            <details className="rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                Quand paie-t-on ?
              </summary>
              <p className="mt-2 text-sm text-slate-700">
                Pas de carte bancaire sur ce site : nous validons votre besoin
                par email puis nous envoyons un devis ou un bon de commande
                selon votre statut (particulier, association, secteur public).
              </p>
            </details>
            <details className="rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                Peut-on melanger les offres (ex. 5 kits + 20 guides) ?
              </summary>
              <p className="mt-2 text-sm text-slate-700">
                Oui, décrivez-le dans le champ quantité ou en précisant dans un
                message après notre premier contact — nous consolidons une seule
                proposition.
              </p>
            </details>
            <details className="rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                Delai de livraison ?
              </summary>
              <p className="mt-2 text-sm text-slate-700">
                Le guide numerique est delivré par email sous 48h apres
                validation. Les kits dependant des stocks et de la saison
                scolaire : nous indiquons un créneau dans notre reponse.
              </p>
            </details>
          </div>
        </section>
      </main>
    </div>
  );
}
