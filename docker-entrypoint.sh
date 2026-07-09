#!/bin/sh
# Lance le serveur Node (routes /api/*) en arrière-plan avec relance automatique
# en cas de crash, puis nginx au premier plan (process principal du conteneur).
set -e

(
  while true; do
    node /app/server/entry.mjs || true
    echo "[entrypoint] node server exited, restarting in 1s…" >&2
    sleep 1
  done
) &

exec nginx -g "daemon off;"
