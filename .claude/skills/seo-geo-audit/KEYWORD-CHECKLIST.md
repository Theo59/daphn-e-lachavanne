# Checklist stratégie de mots-clés — avant d'auditer, savoir quoi cibler

Étape logiquement AVANT `SEO-CHECKLIST.md`/`GEO-CHECKLIST.md` : choisir les bons mots-clés avant
d'optimiser une page pour eux. Ne jamais supposer le mot-clé à partir du contenu existant — toujours
demander.

## 0. Demander, ne pas supposer

**Toujours commencer par demander à l'utilisateur** sur quel(s) mot(s)-clé(s) il veut être visible,
pour quelle page. Une même page peut viser des mots-clés différents selon la priorité business
(marque vs générique, fort volume vs fort intent d'achat, local vs national). Ne jamais déduire le
mot-clé cible du contenu déjà en place sans confirmation — c'est exactement l'inverse de la démarche
(le contenu doit suivre le mot-clé choisi, pas l'inverse).

## 1. Décliner le mot-clé de départ en variantes

**DIY (sans outil)** :
- `WebSearch` plusieurs variantes naturelles à la main : + localisation (« Paris », « Paris 7e »,
  « rive gauche »), + qualificatifs (« prix », « avis », « meilleur », « combien coûte », « près de
  chez moi »), formes interrogatives (« comment », « pourquoi », « qu'est-ce que »).
- Relire les FAQ des pages concurrentes déjà récupérées pendant l'analyse SEO/GEO (`WebFetch`) — ce
  sont de vraies questions posées par de vrais internautes, dans leurs propres mots.
- Repérer les répétitions entre plusieurs `WebSearch` : une variante qui revient dans les résultats
  de plusieurs recherches différentes est un signal de volume réel, pas juste une intuition.

**Si un accès Google Ads (Keyword Planner) est disponible dans la session** (gratuit, un compte Ads
suffit, aucune dépense requise pour consulter les données) : *Discover new keywords* donne un volume
de recherche réel par variante — la source la plus fiable pour cette étape, à privilégier si l'accès
existe déjà dans l'onglet du navigateur. Ne pas bloquer l'analyse dessus si l'accès n'est pas ouvert :
la méthode DIY ci-dessus reste utilisable seule.

## 2. Repérer des mots-clés moins utilisés par les concurrents (opportunités)

**Mesure** : mots-clés à volume/pertinence réels mais peu disputés — plus faciles à ranker qu'un
mot-clé générique saturé.
**DIY** :
- Croiser avec `scripts/term-gap.mjs` (déjà utilisé pour l'analyse de contenu) : les termes à forte
  pertinence qui n'apparaissent que chez **certains** concurrents (pas tous) sont sous-exploités.
- Pour chaque variante candidate (issue de l'étape 1) : lancer un `WebSearch` dédié et regarder QUI
  ressort. Si le top des résultats est faible (forums, petits sites, aucun gros concurrent qui cible
  cette expression précise dans son titre/H1), c'est une opportunité plus accessible que le mot-clé
  générique de départ.
- Combinaisons longue traîne inédites : une variante que **aucun** concurrent n'utilise comme titre/H1
  principal (vérifiable via `page-metrics.mjs` sur leurs pages) est un angle libre à occuper.
- **Ne jamais optimiser une opportunité juste parce qu'elle est facile** : vérifier que l'intention de
  recherche correspond bien à ce que la page propose réellement — un mot-clé facile sans rapport avec
  l'offre n'apporte aucun trafic utile.

## 3. Coût publicitaire (Google Ads / CPC)

**Mesure** : combien coûterait l'achat de ce mot-clé en Google Ads (enchère CPC), pour juger si le
payant est une option complémentaire au SEO. **Pas de méthode DIY fiable ici** — le CPC vient du
système d'enchères en temps réel de Google, aucune approximation par script ne le reproduit
sérieusement.
- **Source correcte** : Google Ads → Keyword Planner (gratuit, aucune dépense requise pour consulter).
  Donne une fourchette de volume de recherche + une fourchette d'enchère CPC (basse/haute) par
  mot-clé. Vérifier d'abord ce qui est déjà accessible dans la session navigateur avant de demander à
  l'utilisateur de se connecter.
- **Sans accès Google Ads** : aucun substitut gratuit fiable. Signal faible uniquement : compter le
  nombre d'annonces payantes affichées sur une vraie recherche Google pour ce mot-clé (plus
  d'annonceurs ≈ CPC probablement plus élevé) — à présenter comme une indication directionnelle
  approximative, jamais comme un chiffre.

## 4. Synthèse

Présenter un tableau : mot-clé de départ → variantes déclinées → lesquelles sont des opportunités
(concurrence faible, pas encore de compétiteur dessus) → fourchette CPC si disponible. Recommandation
finale : quelles variantes prioriser en contenu organique (SEO/GEO, via les deux autres checklists) vs
lesquelles pourraient justifier un test en Google Ads compte tenu du coût vs de l'opportunité.
