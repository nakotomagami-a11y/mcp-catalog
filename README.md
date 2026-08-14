# MCP & GPT Integrations Catalog

A comprehensive dataset of **410+ AI integrations** across 6 platforms — MCP
servers, ChatGPT plugins/GPTs, Gemini, Qwen, Copilot, and LLaMA tools.

This repo is a **pure data source**. There is no app here anymore — the catalog is
rendered by [arturas.digital](https://arturas.digital/), which fetches
`data/catalog.json` directly from this repo's `master` branch at runtime:

```
https://raw.githubusercontent.com/nakotomagami-a11y/mcp-catalog/master/data/catalog.json
```

## Contents

```
├── data/
│   ├── catalog.json     # every integration entry (source of truth, consumed by arturas.digital)
│   └── blacklist.json   # rejected servers that must never be re-added
├── PROMPTS.md           # copy-paste maintenance prompts for Claude Code
└── PRIORITIES.md        # which categories to prioritise when researching
```

`catalog.json` is `{ "categories": [...], "entries": [...] }`.

## Platforms

Claude (MCP), ChatGPT, Gemini, Qwen, Copilot, LLaMA — set per entry via the
`platform` field.

## Adding entries

Add entries to the `entries` array in `data/catalog.json` following this schema:

```json
{
  "name": "Entry Name",
  "url": "https://example.com",
  "description": "Short description of the integration.",
  "category": "developer-tools",
  "tags": ["tag1", "tag2"],
  "source": "official",
  "status": "live",
  "platform": "mcp"
}
```

**Platform**: `mcp` | `chatgpt` | `qwen` | `llama` | `gemini` | `copilot`
**Source**: `official` | `official-integration` | `partner` | `community`
**Status**: `live` | `beta` | `archived` | `deprecated` | `coming-soon`

Keep the file valid JSON — that is the only build step. Changes go live on
arturas.digital as soon as they land on `master`.

## Maintenance

See `PROMPTS.md` for the copy-paste prompts used to research and audit servers with
Claude Code.

## License

MIT
