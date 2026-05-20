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

**2026-05-19:**
- "new MCP server model context protocol April May 2026 github release"
- "awesome-mcp-servers punkpeye new additions April 2026"
- "MCP server npm package 'mcp-server' published 2026 new integration"
- "site:github.com mcp-server 2026 new tool integration database cloud"
- "microsoft MCP server catalog official 2026 Azure Fabric"
- "new MCP server Hacker News Product Hunt launch April May 2026"
- "pulsemcp.com new MCP servers 2026 recently added"
- "MCP server Anthropic Claude integration 2026 enterprise tools new"
- "Supabase MCP server official github 2026" (already in catalog)
- "Microsoft Fabric MCP server Real-Time Intelligence github 2026"
- "MCP server Vercel Linear HubSpot Salesforce official 2026 github"
- "new MCP servers glama.ai mcp.so trending April May 2026"
- "Salesforce MCP server official github 'salesforcecli/mcp'"
- "HubSpot official MCP server 'developers.hubspot.com/mcp' github integration"
- "MCP server Linear official github 'linear-app' 2025 2026" (already in catalog)
- "Vercel MCP server official github vercel.com 2026" (already in catalog)
- "MCP server Neon database official github 2025 2026" (already in catalog)
- "MCP server 'evmcp' OR 'evm blockchain' OR 'web3 ethereum' github 2026"
- "MCP server Trends 'Google Trends' OR 'pulsemcp trends' official github 2026"
- "MCP server World Cup 2026 FIFA sports data github"
- "MCP server 'Testplane' OR 'BrowserStack' OR 'Playwright testing' 2026 github"
- "BrowserStack MCP server official github 2026 testing" (already in catalog)
- "MCP server 'Next.js devtools' OR 'nextjs mcp' vercel github 2026"
- "MCP server 'Oracle NetSuite' OR 'Sage Intacct' OR 'SAP' enterprise official github 2026"
- "MCP server 'Anthropic semantic network' OR 'knowledge graph' OR 'AWS Bedrock Knowledge' official 2026"
- "MCP server SAP 'SAP BDC' OR 'SAP Business Data Cloud' github 2026"
- "Conductor MCP server Orkes workflow orchestration github 2026"
- "MCP server 'Balldontlie' sports data NBA NFL official github 2026"
- "MCP server 'Cloudflare' official 'workers' OR 'KV' OR 'D1' github 2025 2026" (already in catalog)
- "MCP server 'Stripe' OR 'payment' official github new 2026" (already in catalog)
- "MCP server 'Godot' OR 'Unity' OR 'Unreal' game engine new 2026 github"
- "MCP server 'education' OR 'tutoring' OR 'LMS' OR 'Khan Academy' 2026 github"
- "EduBase MCP server github e-learning education 2026"
- "MCP server 'Microsoft Learn' OR 'MicrosoftDocs' official github 2026"
- "MCP server 'writing' OR 'content creation' OR 'WordPress' OR 'Ghost CMS' github 2026 new"
- "MCP server 'Tableau' OR 'Power BI' OR 'data visualization' OR 'Grafana' github 2026"
- "Grafana MCP server official github 'grafana/mcp-grafana' 2026" (already in catalog)
- "Tableau official MCP server 'tableau/tableau-mcp' github launch 2026"
- "Power BI MCP server official 'microsoft/powerbi-modeling-mcp' github 2026"

**Servers added (17):**
- Microsoft Fabric MCP (cloud) — official MS catalog for Azure/Fabric 260+ tools
- Microsoft Fabric RTI MCP (cloud) — Fabric Real-Time Intelligence / KQL / Eventhouse
- Salesforce DX MCP (platforms) — official Salesforce CLI MCP for orgs/Apex/SOQL
- HubSpot MCP Server (platforms) — official HubSpot CRM read/write access
- Trends MCP (search-web) — live trend data from Google, YouTube, TikTok, Reddit, 12+ sources
- Next.js DevTools MCP (developer-tools) — official Vercel MCP for Next.js 16+ dev agents
- EVM MCP Server (finance) — 60+ EVM chains, ENS, contract interactions, token transfers
- Web3 MCP (finance) — multi-chain MCP (Ethereum, Solana, Bitcoin, XRP, Cardano, etc.)
- Conductor MCP (ai-ml) — Orkes Conductor workflow orchestration MCP
- BALLDONTLIE MCP (science) — official sports API for NBA/NFL/MLB/EPL/NHL/FIFA World Cup
- World Cup 2026 MCP (science) — FIFA World Cup 2026 AI companion with 18 tools
- SAP BDC MCP Server (cloud) — SAP Business Data Cloud Delta Sharing & data products
- Tableau MCP (developer-tools) — official Tableau Cloud/Server data source access
- Power BI Modeling MCP (developer-tools) — official Microsoft Power BI semantic modeling
- Ghost MCP (writing) — Ghost CMS blog management (posts, members, newsletters, tiers)
- EduBase MCP (education) — official EduBase e-learning platform integration
- Microsoft Learn MCP (education) — official Microsoft docs + code samples, no auth required

**Categories with most new entries:** Cloud & Infra (+3), Developer Tools (+3), Finance & Trading (+2), Science & IoT (+2), Education (+2), Platforms (+2)

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
