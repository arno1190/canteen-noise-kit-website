/**
 * Build-time public URLs for Formspree (or compatible) endpoints.
 * Returns null when env vars are missing or still contain demo placeholders —
 * pages must render a neutral fallback instead of embedding fake `action` URLs.
 */

function stripEnv(raw: string | undefined): string {
  return (raw ?? "").trim().replace(/^['"]|['"]$/g, "");
}

/** True when URL looks like a real Formspree `/f/{id}` endpoint (not template IDs). */
export function isLiveFormspreeUrl(url: string | undefined): boolean {
  const u = stripEnv(url);
  if (!u) return false;
  if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9_-]+$/.test(u)) {
    return false;
  }
  const id = u.split("/f/")[1] ?? "";
  const lower = id.toLowerCase();
  if (lower.includes("your-")) return false;
  if (lower.includes("xxxx") || lower.includes("yyyy")) return false;
  if (lower.includes("placeholder")) return false;
  if (id.length < 6) return false;
  return true;
}

export function getOrderFormAction(): string | null {
  const u = stripEnv(process.env.NEXT_PUBLIC_FORMSPREE_ORDER_URL);
  return isLiveFormspreeUrl(u) ? u : null;
}

export function getNewsletterFormAction(): string | null {
  const primary = stripEnv(process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_URL);
  const order = stripEnv(process.env.NEXT_PUBLIC_FORMSPREE_ORDER_URL);
  const chosen = primary || order;
  return isLiveFormspreeUrl(chosen) ? chosen : null;
}
