export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
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
            Canteen Noise Kit aide les ecoles a construire un feu tricolore
            sonore avec ESP32, micro et bande LED. Les enfants montent,
            programment et installent eux-memes la solution.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-full bg-emerald-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-700"
              href="#contact"
            >
              Precommander
            </a>
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
            bande LED. Les eleves apprennent l&apos;electronique, la
            programmation et la sensibilisation a l&apos;environnement sonore en
            co-construisant l&apos;outil de leur ecole.
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
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold">Guide Numerique</h3>
              <p className="mt-1 text-2xl font-bold">15 EUR</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>PDF pas a pas</li>
                <li>Firmware telechargeable</li>
                <li>Acces communaute</li>
              </ul>
            </article>
            <article className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6">
              <h3 className="font-semibold">Kit Complet</h3>
              <p className="mt-1 text-2xl font-bold">39 EUR</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>Composants inclus</li>
                <li>Guide imprime</li>
                <li>Stickers pedagogiques</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold">Experience Premium</h3>
              <p className="mt-1 text-2xl font-bold">79 EUR</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>Kit pre-assemble</li>
                <li>Supports atelier + videos</li>
                <li>1h d&apos;accompagnement</li>
              </ul>
            </article>
          </div>
        </section>

        <section
          id="collectivites"
          className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold">
            Pour les ecoles et collectivites
          </h2>
          <p className="mt-4 text-slate-700">
            Offre B2B/B2G avec tarifs en volume, accompagnement pedagogique et
            alignement avec les programmes scolaires. Compatible avec les
            objectifs PEDT et les projets de sensibilisation au bien-vivre
            ensemble.
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
                Oui, un format groupement/collectivite est prevu avec devis
                dedie.
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
          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            action="https://formspree.io/f/your-form-id"
            method="POST"
          >
            <input
              className="w-full rounded-full border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400"
              type="email"
              name="email"
              required
              placeholder="votre@email.fr"
            />
            <button
              className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
              type="submit"
            >
              Je suis interesse
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-400">
            Remplacez l&apos;URL Formspree avant mise en production.
          </p>
        </section>
      </main>
      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6 text-sm text-slate-600 md:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>Canteen Noise Kit - Le Feu Tricolore Sonore</p>
          <p>Mentions legales - Politique de confidentialite</p>
        </div>
      </footer>
    </div>
  );
}
