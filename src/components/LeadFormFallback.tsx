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
    >
      <p className="text-sm leading-relaxed">
        {FORM_COPY_FR.leadFormUnavailable.body}
      </p>
      {contactEmail ? (
        <a
          href={`mailto:${contactEmail}`}
          className="mt-3 inline-flex font-semibold text-emerald-300 underline underline-offset-2 hover:text-emerald-200"
        >
          {FORM_COPY_FR.leadFormUnavailable.emailCtaPrefix} {contactEmail}
        </a>
      ) : (
        <p className="mt-3 text-sm text-slate-400">
          {FORM_COPY_FR.leadFormUnavailable.noEmailHint}
        </p>
      )}
    </div>
  );
}
