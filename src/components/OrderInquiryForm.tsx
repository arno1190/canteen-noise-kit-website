"use client";

import { type FocusEvent, type FormEvent, useRef, useState } from "react";
import {
  collectInvalidFieldMessages,
  focusFirstInvalidField,
  inlineValidationMessage,
} from "@/lib/form-a11y";
import { FORM_COPY_FR } from "@/lib/form-copy-fr";
import {
  submitFormspree,
  type FormspreeSubmitFailureKind,
} from "@/lib/submit-formspree";

type Props = {
  action: string;
  formClassName: string;
};

type ServerErrorState = {
  message: string;
  kind: FormspreeSubmitFailureKind | "honeypot";
};

const inputFocusRing =
  "rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

export function OrderInquiryForm({ action, formClassName }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"form" | "success">("form");
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<ServerErrorState | null>(null);
  const [inlineErrors, setInlineErrors] = useState<Record<string, string>>({});

  function clearFieldError(name: string) {
    setInlineErrors((prev) => {
      if (!(name in prev)) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  function fieldDescribedBy(name: string): string | undefined {
    const parts = [
      inlineErrors[name] ? `order-inline-${name}` : null,
      serverError?.kind === "validation" ? "order-server-error" : null,
    ].filter(Boolean) as string[];
    return parts.length ? parts.join(" ") : undefined;
  }

  function fieldInvalid(name: string): boolean | undefined {
    const inv = !!inlineErrors[name] || serverError?.kind === "validation";
    return inv || undefined;
  }

  function attachBlur(name: string) {
    return {
      onBlur: (ev: FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        const el = ev.currentTarget;
        if (!el.validity.valid) {
          setInlineErrors((p) => ({
            ...p,
            [name]: inlineValidationMessage(el),
          }));
        } else {
          clearFieldError(name);
        }
      },
      onChange: () => {
        clearFieldError(name);
        if (serverError) setServerError(null);
      },
    };
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setServerError(null);

    if (!form.reportValidity()) {
      setInlineErrors(collectInvalidFieldMessages(form));
      queueMicrotask(() => focusFirstInvalidField(form));
      return;
    }

    const fd = new FormData(form);
    if (String(fd.get("_gotcha") ?? "").trim() !== "") {
      setServerError({
        message: FORM_COPY_FR.errors.honeypot,
        kind: "honeypot",
      });
      queueMicrotask(() => errorRef.current?.focus());
      return;
    }

    setInlineErrors({});
    setSubmitting(true);
    const result = await submitFormspree(action, fd);
    setSubmitting(false);

    if (result.ok) {
      form.reset();
      setPhase("success");
      queueMicrotask(() => successHeadingRef.current?.focus());
      return;
    }

    const message =
      result.kind === "network"
        ? FORM_COPY_FR.errors.network
        : result.kind === "validation"
          ? FORM_COPY_FR.errors.validation
          : FORM_COPY_FR.errors.generic;

    setServerError({ message, kind: result.kind });

    if (result.kind === "validation") {
      queueMicrotask(() =>
        form.querySelector<HTMLElement>('input[name="name"]')?.focus(),
      );
    } else {
      queueMicrotask(() => errorRef.current?.focus());
    }
  }

  if (phase === "success") {
    return (
      <div className="mt-8" role="region" aria-labelledby="order-success-title">
        <h3
          id="order-success-title"
          ref={successHeadingRef}
          tabIndex={-1}
          className="text-2xl font-bold text-white outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          {FORM_COPY_FR.successTitle}
        </h3>
        <p
          id="order-success-status"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="mt-3 text-slate-300"
        >
          {FORM_COPY_FR.successBody.beforePolicy}
          <strong>{FORM_COPY_FR.successBody.policy}</strong>
          {FORM_COPY_FR.successBody.afterPolicy}
        </p>
        <button
          type="button"
          className="mt-4 rounded-full border border-slate-500 px-5 py-2 text-sm font-medium text-white outline-none transition hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          onClick={() => {
            setPhase("form");
            setServerError(null);
            setInlineErrors({});
          }}
        >
          {FORM_COPY_FR.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className={formClassName}
      onSubmit={onSubmit}
      aria-busy={submitting}
    >
      {serverError ? (
        <div
          ref={errorRef}
          id="order-server-error"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          tabIndex={-1}
          className="rounded-lg bg-red-950/90 px-4 py-3 text-sm text-red-100 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          {serverError.message}
        </div>
      ) : null}
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-slate-200">Nom complet</span>
        <input
          name="name"
          required
          autoComplete="name"
          disabled={submitting}
          className={inputFocusRing}
          placeholder="Jean Dupont"
          aria-invalid={fieldInvalid("name")}
          aria-describedby={fieldDescribedBy("name")}
          {...attachBlur("name")}
        />
        {inlineErrors.name ? (
          <span id="order-inline-name" className="text-xs text-red-300">
            {inlineErrors.name}
          </span>
        ) : null}
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-slate-200">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={submitting}
          className={inputFocusRing}
          placeholder="contact@ecole.fr"
          aria-invalid={fieldInvalid("email")}
          aria-describedby={fieldDescribedBy("email")}
          {...attachBlur("email")}
        />
        {inlineErrors.email ? (
          <span id="order-inline-email" className="text-xs text-red-300">
            {inlineErrors.email}
          </span>
        ) : null}
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-slate-200">
          Organisation (ecole, mairie, association…)
        </span>
        <input
          name="organization"
          required
          disabled={submitting}
          className={inputFocusRing}
          placeholder="College Les Tilleuls"
          aria-invalid={fieldInvalid("organization")}
          aria-describedby={fieldDescribedBy("organization")}
          {...attachBlur("organization")}
        />
        {inlineErrors.organization ? (
          <span id="order-inline-organization" className="text-xs text-red-300">
            {inlineErrors.organization}
          </span>
        ) : null}
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-slate-200">Offre souhaitee</span>
        <select
          name="tier"
          required
          disabled={submitting}
          className={inputFocusRing}
          defaultValue=""
          aria-invalid={fieldInvalid("tier")}
          aria-describedby={fieldDescribedBy("tier")}
          {...attachBlur("tier")}
        >
          <option value="" disabled>
            Choisir une offre
          </option>
          <option value="guide_numerique">Guide numerique (~29 EUR)</option>
          <option value="kit_complet">Kit complet (~79 EUR)</option>
          <option value="kit_premium">
            Kit premium pre-assemble (~149 EUR)
          </option>
          <option value="plusieurs">
            Plusieurs offres / ne sais pas encore
          </option>
        </select>
        {inlineErrors.tier ? (
          <span id="order-inline-tier" className="text-xs text-red-300">
            {inlineErrors.tier}
          </span>
        ) : null}
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
          disabled={submitting}
          className={inputFocusRing}
          placeholder="10"
          aria-invalid={fieldInvalid("quantity")}
          aria-describedby={fieldDescribedBy("quantity")}
          {...attachBlur("quantity")}
        />
        {inlineErrors.quantity ? (
          <span id="order-inline-quantity" className="text-xs text-red-300">
            {inlineErrors.quantity}
          </span>
        ) : null}
      </label>
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-label={FORM_COPY_FR.honeypotAriaLabel}
      />
      <button
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        className="mt-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white outline-none transition hover:bg-emerald-600 disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      >
        {submitting ? "Envoi…" : "Envoyer la demande"}
      </button>
    </form>
  );
}
