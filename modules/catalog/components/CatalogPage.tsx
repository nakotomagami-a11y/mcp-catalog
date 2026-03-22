import type { CatalogData } from "@shared/types";
import { useFilters } from "../hooks/useFilters";
import { useLazyLoad } from "../hooks/useLazyLoad";
import { SearchBar } from "./SearchBar";
import { FilterBar } from "./FilterBar";
import { ServerCard } from "./ServerCard";

interface CatalogPageProps {
  data: CatalogData;
}

export function CatalogPage({ data }: CatalogPageProps) {
  const {
    filtered,
    activePlatform,
    setActivePlatform,
    activeCategory,
    setActiveCategory,
    activeSource,
    setActiveSource,
    activeStatus,
    setActiveStatus,
    setSearchQuery,
  } = useFilters(data.entries);

  const { visible, hasMore, sentinelRef } = useLazyLoad(filtered);

  return (
    <div className="container">
      <header className="header">
        <div className="header-protocol">
          <span className="protocol-tag">AI INTEGRATIONS CATALOG</span>
        </div>
        <h1>
          <span className="title-mcp">MCP</span> &amp;{" "}
          <span className="title-gpt">GPT</span> Integrations
        </h1>
        <p className="header-sub">
          {data.entries.length}+ servers, plugins, and integrations for Claude,
          ChatGPT, AI agents, and developer tools.
        </p>

        <SearchBar onSearch={setSearchQuery} />

        <FilterBar
          activePlatform={activePlatform}
          activeCategory={activeCategory}
          activeSource={activeSource}
          activeStatus={activeStatus}
          onPlatformChange={setActivePlatform}
          onCategoryChange={setActiveCategory}
          onSourceChange={setActiveSource}
          onStatusChange={setActiveStatus}
        />

        <div className="tool-count">
          Showing <span>{visible.length}</span> of{" "}
          <span>{filtered.length}</span> integrations
        </div>
      </header>

      <main className="grid">
        {visible.length === 0 ? (
          <div className="empty-state">
            <p>No integrations match your filters</p>
            <small>Try a different search or category</small>
          </div>
        ) : (
          visible.map((entry, i) => (
            <ServerCard
              key={entry.name + entry.platform + entry.source}
              server={entry}
              index={i}
            />
          ))
        )}
        {hasMore && <div ref={sentinelRef} className="load-sentinel" />}
      </main>

      <footer className="site-footer">
        <span>Built with Next.js, TypeScript &amp; Tailwind CSS</span>
        <span className="footer-sep">&middot;</span>
        <a
          href="https://modelcontextprotocol.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          MCP Docs
        </a>
        <span className="footer-sep">&middot;</span>
        <a
          href="https://platform.openai.com/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenAI Docs
        </a>
      </footer>
    </div>
  );
}
