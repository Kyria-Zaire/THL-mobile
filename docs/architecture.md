# Architecture technique

THL Mobile est un monorepo pnpm composé d'une application Expo et d'une API FastAPI.

- `apps/mobile` contient le client iOS, Android et web.
- `apps/api` contient l'API REST et l'accès PostgreSQL asynchrone.
- Clerk fournit l'identité et la gestion des sessions.
- PostgreSQL constitue la source de vérité transactionnelle.

Les décisions structurantes sont documentées dans `docs/ADR`.
