# MCP & GPT Integrations Catalog

A comprehensive catalog of **410+ AI integrations** across 6 major platforms — browse MCP servers, ChatGPT plugins, LLM tools, and more in one place.

**[Live Demo](https://arturas.digital/lab/mcp-catalog/)**

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)

## Platforms

| Platform | Entries | Description |
|----------|---------|-------------|
| **Claude** | 204 | MCP servers for Claude, AI agents, and developer tools |
| **ChatGPT** | 171 | GPTs, plugins, connectors, apps, and OpenAI APIs |
| **Gemini** | 13 | Google AI Studio, Vertex AI, NotebookLM, Gemini CLI |
| **Qwen** | 8 | Alibaba's Qwen models, agents, and MCP bridges |
| **Copilot** | 8 | GitHub Copilot, Microsoft 365 Copilot, Azure, Power BI |
| **LLaMA** | 6 | Meta's LLaMA models, LLaMA Stack, Code LLaMA |

## Categories

Developer Tools, Databases, Cloud & Infra, Creative & Design, Game Engines, AI & ML, Productivity, Communication, Commerce & Finance, Search & Web, Platforms, Science & IoT, Writing & Content, Education, Registries

## Features

- **Multi-platform filtering** — filter by Claude, ChatGPT, Qwen, LLaMA, Gemini, or Copilot
- **Category & source filters** — narrow by category, source (Official / Vendor / Partner / Community), and status
- **Full-text search** — search across names, descriptions, and tags
- **Lazy loading** — loads entries in batches for fast initial render
- **Responsive design** — works on desktop and mobile
- **Tilt hover effect** — interactive card animations

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the catalog.

## Project Structure

```
├── data/
│   └── catalog.json          # All 410+ catalog entries
├── modules/
│   └── catalog/
│       ├── components/       # CatalogPage, FilterBar, SearchBar, ServerCard
│       ├── hooks/            # useFilters, useLazyLoad, useTilt
│       └── utils/            # Constants
├── pages/                    # Next.js pages
├── shared/
│   ├── config/               # Categories, sources, statuses
│   └── types/                # TypeScript interfaces
└── styles/                   # Global CSS
```

## Adding Entries

Add new entries to `data/catalog.json` following this schema:

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

## Tech Stack

- **Framework**: Next.js (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS
- **Data**: Static JSON loaded at build time via `getStaticProps`

## License

MIT
