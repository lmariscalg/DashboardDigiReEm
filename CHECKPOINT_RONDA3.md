# Checkpoint — Ronda 3 (Fase 5: MCP + RAG + Analytics + Docs)

**Fecha**: 2026-06-29. **Base de la ronda**: `main @ 9b18781` (Fases 0-4 completas).

4 sesiones paralelas en **worktrees aislados** (lección de rondas previas: nada
de tree compartido). Ownership de archivos sin solapamiento.

## Estado por sesión

| Sesión | Branch | Worktree | Archivos (owner) | Estado |
|---|---|---|---|---|
| **A · MCP server** | `feat/mcp-server` | `~/vibefast-mcp` | `web/lib/mcp/{server,client}.js`, `web/app/api/mcp/route.js`, **`web/package.json`** (única que lo toca) | 🔄 In Progress |
| **B · RAG (pgvector)** | `feat/rag` | `~/vibefast-rag` | `supabase/migrations/008_documents.sql`, `web/lib/rag/{chunk,embed,retrieve}.js`, `web/app/api/rag/route.js` | 🔄 In Progress |
| **C · Analytics** | `feat/analytics` | `~/vibefast-analytics` | `web/lib/analytics.js` | 🔄 In Progress |
| **D · Docs Fase 5** | `feat/docs-fase5` | `~/vibefast-docs` | `docs-content/features/{mcp,rag,analytics,tool-use,agentes-langgraph}.mdx`, `docs-content/tutoriales/{semana-4-tool-use,semana-5-agentes-mcp}.mdx`, `docs-content/recetas/agente-gmail.mdx` | 🔄 In Progress |

Todas ramifican de `9b18781`:
`git worktree add ~/vibefast-<x> -b feat/<x> 9b18781`

## Decisiones de diseño para CERO colisión (clave)
- **Solo A toca `web/package.json`** (agrega `@modelcontextprotocol/sdk`).
- **B y C diseñadas SIN deps nuevas**: RAG usa `openai` + `@supabase/supabase-js` ya presentes; Analytics manda a PostHog por su **API HTTP (fetch)**, no por `posthog-js`.
- **Nadie toca** `web/config.js` (flags `mcp/rag/posthog` ya existen), `web/app/(app)/layout.js`, `supabase/migrations/007`, ni `.env.example`.
- Cada migración pone su **RLS inline** (B en 008).

## Contratos que exportan (para el sync y para futuras sesiones)
- **MCP (A)**: `getMcpServer()` expone el registry de `web/lib/tools` por MCP; `/api/mcp` (gated por `features.mcp`); `createMcpClient(url)` para MCPs externos.
- **RAG (B)**: migración `documents` (`vector(1536)`) + fn SQL `match_documents`; `lib/rag` chunk/embed/retrieve; `/api/rag` con `{action:"ingest"|"query"}` (gated por `features.rag`).
- **Analytics (C)**: `track(name, properties, { userId })` → tabla `events` + PostHog HTTP. Devuelve `{ ok } | { skipped } | { ok:false, error }` (mismo contrato que `audit.js`).

## Verificación por sesión (aislada)
- Worktree propio. Symlink `node_modules` desde `~/VibeFast` **salvo A** (cambia deps → `yarn install` real).
- Migraciones: Postgres efímero aplicando en orden. **Caveat B**: pgvector puede no estar en el Postgres local → la línea `create extension vector` quizá no valide localmente; en **Supabase Cloud sí existe** built-in.
- `yarn workspace web lint && yarn workspace web build`.
- ⚠️ Docs (D): MDX rompe el build si hay `{` sin escapar en prosa → usar `\{`.

## SYNC (Sesión E, al terminar las 4)
Orden de merge a `main` (A primero por `package.json`; sin conflictos esperados, archivos disjuntos):
```
git checkout main
git merge --no-ff feat/mcp-server
git merge --no-ff feat/rag
git merge --no-ff feat/analytics
git merge --no-ff feat/docs-fase5
nvm use 22.14.0 && yarn install      # trae @modelcontextprotocol/sdk
yarn workspace web lint && yarn workspace web build
git worktree remove ~/vibefast-mcp ~/vibefast-rag ~/vibefast-analytics ~/vibefast-docs
```

## Después de esta ronda — qué queda
- **Verificación end-to-end real** con credenciales (NADA se ha corrido contra Supabase/OpenAI/Resend reales — todo es build/lint/SQL/routing).
- Instrumentar rutas existentes con `track()` (se omitió aquí para no colisionar).
- Hardware Sem 8-9 (`firmware/examples`), `yarn vibefast init`, pulido final de docs.

## Entorno (recordatorio)
- **Node 22 LTS** (`nvm use`; Node 23 rompe install) · yarn 1.x workspaces · JS sin TS · español · Root Directory `web` en Vercel.
