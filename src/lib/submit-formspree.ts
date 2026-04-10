export type FormspreeSubmitFailureKind = "network" | "validation" | "generic";

export type FormspreeSubmitResult =
  | { ok: true }
  | { ok: false; kind: FormspreeSubmitFailureKind };

/** Formspree AJAX: same endpoint as HTML form, with Accept: application/json. */
export async function submitFormspree(
  actionUrl: string,
  formData: FormData,
): Promise<FormspreeSubmitResult> {
  try {
    const res = await fetch(actionUrl, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      return { ok: true };
    }
    if (res.status === 422) {
      return { ok: false, kind: "validation" };
    }
    return { ok: false, kind: "generic" };
  } catch {
    return { ok: false, kind: "network" };
  }
}
