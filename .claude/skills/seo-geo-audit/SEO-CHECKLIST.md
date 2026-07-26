# Checklist complète — tous les points qu'un audit SEO concurrentiel doit couvrir

Reconstituée en observant un audit Horusium réel (voir `reference/2026-07-26-drainage-lymphatique-horusium-snapshot.md`).
Pour chaque point : ce qu'il mesure, et comment le reproduire sans outil payant.

## 1. Concurrents SERP (qui rank, à quelle position)

**Mesure** : les ~10 premiers résultats organiques Google pour le mot-clé cible (hors ads/maps/PAA).
**DIY** : `WebSearch("<mot-clé>")`. Les résultats retournés approximent l'ordre du SERP (pas garanti
identique à un vrai SERP Google géolocalisé/personnalisé — c'est une approximation, pas une vérité
absolue). Retenir 5-10 domaines pertinents (écarter annuaires génériques, réseaux sociaux, Wikipédia
si hors-sujet).

## 2. Score global

**Mesure** : composite propriétaire 0-100 vs les concurrents. **DIY** : pas de score unique
reproductible sans la pondération propriétaire d'Horusium — construire à la place une liste de
priorités (technique d'abord, contenu ensuite) à partir des points 3-12 ci-dessous. Ne pas inventer
un faux score chiffré qui donnerait une fausse précision.

## 3. Proximité sémantique / alignement d'intention

**Mesure** : similarité vectorielle entre notre page et chaque concurrent + alignement à l'intention
de recherche. **DIY** : pas d'outil d'embeddings disponible ici → approximation qualitative : lire
(WebFetch) chaque page concurrente, lister les sous-thèmes qu'elle couvre, comparer à la nôtre "à
l'œil" (LLM). Moins précis qu'un score vectoriel, mais souvent plus utile en pratique : on voit
directement QUOI manque, pas juste un pourcentage.

## 4. Sujets manquants (gap de sous-thèmes)

**Mesure** : sous-thèmes couverts par N/7 concurrents mais absents de notre page. **DIY** : sous-
produit du point 3 — en lisant chaque page concurrente, noter les sous-thèmes récurrents absents de
la nôtre, et sur combien de pages chacun apparaît. **Filtrer par la politique de contenu du site
avant d'écrire quoi que ce soit** (voir SKILL.md) — un sujet couvert par 7/7 concurrents n'est pas
forcément un sujet à traiter si ça détourne le positionnement du site.

## 5. Termes à utiliser (écart lexical)

**Mesure** : fréquence de termes/expressions dans le top Google vs notre page (médiane, moyenne,
nous, plage suggérée). **DIY** : `node scripts/term-gap.mjs --ours <url> --competitors <url1,url2,...>`.
⚠️ Approximation brute (comptage de 1-3-grammes, pas de lemmatisation ni de scoring sémantique de
pertinence) — utile pour repérer les termes évidents sous-utilisés, mais **relire chaque terme
proposé avant de l'ajouter** : le script ne sait pas qu'un terme est hors-sujet ou médicalement
connoté pour ce site (ex. "kinésithérapeute" est ressorti comme écart lexical le 26/07, écarté
volontairement — voir politique de contenu).

## 6. Empreinte de mots-clés des concurrents (au-delà de la page auditée)

**Mesure** : sur quels autres mots-clés/pages un concurrent est visible.
**Si un accès Ahrefs/Semrush est disponible** (l'utilisateur a un compte Ahrefs payant, cf. §8) :
Site Explorer → coller le domaine concurrent → *Organic keywords* / *Top pages* donne la liste
exhaustive, directement. Le moyen le plus fiable, à privilégier si l'accès est ouvert dans la session.
**DIY approximatif sinon** :
- `WebSearch` plusieurs variantes/longue-traîne du mot-clé principal, noter quels domaines reviennent.
- `WebSearch("site:domaine.fr <thème>")` pour lister les pages d'un concurrent sur un sujet.
- Inspecter `https://domaine.fr/sitemap.xml` (souvent public) pour voir l'inventaire de pages et en
  déduire les familles de mots-clés ciblées (structure des URLs, titres de pages).
- Lire les balises `<title>`/H1 de plusieurs pages du même concurrent (`page-metrics.mjs`) pour
  repérer leurs formules de titre récurrentes.

## 7. Maillage interne (opportunités)

**Mesure** : pages du site qui pourraient/devraient linker vers la page cible mais ne le font pas.
**DIY** : chercher dans le contenu du site (Sanity via GROQ, ou `grep` sur `src/i18n/*.ts`) les
mentions du sujet/mot-clé sur d'autres pages qui ne sont pas déjà des liens. Voir méthode détaillée
dans SKILL.md.

## 8. Netlinking (backlinks)

**Mesure** : domaines référents pointant vers la page, comparé aux concurrents.
**Si un accès Ahrefs (ou Semrush/Majestic) est ouvert dans la session** : Site Explorer → domaine
(nous ou un concurrent) → *Backlink profile* → *Referring domains*. Fonctionne pour n'importe quel
domaine, pas seulement le nôtre — comble le trou qui existait sans outil payant.
**Deux pièges vérifiés concrètement le 26/07** (voir `reference/2026-07-26-ahrefs-snapshot.md`) :
1. **Filtrer les domaines marqués `SPAM`** avant de compter un total — un domaine peut afficher
   « 325 referring domains » alors qu'ils sont TOUS des réseaux de liens automatisés sans lien
   éditorial réel. Le total brut n'est pas une mesure d'autorité utilisable tel quel.
2. **Vérifier la fraîcheur du crawl** avant de comparer un DR/Domain Rating entre deux domaines — un
   DR à 0 avec un statut « Site en construction » sur un site qui tourne parfaitement (vérifié via
   `curl`) signifie juste qu'Ahrefs n'a pas recrawlé récemment, pas que le site a un vrai problème.
   Toujours croiser avec un `curl` direct du site avant de conclure quoi que ce soit.

Sans accès payant, pour **notre propre site** uniquement : Google Search Console → section *Links*
(liens externes) donne la liste réelle des domaines référents — gratuit, fiable, mais ne couvre que
notre site, pas les concurrents.

## 9. Structure de page (H1, nombre de mots, headings)

**Mesure** : nombre de H1/H2/H3, mots dans le corps, mots dans les headings, comparés aux plages des
concurrents. **DIY** : `node scripts/page-metrics.mjs <url>` — donne H1 (texte + nombre), H2/H3
(nombre + mots), nombre de mots du corps (nav/header/footer exclus). Lancer sur nous ET sur chaque
concurrent pour calculer la plage réelle (médiane/moyenne) au lieu d'utiliser des seuils génériques.

## 10. Titre & meta description (longueur)

**Mesure** : longueur en caractères, plage optimale pour éviter la troncature Google. **DIY** :
`page-metrics.mjs` donne `titleLength`/`metaDescriptionLength`. Repères généraux (stables, pas
propres à un concurrent) : titre ~50-60 caractères (jusqu'à ~70 reste souvent affiché), meta
description ~120-158 caractères. Ces repères généraux sont un point de départ ; la plage "suggérée"
d'un audit Horusium est recalculée par mot-clé à partir des concurrents réels, donc plus précise —
reproductible en mesurant title/meta de chaque concurrent avec le même script.

## 11. Mots-clés exacts (présence + densité)

**Mesure** : mot-clé exact présent/absent du titre, H1, densité dans le corps vs plage concurrentielle.
**DIY** : `page-metrics.mjs <url> --keyword "<mot-clé exact>"` → `inTitle`, `inH1`, `bodyOccurrences`,
`densityPct`. Lancer aussi sur les concurrents pour obtenir leur densité réelle et calculer la plage
cible, plutôt que viser un chiffre arbitraire.

## 12. Vitesse (TTFB, temps de chargement)

**Mesure** : temps de première octet et temps de chargement complet. **DIY** : `page-metrics.mjs`
donne `ttfbMs`/`loadMs` (mesure côté script, pas un vrai Lighthouse — ordre de grandeur correct, pas
une mesure de rendu navigateur). Pour une mesure plus fidèle : `curl -w "@-" -o /dev/null -s <url>`
avec un format timing, ou Lighthouse/PageSpeed Insights (gratuit, web) pour du côté-client réel.

## 13. Indexabilité (noindex, canonical, robots.txt, HTTP status)

**Mesure** : signaux techniques qui déterminent si Google peut indexer la page. **DIY** :
`page-metrics.mjs` donne `httpStatus`, `robotsMeta`, `canonical`, `robotsTxtDisallowed`. Pour l'état
réel dans l'index Google (pas juste "indexable en théorie") : Search Console → *Inspection d'URL* →
*Test en direct* — seule source fiable de la vérité d'indexation (voir précédent : une alerte
"page non indexée" s'est révélée être une donnée Google périmée, pas un vrai problème — toujours
vérifier en direct avant de paniquer sur une alerte).
