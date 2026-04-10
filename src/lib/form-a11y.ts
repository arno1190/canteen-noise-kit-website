import { FORM_COPY_FR } from "@/lib/form-copy-fr";

export function focusFirstInvalidField(form: HTMLFormElement): void {
  const nodes = form.querySelectorAll<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >("input, select, textarea");
  for (const el of nodes) {
    if (el.type === "hidden" || el.name === "_gotcha") continue;
    if (!el.willValidate) continue;
    if (!el.validity.valid) {
      el.focus();
      return;
    }
  }
}

export function collectInvalidFieldMessages(
  form: HTMLFormElement,
): Record<string, string> {
  const out: Record<string, string> = {};
  const nodes = form.querySelectorAll<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >("input, select, textarea");
  for (const el of nodes) {
    if (el.type === "hidden" || el.name === "_gotcha") continue;
    if (!el.willValidate) continue;
    if (!el.validity.valid) {
      out[el.name] = inlineValidationMessage(el);
    }
  }
  return out;
}

export function inlineValidationMessage(
  el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
): string {
  const v = el.validity;
  if (v.valueMissing) {
    if (el instanceof HTMLSelectElement) {
      return FORM_COPY_FR.inline.selectRequired;
    }
    return FORM_COPY_FR.inline.required;
  }
  if (
    el instanceof HTMLInputElement &&
    el.type === "email" &&
    (v.typeMismatch || v.patternMismatch)
  ) {
    return FORM_COPY_FR.inline.emailInvalid;
  }
  if (el instanceof HTMLInputElement && el.type === "number") {
    if (v.badInput || v.rangeUnderflow || v.stepMismatch) {
      return FORM_COPY_FR.inline.quantityInvalid;
    }
  }
  return FORM_COPY_FR.errors.validation;
}
