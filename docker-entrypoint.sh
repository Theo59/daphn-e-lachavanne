#!/bin/sh
# Lance le serveur Node (routes /api/*) en arrière-plan avec relance automatique
# en cas de crash, puis nginx au premier plan (process principal du conteneur).
set -e

(
  while true; do
    # HOST/PORT forcés ici : Coolify injecte sa propre variable PORT (= port
    # exposé de l'app, 80) dans le conteneur, qui écraserait sinon l'ENV du
    # Dockerfile et ferait entrer Node en conflit avec nginx sur le port 80.
    HOST=127.0.0.1 PORT=4321 node /app/server/entry.mjs || true
    echo "[entrypoint] node server exited, restarting in 1s…" >&2
    sleep 1
  done
) &

exec nginx -g "daemon off;"
