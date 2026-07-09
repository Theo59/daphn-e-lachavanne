# ── Stage 1 : build ──────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Dépendances en premier pour profiter du cache des layers
COPY package*.json ./
RUN npm ci

# Identifiants Sanity — PUBLICS (pas des secrets, cf. SECRETS_SCAN_OMIT_KEYS
# historique côté Netlify) mais nécessaires AU BUILD : sans eux, Astro build en
# fallback sur les dicos i18n et n'inclut pas le Studio (/admin). À fournir en
# "Build Variables" côté Coolify (pas seulement en variables d'exécution).
ARG PUBLIC_SANITY_PROJECT_ID
ARG PUBLIC_SANITY_DATASET=production
ENV PUBLIC_SANITY_PROJECT_ID=$PUBLIC_SANITY_PROJECT_ID
ENV PUBLIC_SANITY_DATASET=$PUBLIC_SANITY_DATASET

# Code source + assets publics
COPY . .
RUN npm run build

# ── Stage 2 : serve ──────────────────────────────────────────────────────────
# nginx sert le statique (dist/client) directement, comme avant — aucune perte de
# perf sur les pages du site. Un petit process Node (adaptateur @astrojs/node en
# mode standalone) ne gère que /api/* (contact, newsletter → Brevo), routes que
# Netlify Forms / Netlify Functions couvraient auparavant.
FROM node:22-alpine AS runner

RUN apk add --no-cache nginx

WORKDIR /app

# Dépendances de prod pour le serveur Node (le bundle "standalone" laisse
# certains paquets externes, ex. picocolors/piccolore, à résoudre via node_modules).
COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist/server ./server
COPY --from=builder /app/dist/client /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

ENV HOST=127.0.0.1
ENV PORT=4321

EXPOSE 80
CMD ["/docker-entrypoint.sh"]
