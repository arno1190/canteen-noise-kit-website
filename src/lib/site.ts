/** Public site origin (no trailing slash). Set in Vercel: NEXT_PUBLIC_SITE_URL */
export const SITE_ORIGIN = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://canteen-noise-kit-website.vercel.app"
).replace(/\/+$/, "");

/** Canonical homepage URL including trailing slash (matches `trailingSlash: true`). */
export const canonicalSiteUrl = `${SITE_ORIGIN}/`;
