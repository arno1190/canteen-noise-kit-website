"use client";

import { type FormEvent, useRef, useState } from "react";
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
  "rounded-full border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

export function NewsletterForm({ action, formClassName }: Props) {
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
        form.querySelector<HTMLElement>('input[name="email"]')?.focus(),
      );
    } else {
      queueMicrotask(() => errorRef.current?.focus());
    }
  }

  if (phase === "success") {
    return (
      <div
        className="mt-6"
        role="region"
        aria-labelledby="newsletter-success-title"
      >
        <h3
          id="newsletter-success-title"
          ref={successHeadingRef}
          tabIndex={-1}
          className="text-xl font-semibold text-white outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          {FORM_COPY_FR.successTitle}
        </h3>
        <p
          id="newsletter-success-status"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="mt-2 text-slate-300"
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

  const emailDescribedBy =
    [
      inlineErrors.email ? "newsletter-inline-email" : null,
      serverError?.kind === "validation" ? "newsletter-server-error" : null,
    ]
      .filter(Boolean)
      .join(" ") || undefined;

  const emailInvalid =
    !!inlineErrors.email || serverError?.kind === "validation";

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
          id="newsletter-server-error"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          tabIndex={-1}
          className="mb-3 w-full rounded-lg bg-red-950/90 px-4 py-3 text-sm text-red-100 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          {serverError.message}
        </div>
      ) : null}
      <div className="flex w-full min-w-0 flex-col gap-1 sm:flex-1">
        <input
          className={`w-full ${inputFocusRing}`}
          type="email"
          name="email"
          required
          placeholder="votre@email.fr"
          disabled={submitting}
          aria-invalid={emailInvalid || undefined}
          aria-describedby={emailDescribedBy}
          onBlur={(ev) => {
            const el = ev.currentTarget;
            if (!el.validity.valid) {
              setInlineErrors((p) => ({
                ...p,
                email: inlineValidationMessage(el),
              }));
            } else {
              clearFieldError("email");
            }
          }}
          onChange={(ev) => {
            const el = ev.currentTarget;
            if (el.validity.valid) clearFieldError("email");
            if (serverError) setServerError(null);
          }}
        />
        {inlineErrors.email ? (
          <p id="newsletter-inline-email" className="text-sm text-red-300">
            {inlineErrors.email}
          </p>
        ) : null}
      </div>
      <button
        className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white outline-none transition hover:bg-emerald-600 disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
      >
        {submitting ? "Envoi…" : "Je suis interesse"}
      </button>
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-label={FORM_COPY_FR.honeypotAriaLabel}
      />
    </form>
  );
}
