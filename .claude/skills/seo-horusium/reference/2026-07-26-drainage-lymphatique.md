# Audit Horusium — « Drainage lymphatique » — 26/07/2026

Snapshot figé au moment de l'audit (réf. `HOR-E94FC`, https://www.horusium.com/audits/HOR-E94FC).
**Ces chiffres se périment vite** — dès qu'une page cible change (et on en a changé plusieurs le
26/07), il faut relancer l'audit (« Recalculer mon score ») pour des données à jour. Gardé ici comme
exemple concret de méthodologie et comme base de comparaison avant/après.

## Configuration de l'audit

- Mot-clé : « Drainage lymphatique »
- URL cible choisie par Horusium : `https://daphnelachavanne.com` (l'accueil — probablement parce
  que c'est la page qui rankait le mieux au moment de l'audit, PAS parce que c'est la page la plus
  pertinente : `/soins` est thématiquement plus proche du mot-clé). Voir SKILL.md, section
  « Piège : la page auditée n'est pas forcément la bonne cible ».
- Device : Mobile — Méthode : Classique — Pays : FR

## Score au moment de l'audit

**53/100** — « Hors du TOP 10 ». Amélioration suggérée : +17 points minimum.

## Concurrents SERP analysés (Google FR, mobile)

| Domaine | Position | Score Horusium | Similarité sémantique | Domaines référents (page) |
|---|---|---|---|---|
| elsan.care | #1 | 80 | 63% | 42 |
| doctolib.fr | #3 | 45 | 64% | 1 |
| institut-kinesitherapie.paris | #5 | 82 | 68% | 17 |
| la-tour.ch | #6 | 77 | 64% | 1 |
| april.fr | #7 | 70 | 61% | 1 |
| sante-sur-le-net.com | #9 | 74 | 64% | 1 |
| fqm.qc.ca | #10 | 70 | 64% | 10 |
| **daphnelachavanne.com (nous)** | hors top 10 | **53** | — | 5 |

**Constat (le point que l'utilisateur a jugé « pas top ») :** le SERP pour ce mot-clé générique est
dominé par de gros acteurs médicaux/institutionnels (groupes hospitaliers, plateforme de prise de
RDV médical, assureur, site d'info santé) — pas par des praticiennes bien-être indépendantes. Leur
autorité de domaine (42 et 17 domaines référents pour les deux premiers) est hors de portée d'un
site vitrine. Conclusion stratégique : ne pas chercher à concurrencer frontalement ces acteurs sur
« drainage lymphatique » nu — viser des variantes longue traîne qualifiées
(« drainage lymphatique Paris 7e », « drainage lymphatique bien-être », marque + méthode Renata
França) où la concurrence est plus locale/faible, et laisser le mot générique nu comme objectif
secondaire.

## Analyse sémantique

- Similarité moyenne avec le top Google : 64 %
- Alignement avec l'intention de recherche : 75 %
- Cohérence du cluster concurrent : 69 % (« le top Google est relativement homogène »)

## 8 sujets manquants (vs concurrents)

| Sujet | Couverture concurrents | Adopté ? |
|---|---|---|
| Bienfaits médicaux et esthétiques détaillés | 7/7 | ✅ oui (angle bien-être) |
| Contre-indications et précautions médicales | 7/7 | ❌ écarté — médicalise l'offre |
| Déroulement d'une séance | 6/7 | ✅ oui |
| Drainage médical et rôle du kinésithérapeute | 5/7 | ❌ écarté — médicalise l'offre |
| Méthodes Vodder et Leduc (comparaison) | 5/7 | ❌ écarté — hors méthode Renata França |
| Remboursement / prise en charge Sécu | 4/7 | ❌ écarté — médicalise l'offre |
| Indications post-opératoires / post-traumatiques | 4/7 | ❌ écarté — médicalise l'offre |
| Auto-drainage et conseils à domicile | 1/7 | ✅ oui (angle bien-être, différenciant) |

Raisonnement détaillé : voir SKILL.md, section « Politique de contenu : bien-être, pas médical ».

## Termes à utiliser — échantillon (325 termes au total, 304 nécessitaient une action)

Termes prioritaires (forte pertinence) intégrés lors de la passe du 26/07 : système lymphatique,
circulation de la lymphe, jambes lourdes, vaisseaux lymphatiques, ganglions lymphatiques, rétention
d'eau, élimination des toxines, bienfaits du drainage (lymphatique), séance de drainage
(lymphatique), stimuler la circulation.

Termes déclinés (créent une confusion médicale ou hors-sujet pour ce site) : masseur-kinésithérapeute,
albert leduc, méthode vodder, avis médical, professionnels de la santé, traitement d'un cancer,
insuffisance veineuse, asthme sévère.

## Structure de page (avant correctifs)

- 1 H1 : « L'art de la circulation. » (mot-clé absent)
- 806 mots de contenu (plage suggérée 836–1655 ; médiane concurrents 1337)
- 54 mots dans les headings H2-H3 (plage suggérée 61–174)
- 15 headings H2-H3 (plage suggérée 10–24 — déjà bon)
- Titre : 49 caractères (plage suggérée 55–70), mot-clé absent
- Meta description : 148 caractères (plage optimale 130–150 — déjà bon)
- Densité mot-clé exact : 0,74 % (plage concurrentielle 1,50–2,19 %), 6 occurrences/806 mots
- Vitesse : TTFB 112 ms, chargement 127 ms — déjà optimaux
- Indexabilité : aucun souci (pas de noindex, canonical OK, robots.txt OK, HTTP 200)
- Maillage interne : 0 opportunité trouvée par Horusium pour cette URL (l'accueil est déjà the most
  linked-to page du site via la nav — l'audit cherche des pages TIERCES pointant vers la cible)

## Correctifs appliqués le 26/07/2026 (voir PRs #71, #72, #73 + contenu Sanity direct)

Décision produit : au lieu d'optimiser l'accueil (page auditée par Horusium) pour ce mot-clé, la
cible réelle choisie a été `/soins` (déjà thématiquement dédiée, déjà mieux positionnée dans son
titre). Actions :
- Titre `/soins` : « Drainage lymphatique à Paris 7e, méthode Renata França certifiée » (64 car.)
- H1 `/soins` : « Soins & drainage lymphatique. » (mot-clé exact + fidèle au contenu réel de la page)
- +3 paragraphes (déroulement de séance, bienfaits détaillés, gestes à la maison), angle bien-être
  uniquement, ~240 mots
- +1 FAQ (déroulement d'une séance)
- Maillage interne ajouté sur accueil, à propos, contact (mentions existantes → liens) + phrase de
  clôture ajoutée sur yoga/pilates/breathwork (qui ne mentionnaient aucune autre pratique)
- Corrections de prix obsolètes trouvées au passage sur 5 pages (voir mémoire projet — bug récurrent
  Sanity/dico désynchronisés)

**Prochaine étape** : relancer un audit Horusium sur `/soins` (pas l'accueil) pour mesurer l'impact,
une fois le trafic/indexation stabilisés (plusieurs jours/semaines après un changement de contenu).
