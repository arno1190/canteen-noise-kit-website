/**
 * FR microcopy for Formspree-backed forms — sourced from CAN-81 (CMO).
 * Board may adjust the response-time policy; see success body below.
 */
export const FORM_COPY_FR = {
  successTitle: "Message envoyé",
  successBody: {
    beforePolicy:
      "Merci ! Votre message a bien été envoyé. Nous revenons vers vous sous ",
    policy: "2 à 3 jours ouvrés",
    afterPolicy: ".",
  },
  errors: {
    network:
      "Impossible d'envoyer le message pour le moment. Vérifiez votre connexion et réessayez.",
    validation:
      "Merci de vérifier les champs surlignés et de corriger les informations indiquées.",
    generic:
      "Une erreur s'est produite. Réessayez dans quelques instants ou contactez-nous par e-mail.",
    honeypot: "Envoi refusé : ce formulaire est réservé aux humains.",
  },
  honeypotAriaLabel: "Ne pas remplir ce champ (réservé aux robots).",
  sendAnother: "Nouveau message",
  /** Inline / blur validation (CAN-82 — text, not color-only). */
  inline: {
    required: "Ce champ est obligatoire.",
    emailInvalid: "Adresse e-mail invalide.",
    quantityInvalid: "Indiquez une quantité d'au moins 1.",
    selectRequired: "Choisissez une offre.",
  },
  /** Shown when Formspree env is not configured (no placeholder URLs in HTML). */
  leadFormUnavailable: {
    body: "Le formulaire en ligne n'est pas encore actif depuis cette page. Vous pouvez nous écrire directement par e-mail.",
    emailCtaPrefix: "Écrire à",
    noEmailHint:
      "Réessayez plus tard ou passez par votre interlocuteur habituel chez Canteen Noise Kit.",
  },
} as const;
