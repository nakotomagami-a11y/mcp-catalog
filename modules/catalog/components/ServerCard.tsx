import type { CatalogEntry } from "@shared/types";
import { CATEGORIES, accentMap, SOURCE_COLORS, STATUS_COLORS } from "@shared/config";
import { useTilt } from "../hooks/useTilt";

interface ServerCardProps {
  server: CatalogEntry;
  index: number;
}

const SOURCE_LABELS: Record<string, string> = {
  official: "Official",
  "official-integration": "Vendor",
  partner: "Partner",
  community: "Community",
};

const PLATFORM_LABELS: Record<string, string> = {
  mcp: "Claude",
  chatgpt: "GPT",
  qwen: "Qwen",
  llama: "LLaMA",
  gemini: "Gemini",
  copilot: "Copilot",
};

export function ServerCard({ server, index }: ServerCardProps) {
  const tiltRef = useTilt<HTMLDivElement>();
  const accent = accentMap[server.category] || accentMap.all;
  const catLabel =
    CATEGORIES.find((c) => c.id === server.category)?.label || server.category;
  const sourceColor = SOURCE_COLORS[server.source] || "#71717a";
  const statusColor = STATUS_COLORS[server.status] || "#71717a";

  return (
    <div
      ref={tiltRef}
      className="card"
      style={
        {
          "--card-accent": accent,
          animationDelay: Math.min(index * 0.03, 0.5) + "s",
        } as React.CSSProperties
      }
    >
      <div className="card-accent-line" style={{ background: accent }} />

      <div className="card-header">
        <div className="card-name-row">
          <span className={`platform-pill platform-${server.platform}`}>
            {PLATFORM_LABELS[server.platform]}
          </span>
          <span className="card-name">{server.name}</span>
        </div>
        <div className="card-badges">
          <span
            className="badge badge-source"
            style={
              {
                "--badge-color": sourceColor,
              } as React.CSSProperties
            }
          >
            {SOURCE_LABELS[server.source] || server.source}
          </span>
          {server.status !== "live" && (
            <span
              className="badge badge-status"
              style={
                {
                  "--badge-color": statusColor,
                } as React.CSSProperties
              }
            >
              {server.status}
            </span>
          )}
        </div>
      </div>

      <p className="card-desc">{server.description}</p>

      <div className="card-tags">
        {server.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="card-footer">
        <span className="card-category" style={{ color: accent }}>
          {catLabel}
        </span>
        <a
          href={server.url}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-btn"
        >
          <span>View</span>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 3h7v7" />
            <path d="M13 3L6 10" />
            <path d="M3 7v6h6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
