# Audit Geoptie (GEO) — `/soins` — 26/07/2026

Snapshot d'un audit gratuit Geoptie (https://geoptie.com/fr/free-geo-audit), lancé manuellement sur
`https://daphnelachavanne.com/soins`. **Se périme vite** (contenu de la page changé le jour même) —
gardé comme exemple concret de méthodologie GEO et vérité de référence pour calibrer les scripts.
Seules 2 des 6 dimensions sont détaillées en gratuit (les 4 autres exigent une inscription) ; les
2 détaillées sont reconstituées intégralement ci-dessous.

## Score

**80/100 — GEO-Ready**. Moyenne du secteur : 68/100. Meilleurs concurrents : 92/100.

## Les 6 dimensions GEO (telles que nommées par l'outil)

| Dimension | Score | Détail dispo en gratuit ? |
|---|---|---|
| Autorité de citation | 70 (Good) | ✅ oui |
| Optimisation technique | 92 (Excellent) | ✅ oui |
| Contenu réponse en premier | 75 | ❌ non (inscription requise) |
| Compréhension IA | 90 | ❌ non |
| Fraîcheur du contenu | 85 | ❌ non |
| Contexte concurrentiel | 82 | ❌ non |

## Autorité de citation (70/100) — sous-dimensions

Crédibilité de la source 65 · Format de citation 45 · Autorité de marque 80.

### Problèmes signalés — et vérification contre notre code réel

1. **« no credentials » (impact 70%, effort faible)** — *« Les identifiants du praticien se limitent
   à une date de certification, sans détail de qualification ni organisme certificateur. »*
   **Vérifié** : exact. `src/layouts/Layout.astro` émet bien un `Person.hasCredential[]`
   (4 `EducationalOccupationalCredential`, chacun avec `name` + `dateCreated`), mais aucun n'a de
   `recognizedBy` (organisme émetteur). Le libellé « no credentials » est trompeur (des credentials
   existent) — **toujours lire la description complète du problème, pas juste son étiquette**.
2. **« unsourced claim » (impact 50%, effort moyen)** — allégations de bienfaits santé/physiologiques
   non appuyées par une source scientifique citée. **Vérifié** : exact, notre contenu (bienfaits du
   drainage) n'a jamais cité de source.
3. **« missing org signals » (impact 60%, effort moyen)** — *« Aucun schema Organization explicite
   n'est intégré, limitant l'identité business machine-readable. »* **FAUX POSITIF** — vérifié en
   extrayant le JSON-LD réel de la page (`curl` + parsing) : le graphe `LocalBusiness` +
   `HealthAndBeautyBusiness` (avec adresse, géoloc, horaires, `sameAs`) est bien présent. Un outil
   IA peut avoir un angle mort sur les sous-types `LocalBusiness` d'`Organization`, ou son crawler
   n'exécute pas complètement la page. **Toujours vérifier une alerte contre le code/JSON-LD réel
   avant d'agir** — même leçon que le faux « page non indexée » de Google Search Console (voir
   mémoire projet) et le mauvais ciblage de page par Horusium.
4. **« missing reviews » (impact 70%, effort moyen)** — note client mentionnée mais pas d'avis
   détaillés/témoignages visibles sur la page. **Vérifié** : exact pour `/soins` spécifiquement
   (les témoignages existent sur l'accueil, pas ici). ⚠️ Tension avec une décision déjà prise
   volontairement : le JSON-LD n'émet PAS `aggregateRating` (commentaire dans le code : « non
   vérifiable → risque de pénalité Google »). Ajouter des avis visibles en texte (sans schema
   `aggregateRating` non vérifié) serait la voie sûre.

## Optimisation technique (92/100) — sous-dimensions

Performance de la page 88 · Crawlabilité 100 · Rich Snippets 95.
PageSpeed : Performance 92, Accessibilité 96, Bonnes pratiques 100, SEO 100.
Core Web Vitals : LCP 3.0s (✗ Mauvais) · FID 20ms (✓) · CLS 0 (✓) · FCP 0.9s (✓) · TTFB 40ms (✓).
Bots IA : 14/14 autorisés (OpenAI, Anthropic, Perplexity, Google, Apple, Meta, etc.) — cohérent avec
`public/robots.txt` de ce projet (section GEO dédiée, `Allow: /` pour GPTBot/ClaudeBot/PerplexityBot/
Google-Extended/Applebot-Extended/OAI-SearchBot/ChatGPT-User/Claude-Web + wildcard `*`).

### Problèmes signalés

1. **LCP 3.0s « Mauvais » (impact 85%, effort moyen)** — à investiguer : média hero (vidéo/image) de
   `/soins`, poids/format, priorité de chargement.
2. **Pas d'auteur/date de publication en metadata (impact 75%, effort faible)** — ajouter
   `datePublished`/`dateModified` (et éventuellement `author`) au JSON-LD `Service`/`Article`.
3. **Titre tronqué (impact 65%, effort faible)** — notre titre `/soins` fait 64 caractères (dans la
   plage 55-70 recommandée par Horusium !). Tension entre les deux outils : Geoptie semble tronquer
   plus tôt (~50-55 car. pour un affichage IA) que ce que Google Search tolère. Arbitrage à faire
   au cas par cas, pas de règle universelle entre SEO classique et GEO.

## À ne PAS faire aveuglément

Le score composite (80/100) et les 7 problèmes ne doivent pas être traités comme une liste de tâches
automatique : le point 3 (« missing org signals ») était un faux positif, le point 4 (« missing
reviews ») entre en tension avec une décision de sécurité SEO déjà prise. Vérifier chaque signal
contre le code/contenu réel avant d'agir — voir GEO-CHECKLIST.md.
