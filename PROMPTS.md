# MCP Catalog — Maintenance Prompts

Copy-paste these prompts to Claude Code to maintain the catalog.

---

## 1. Scan Internet & Add New MCP Servers

```
Read data/catalog.json to get the current list of MCP servers. Also read data/blacklist.json — these are rejected servers that must NEVER be added back. Then search the web for NEW MCP (Model Context Protocol) servers released or announced in the last 3 months that are NOT already in the catalog and NOT in the blacklist. Search sources like GitHub, npm, the official MCP servers repo, awesome-mcp-servers lists, and community announcements. Focus on these categories:

- Official (from modelcontextprotocol org)
- Developer Tools (git, GitHub, CI/CD, linting, testing)
- Databases (PostgreSQL, MySQL, SQLite, Redis, MongoDB, vector DBs)
- Cloud & Infra (AWS, GCP, Azure, Docker, Kubernetes, Terraform)
- Creative & Design (Figma, image gen, design tools)
- Game Engines (Unity, Unreal, Godot)
- AI & ML (model serving, RAG, embeddings, LLM tools)
- Productivity (calendar, email, notes, project management)
- Communication (Slack, Discord, Teams, email)
- Security (SAST, DAST, vulnerability scanning, pentesting, secrets)
- Finance & Trading (market data APIs, crypto, portfolio, payments)
- Marketing (SEO, email, social media, analytics, CMS)
- Commerce (Stripe, Shopify, e-commerce)
- Search & Web (web scraping, search APIs, browsers)
- Platforms (Notion, Airtable, Salesforce, CRMs)
- Science & IoT (sensors, lab tools, data analysis)
- Writing & Content (CMS, blogging, documentation)
- Education (learning tools, tutoring)

For each new server found, add it to the "entries" array in data/catalog.json following the exact existing format:
- name, url, description (1-2 sentences), category, tags (3-4), source ("official"|"community"), status ("live"|"beta"|"experimental"), platform ("mcp")

After updating catalog.json, open the site in the browser to verify the changes render correctly.
```

---

## 2. Audit & Clean Outdated MCP Servers

```
Read data/catalog.json to get the current list of MCP servers. Then audit EVERY entry in the catalog by checking its URL and searching the web for its current status. Look for:

1. **Dead servers**: URL returns 404, repo archived/deleted, or project abandoned → REMOVE from the array
2. **Renamed/moved**: Server has been renamed or moved to a new repo → UPDATE the name and URL
3. **Status changes**: Beta server is now stable, or live server is deprecated → UPDATE status field
4. **Source changes**: Community server adopted as official, or vice versa → UPDATE source field
5. **Description outdated**: Major new capabilities or changes in what the server does → UPDATE description
6. **Duplicate entries**: Same server listed under different names or URLs → REMOVE the duplicate, keep the better entry
7. **Category mismatch**: Server better fits a different category now → UPDATE category

For each change made, briefly note what changed and why. After updating catalog.json, open the site in the browser to verify nothing is broken.
```

---

## Search History

Previous searches (use different queries to cover new ground):

**2026-03-22:**
- "new MCP servers model context protocol 2026 github awesome list"
- "punkpeye awesome-mcp-servers new additions 2026 latest"
- "new MCP server github 2026 developer tools CI CD testing lint"
- '"mcp-server" github created:2025-12..2026-03 new'
- "best MCP servers 2026 builder.io blog list"
- "FastMCP most popular MCP tools 2026 developers actually use"

**Servers added:** Bright Data MCP, GitMCP, MCP App Builder, ReactBits MCP, MCP Code, Unipile MCP, Blynk IoT MCP, K8sGPT MCP, NCP (MCP Orchestration), GPT Researcher MCP, DuckDuckGo MCP, Run Python MCP, n8n MCP

**2026-03-22 (round 2):**
- (Piggybacked on ai-tools-catalog research for cross-category coverage)

**Servers added:** OpenBB MCP, Semrush MCP, Mailchimp MCP, Nuclei MCP
**Categories added:** Security, Marketing, Finance & Trading
**Servers re-categorized to Security:** Ghidra MCP, OWASP ZAP MCP, Snyk MCP, Trivy MCP, Semgrep MCP, SonarQube MCP, MCP Security Hub
**Servers re-categorized to Finance:** Alpaca, AlphaVantage, Armor Crypto MCP, Bankless Onchain

---

## Tags Index

Quick reference for finding MCP servers by tag:

### Developer Tools
`git` `github` `ci-cd` `linting` `testing` `coding` `semantic` `agents` `vscode` `builder` `ui-components` `react` `components` `python` `sandbox` `execution` `documentation` `context`

### Security
`sast` `dast` `vulnerability` `scanning` `pentesting` `secrets` `ghidra` `reverse-engineering` `templates` `code-quality`

### Marketing
`seo` `keyword-research` `email` `campaigns` `analytics` `social-media`

### Finance & Trading
`finance` `market-data` `crypto` `portfolio` `payments` `quant`

### Databases
`postgresql` `mysql` `sqlite` `redis` `mongodb` `vector-db` `bigquery` `snowflake` `duckdb`

### Cloud & Infra
`aws` `gcp` `azure` `docker` `kubernetes` `terraform` `diagnostics` `iot`

### AI & ML
`openai` `ollama` `huggingface` `gemini` `replicate` `rag` `embeddings` `llm`

### Productivity
`calendar` `email` `notes` `project-management` `workflow` `automation` `integrations`

### Communication
`slack` `discord` `teams` `whatsapp` `linkedin`

### Search & Web
`web-scraping` `search` `privacy` `data-extraction` `research` `multi-source`
