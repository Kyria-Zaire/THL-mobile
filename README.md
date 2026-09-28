# THL Mobile

Marketplace mobile premium pour le convoyage automobile haut de gamme.

## Stack

- **Mobile** : Expo SDK 54, React Native, TypeScript strict, expo-router, Clerk Auth
- **API** : FastAPI, SQLAlchemy 2.0 async, Alembic, PostgreSQL
- **Infra** : Railway, Clerk, Cloudflare R2, EAS Build

## Structure

- `apps/mobile/` — Application mobile (Expo)
- `apps/api/` — API REST (FastAPI)
- `packages/` — Code partagé (V2)
- `docs/` — Documentation et ADR

## Dev local

### Prérequis

- Node 20+
- pnpm 9+
- Python 3.12+
- uv (https://docs.astral.sh/uv/)
- Docker Desktop

### Setup

```bash
pnpm install
cp .env.example .env
docker compose up -d postgres
pnpm api migrate
pnpm api dev    # API THL sur http://127.0.0.1:8005
pnpm mobile     # Expo
```

Le port **8005** est réservé à l'API THL en développement local. Le port 8000
reste attribué à `yunicity-backend-dev` et ne doit pas être réutilisé par ce projet.

Vérification rapide :

```bash
curl http://localhost:8005/health
# {"status":"ok"}
```

## Gouvernance

Toutes les décisions d'architecture sont dans `docs/ADR/`.
La documentation technique est dans `docs/architecture.md`.
