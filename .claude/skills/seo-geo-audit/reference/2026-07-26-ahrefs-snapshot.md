# Audit Ahrefs (backlinks/organique) — daphnelachavanne.com — 26/07/2026

Snapshot Ahrefs Site Explorer (outil payant, accès utilisateur), consulté le 26/07/2026 sur le domaine
entier (pas une page précise). **Découverte importante avec une explication, pas juste des chiffres à
copier** — lire la section « Ce qui s'est vraiment passé » avant de réutiliser ces nombres.

## Ce que montre le tableau de bord (à prendre avec précaution)

- Statut : **« Site en construction »**
- DR (Domain Rating) : 0 · UR : 0 · AR : N/A
- Organic keywords : **0** (page dédiée « Organic keywords » confirmée : *0 keywords, No results found*)
- Organic traffic : 0
- Crawled pages (par AhrefsBot) : **1**
- Backlinks : 327 (all time 335) · Referring domains : 325 (all time 333)

## Ce qui s'est vraiment passé (vérifié, pas supposé)

Ces deux jeux de chiffres sont **incohérents entre eux** (325 domaines référents mais DR 0 et 0 mot-clé
organique) parce qu'ils viennent de deux mécanismes Ahrefs différents :
- Le **graphe de liens** (backlinks/referring domains) est alimenté par le crawl d'AhrefsBot sur
  *d'autres* sites qui contiennent un lien vers nous — indépendant de la capacité d'Ahrefs à crawler
  NOTRE site.
- Le **DR/organic keywords/crawled pages** dépend du crawl direct de NOTRE domaine par AhrefsBot, qui
  est manifestement bloqué ou n'a pas eu lieu depuis très longtemps (1 seule page crawlée, statut
  « Site en construction » — probablement un snapshot d'avant la mise en ligne du contenu réel,
  jamais rafraîchi depuis).

**Vérifié que ce n'est PAS un blocage technique de notre côté** :
```
curl -sI -A "Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)" https://daphnelachavanne.com/
# → HTTP/2 200, robots.txt = Allow: / générique, AhrefsBot n'est bloqué nulle part
```
Donc : pas une urgence à corriger, juste un crawl Ahrefs à laisser rattraper son retard tout seul (pas
de bouton self-serve « recrawl » trouvé dans l'UI Site Explorer).

## Découverte réelle et actionnable : le profil de backlinks est 100 % spam

Les 50 premiers domaines référents (triés par DR décroissant) sont **tous marqués `SPAM` par Ahrefs
lui-même** : `rankyour.website`, `buybacklinks.agency`, `fiverr-quality-seo-at-affordable-rates.site`,
`rank-top.click`, `linkrankpro.shop`, `rankboostly.shop`, etc. — tous avec 0 trafic/0 mots-clés
propres. Ce sont des réseaux de liens automatisés (PBN/spam SEO), pas de vrais backlinks éditoriaux.

**Pas motif de panique** : Google Search Console → Sécurité et actions manuelles confirme **aucune
action manuelle** sur ce domaine à ce jour (vérifié la même session). Ce type de bruit touche
quasiment tous les domaines du web (bots qui linkent massivement et automatiquement, parfois pour
gonfler artificiellement leur propre réseau). **À surveiller, pas à corriger dans l'urgence.** Si une
action manuelle apparaît un jour dans GSC, exporter cette liste de domaines depuis Ahrefs
(Referring domains → Export) pour constituer un fichier de désaveu (Google Disavow Tool).

## Ce que ça change pour la checklist SEO

Le point §8 (Netlinking) de `SEO-CHECKLIST.md` disait « aucune donnée fiable et gratuite sur les
backlinks d'un concurrent ». Avec un accès Ahrefs (payant, déjà souscrit par l'utilisateur), c'est
maintenant possible — pour nous ET pour les concurrents — via Site Explorer → coller n'importe quel
domaine. Mais **toujours vérifier la fraîcheur du crawl avant de comparer** (ex. : comparer notre
DR 0 périmé à un concurrent avec un DR à jour serait trompeur) et **toujours filtrer les domaines
`SPAM`** avant de compter un total de referring domains — le total brut (325) est inutilisable tel
quel, le total après filtrage spam est ce qui compte vraiment (proche de 0 ici).
