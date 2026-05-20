# ── Stage 1 : build ──────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Dépendances en premier pour profiter du cache des layers
COPY package*.json ./
RUN npm ci --frozen-lockfile

# Code source + assets publics
COPY . .
RUN npm run build

# ── Stage 2 : serve ──────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runner

# Config nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Fichiers statiques générés par Astro
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
