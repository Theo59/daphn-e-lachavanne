# Checklist GEO — préparation aux moteurs de recherche IA (ChatGPT, Perplexity, Claude, Gemini, Google AI)

GEO (Generative Engine Optimization) ≠ SEO classique : l'objectif n'est plus de ranker dans une SERP
à 10 liens bleus, mais d'être **cité/synthétisé** par un modèle qui répond directement. Basée sur les
bonnes pratiques GEO connues (structured data, E-E-A-T, accès bots). Pour chaque point : ce qu'il
mesure et comment le vérifier/corriger soi-même.

## 1. Autorité de citation (source credibility, citation format, brand authority)

**Mesure** : est-ce qu'un modèle peut établir que le contenu vient d'une source fiable/qualifiée ?
**DIY** :
- Vérifier le JSON-LD réel (`curl <url> | grep ld+json`, ou `page-metrics.mjs` étendu) : y a-t-il un
  `Person`/`Organization`/`LocalBusiness` avec identité, coordonnées, `hasCredential` ?
- Pour chaque `EducationalOccupationalCredential` : a-t-il un `recognizedBy` (organisme émetteur) ?
  Un simple `name` + `dateCreated` sans organisme est une crédibilité faible.
- Les allégations de bienfaits/résultats sont-elles sourcées (lien vers une étude, un organisme) ou
  juste affirmées ? Un modèle IA hésite à citer une affirmation non sourcée pour un sujet santé.
- Des avis/témoignages sont-ils **visibles en texte sur la page** (pas seulement une note externe
  mentionnée) ? ⚠️ Ne pas ajouter d'`aggregateRating` schema.org sans données vérifiables — c'est un
  motif de pénalité Google documenté (voir `src/layouts/Layout.astro`, commentaire dédié) ; préférer
  des témoignages textuels réels affichés sur la page plutôt qu'un schema non vérifié.

## 2. Optimisation technique (page performance, crawlabilité, rich snippets)

**Mesure** : le contenu est-il techniquement accessible et bien balisé pour un crawler IA ?
**DIY** :
- **Accès bots IA** : vérifier `robots.txt` autorise (ou ne bloque pas) les user-agents connus :
  `GPTBot`, `OAI-SearchBot`, `ChatGPT-User` (OpenAI) · `ClaudeBot`, `Claude-Web`, `anthropic-ai`
  (Anthropic) · `PerplexityBot` · `Google-Extended` (Gemini/AI Overviews) · `Applebot-Extended` ·
  `Amazonbot` · `meta-externalagent` · `Bytespider` (TikTok/ByteDance) · `cohere-ai`. Un
  `Disallow: /` générique (`User-agent: *`) bloque tout le monde par défaut, même sans règle
  spécifique par bot — vérifier qu'aucune règle générique trop large n'existe.
- **Core Web Vitals** : PageSpeed Insights API (gratuite, sans clé pour un usage faible volume) —
  `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=<url>&category=performance`. Donne
  LCP/FID/CLS/FCP/TTFB + notes Accessibilité/Bonnes pratiques/SEO. Alternative : `page-metrics.mjs`
  donne un TTFB/temps de chargement approximatifs (pas un vrai Lighthouse navigateur).
- **Rich snippets / structured data** : valider le JSON-LD avec le Rich Results Test de Google
  (https://search.google.com/test/rich-results, web, gratuit) ou le validateur schema.org
  (https://validator.schema.org/). Vérifier la présence de `datePublished`/`dateModified` — leur
  absence est un signal de fraîcheur manquant que les modèles IA valorisent.

## 3. Contenu réponse en premier (answer-first content)

**Mesure** : la page donne-t-elle une réponse claire et concise dès le début, avant les détails ?
**DIY** : lire le premier paragraphe visible (hors nav) — répond-il directement à la question
implicite du mot-clé/sujet en 1-2 phrases, avant de développer ? Les FAQ avec `FAQPage` schema
(déjà en place sur ce site via `src/components/Faq.astro`) sont un format nativement "answer-first"
que les moteurs IA citent volontiers — vérifier que chaque page en a une, pertinente au sujet.

## 4. Compréhension IA (AI comprehension / clarté structurelle)

**Mesure** : un modèle peut-il facilement extraire les entités, faits et relations du contenu ?
**DIY** : hiérarchie de titres logique (un seul H1, H2/H3 en cascade sans saut de niveau) ; noms
d'entités cohérents et non ambigus (toujours "Daphné Lachavanne", jamais un pseudonyme variable) ;
éviter le jargon non expliqué ; phrases factuelles courtes plutôt que des tournures marketing vagues.

## 5. Fraîcheur du contenu (content freshness)

**Mesure** : des signaux indiquent-ils que le contenu est à jour ? **DIY** : vérifier la présence de
`dateModified`/`datePublished` en JSON-LD, une date visible "mis à jour le…" sur la page si pertinent,
et le `lastmod` du sitemap (déjà présent, généré automatiquement par `@astrojs/sitemap`).

## 6. Contexte concurrentiel (competitive context)

**Mesure** : le contenu couvre-t-il le sujet aussi bien que les sources qu'un modèle IA citerait en
alternative ? **DIY** : même méthode que `SEO-CHECKLIST.md` §3-4 (WebFetch des pages concurrentes,
comparaison des sous-thèmes couverts) — la couverture qui aide au ranking Google aide aussi à la
citation IA, les deux dimensions se recoupent largement.

## Piège général : vérifier avant d'agir

Avant de conclure qu'un signal GEO manque (schema, credential, fraîcheur…) : `curl` la page en direct,
extraire le JSON-LD réel, et confirmer que le problème existe vraiment plutôt que de le supposer.
Un schema qui semble absent en théorie peut très bien être déjà présent dans le code — vérifier le
rendu réel avant d'écrire un correctif. Même réflexe que pour toute alerte technique (Search Console,
robots.txt…) : une page qui semble avoir un problème peut simplement refléter une donnée mise en
cache ou périmée ailleurs — toujours vérifier en direct avant d'agir.
