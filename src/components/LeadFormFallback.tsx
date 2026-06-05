import { FORM_COPY_FR } from "@/lib/form-copy-fr";

type Props = {
  contactEmail: string | null;
  className?: string;
};

export function LeadFormFallback({ contactEmail, className }: Props) {
  return (
    <div
      className={
        className ??
        "mt-6 rounded-xl border border-slate-600 bg-slate-800/60 p-5 text-slate-200"
      }
      role="status"
      aria-live="polite"
    >
      <p className="text-sm leading-relaxed">
        {FORM_COPY_FR.leadFormUnavailable.body}
      </p>
      {contactEmail ? (
        <div className="mt-4 flex flex-col gap-2">
          <p className="font-mono text-sm text-white" translate="no">
            {contactEmail}
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex w-fit rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white underline-offset-2 transition hover:bg-emerald-500 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            {FORM_COPY_FR.leadFormUnavailable.emailCtaPrefix} {contactEmail}
          </a>
        </div>
      ) : (
        <p className="mt-3 text-sm text-slate-400">
          {FORM_COPY_FR.leadFormUnavailable.noEmailHint}
        </p>
      )}
    </div>
  );
}
