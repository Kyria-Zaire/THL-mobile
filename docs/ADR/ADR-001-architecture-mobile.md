# ADR-001 — Architecture THL Mobile

## Statut

Accepté — 27/09/2026

## Contexte

Audit du code legacy (dev précédent) :

- 4 failles de sécurité critiques
- Backend monolithique (1111 lignes)
- MongoDB non transactionnel
- Aucun Git, aucun test unitaire, aucune CI

Décision CTO : rewrite from scratch.

## Décisions

### D1 — Repo séparé

Repo `thl-mobile` indépendant du site web.
Isolation totale pour éviter de casser la prod web.

### D2 — Monorepo pnpm

Structure apps/mobile + apps/api.
Permet le partage futur de types.

### D3 — Expo SDK 54

Stable, mature, support EAS Build cloud.
Compatibilité iOS/Android sans Mac local.

### D4 — Clerk pour l'auth

Gestion de l'auth déléguée à Clerk.
Avantages : OAuth social, MFA, sessions, refresh auto, webhooks.
Évite le JWT custom du legacy.

### D5 — PostgreSQL unique

Une seule DB cohérente avec le web.
Transactions ACID pour la facturation.
Migration MongoDB vers PostgreSQL assumée.

### D6 — FastAPI + SQLAlchemy 2.0 async

Stack Python moderne et typée.
Cohérence avec l'équipe et le web.

### D7 — uv comme package manager Python

Rapide, moderne, déjà utilisé sur le web.

## Conséquences

- Repo séparé = 2 CI, 2 déploiements
- PostgreSQL = migration legacy obligatoire
- Clerk = coût mensuel si plus de 10k utilisateurs
- Expo SDK 54 = dépendances verrouillées
