import type { Platform } from "@shared/types";
import { CATEGORIES, SOURCE_OPTIONS, STATUS_OPTIONS } from "@shared/config";

interface FilterBarProps {
  activePlatform: Platform | "all";
  activeCategory: string;
  activeSource: string;
  activeStatus: string;
  onPlatformChange: (id: Platform | "all") => void;
  onCategoryChange: (id: string) => void;
  onSourceChange: (id: string) => void;
  onStatusChange: (id: string) => void;
}

const PLATFORMS: { id: Platform | "all"; label: string; icon: string }[] = [
  { id: "all", label: "All", icon: "*" },
  { id: "mcp", label: "Claude", icon: ">" },
  { id: "chatgpt", label: "ChatGPT", icon: "#" },
  { id: "qwen", label: "Qwen", icon: "Q" },
  { id: "llama", label: "LLaMA", icon: "L" },
  { id: "gemini", label: "Gemini", icon: "G" },
  { id: "copilot", label: "Copilot", icon: "C" },
];

export function FilterBar({
  activePlatform,
  activeCategory,
  activeSource,
  activeStatus,
  onPlatformChange,
  onCategoryChange,
  onSourceChange,
  onStatusChange,
}: FilterBarProps) {
  return (
    <div className="filters">
      <div className="filter-row filter-row-platform">
        {PLATFORMS.map((p) => (
          <button
            key={p.id}
            className={`platform-btn${activePlatform === p.id ? " active" : ""}`}
            data-platform={p.id}
            onClick={() => onPlatformChange(p.id)}
          >
            <span className="platform-icon">{p.icon}</span>
            {p.label}
          </button>
        ))}
      </div>

      <div className="filter-row filter-row-categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn${activeCategory === cat.id ? " active" : ""}`}
            style={{ "--active-color": cat.color } as React.CSSProperties}
            onClick={() => onCategoryChange(cat.id)}
          >
            <span className="filter-icon">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      <div className="filter-row filter-row-secondary">
        {SOURCE_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            className={`filter-btn filter-btn-source${activeSource === opt.id ? " active" : ""}`}
            data-source={opt.id}
            onClick={() => onSourceChange(opt.id)}
          >
            {opt.label}
          </button>
        ))}
        <span className="filter-divider" />
        {STATUS_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            className={`filter-btn filter-btn-status${activeStatus === opt.id ? " active" : ""}`}
            data-status={opt.id}
            onClick={() => onStatusChange(opt.id)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
