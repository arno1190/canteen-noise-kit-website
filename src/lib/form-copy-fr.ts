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
    body: "Le formulaire intégré à cette page n’est pas encore activé. Utilisez le lien ci-dessous pour ouvrir votre messagerie.",
    emailCtaPrefix: "Écrire à",
    noEmailHint:
      "Les coordonnées e-mail publiques sont en cours de configuration sur l’hébergement. Revenez bientôt ou passez par votre interlocuteur habituel chez Canteen Noise Kit.",
    /** Section leads when the live form is off — avoids promising a capture UI (UX CAN-84). */
    homeIntroWithEmail:
      "Pour être informé du lancement et des précommandes, envoyez-nous un e-mail à l’adresse ci-dessous. Un formulaire sur cette page sera ajouté une fois la configuration finalisée.",
    homeIntroNoEmail:
      "Pour être informé du lancement et des précommandes, un formulaire sera bientôt disponible ici. Les canaux de contact publics sont en cours de configuration.",
    tarifsIntroWithEmail:
      "Pour une commande ou un devis, écrivez-nous (structure, volume souhaité) à l’adresse ci-dessous. Nous répondons sous quelques jours ouvrables.",
    tarifsIntroNoEmail:
      "Pour une commande ou un devis, un formulaire sera bientôt disponible sur cette page. Les coordonnées publiques sont en cours de configuration.",
  },
  /**
   * FAQ — wording stays true when Formspree is off and/or only mailto is shown (UX CAN-84).
   */
  faq: {
    rgpdContact:
      "La section Contact en bas de page sert uniquement à la relation commerciale et projet — via formulaire web lorsqu’il est actif, ou via le lien e-mail affiché lorsqu’il est publié. Tout futur pilote portail fera l’objet d’informations contractuelles et de confidentialité avant inscription — à valider avec la direction et le DPO de la collectivité si besoin.",
    hostingFicheTech:
      "Les choix d’hébergement et de sous-traitants seront précisés dans la documentation juridique du pilote, pas sur cette landing. Les équipes peuvent demander une fiche technique en amont via la section Contact (bas de page), une fois le canal public configuré, ou via votre interlocuteur habituel.",
  },
} as const;
