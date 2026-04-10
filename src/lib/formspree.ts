/** Build-time public URL for Formspree (or compatible) endpoints. */
export function getOrderFormAction(): string {
  return (
    process.env.NEXT_PUBLIC_FORMSPREE_ORDER_URL ??
    "https://formspree.io/f/your-order-form-id"
  );
}

export function getNewsletterFormAction(): string {
  return (
    process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_URL ??
    process.env.NEXT_PUBLIC_FORMSPREE_ORDER_URL ??
    "https://formspree.io/f/your-form-id"
  );
}
