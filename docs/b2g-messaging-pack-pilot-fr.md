# Pack messagerie B2G — pilote Cantine Zen (FR)

Références : [CAN-27](/CAN/issues/CAN-27) (pilote AAP co-éducation), [CAN-58](/CAN/issues/CAN-58) (porte sur le portail école — ne pas promettre de fonctionnalités non approuvées), [CAN-67](/CAN/issues/CAN-67) (livrable outbound), alignement URL [CAN-69](/CAN/issues/CAN-69).

---

## 1. Contexte

Objectif : permettre au board d’enchaîner **3 relances courtes** vers mairie / direction et **un post LinkedIn** sans repasse marketing, avec un **lien public unique** et des claims prudents.

---

## 2. Garde-fous claims (CAN-58)

- Ne pas annoncer de **portail connecté** livré, de calendrier de mise en production du portail, ni de fonctionnalités soumises au board.
- Présenter toute évolution « portail / démat » comme **piste optionnelle, sur invitation**, distincte des **kits / PDFs** disponibles aujourd’hui.
- Éviter les promesses chiffrées sur le **niveau sonore (dB)** ou l’impact mesuré tant que le protocole / résultats ne sont pas validés côté produit.

---

## 3. URL canonique (production) vs prévisualisation

| Usage | URL |
|--------|-----|
| **CTA e-mails, LinkedIn, signatures** | **https://canteen-noise-kit-website.vercel.app/** |
| Ancienne prévisualisation statique (GitHub Pages, phase revue CAN-63) | https://arno1190.github.io/paperclip-can63-onboarding-kit/ — **ne pas utiliser** dans les envois board / stakeholders sauf consigne explicite (staging uniquement). |

Toujours utiliser la **prod Vercel** pour tout matériel sortant (e-mails, posts, PDFs vivants).

---

## 4. Ligne type « lien public » (à coller)

> Plus d’informations sur le dispositif et les offres : **https://canteen-noise-kit-website.vercel.app/**

---

## 5. Hygiène CTA & lien public

- Un seul **lien principal** par message : la prod ci-dessus.
- Éviter de mélanger Pages et Vercel dans un même paragraphe (risque de confusion collectivités).
- Formulaire / e-mail de contact : reprendre **exactement** ce qui figure sur la landing (à valider juridique / CTO si placeholder).

---

## 6. Séquence 3 e-mails (mairie / direction)

**Touch 1 — prise de contact (J0)**  
*Objet A :* Cantine scolaire : un dispositif visuel pour aider les élèves à réguler le bruit  
*Objet B :* Projet co-éducation — kit pédagogique « feu tricolore sonore » (pilote limité)

Madame, Monsieur,

Je me permets de vous écrire car nous portons un **projet de kit pédagogique** (électronique + ateliers) pour aider les équipes à **travailler le niveau sonore en cantine** avec les élèves, de façon **ludique et collective**.

Le projet s’inscrit dans une démarche **co-éducation** et nous ouvrons un **pilote limité** sur le territoire. Nous restons volontairement **très factuels** : pas de déploiement imposif, l’objectif est d’**échanger** avec les équipes intéressées.

**Pour en savoir plus :** https://canteen-noise-kit-website.vercel.app/

Bien cordialement,  
[Prénom Nom — fonction]

---

**Touch 2 — transparence / FabLab & territoire (J+5 à J+7)**  
*Objet :* Suite — angle FabLab / médiation scientifique sur le pilote cantine

Madame, Monsieur,

Petit complément à mon message précédent : le dispositif peut aussi être porté avec des **partenaires type FabLab / médiation scientifique**, ce qui facilite l’**appropriation** par les élèves sans alourdir les équipes.

Nous restons sur une logique **pilote** et **pédagogique** — pas de promesse de plateforme en ligne à ce stade.

**Page publique (offres, contexte) :** https://canteen-noise-kit-website.vercel.app/

Au besoin, je vous propose un **créneau de 15 minutes** pour cadrer vos questions.

Bien cordialement,  
[Prénom Nom]

---

**Touch 3 — fermeture polie (J+12 à J+14)**  
*Objet :* Dernière relance — pilote cantine / kit pédagogique

Madame, Monsieur,

Je clôture ce fil : si ce n’est **pas prioritaire** pour votre collectivité ou votre établissement **pour l’instant**, aucun souci — je reste disponible si le sujet refait surface (rentrée, projet pédagogique, partenariat FabLab).

**Lien unique :** https://canteen-noise-kit-website.vercel.app/

Merci pour votre lecture.

Bien cordialement,  
[Prénom Nom]

---

## 7. Post LinkedIn (FR) — texte brut

Le **bruit en cantine**, ce n’est pas seulement du « silence imposé » : c’est une **compétence collective** — écouter, se repérer, ajuster son niveau sonore.

On expérimente un **kit pédagogique** (électronique + ateliers) qui donne un **repère visuel** type feu tricolore, pour que les élèves **co-régulent** l’ambiance avec leurs enseignants.

Le projet est porté dans une logique **co-éducation** et **FabLab / médiation** sur le territoire — **sans promesse de portail** : aujourd’hui, l’essentiel est surtout **pédagogique et terrain**.

→ Détails & pilote : https://canteen-noise-kit-website.vercel.app/

#Éducation #Collectivités #FabLab #CantineScolaire #STEM *(à ajuster selon votre style éditorial)*

---

*Dernière mise à jour URL (CAN-69) : prod Vercel ci-dessus ; Pages GitHub = staging historique CAN-63.*
