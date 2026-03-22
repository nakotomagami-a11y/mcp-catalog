import type { Category } from "../types";

export const CATEGORIES: Category[] = [
  { id: "all", label: "All", color: "#06d6a0", icon: "+" },
  { id: "official", label: "Official", color: "#d4a373", icon: "S" },
  { id: "developer-tools", label: "Developer Tools", color: "#06d6a0", icon: "{}" },
  { id: "databases", label: "Databases", color: "#118ab2", icon: "DB" },
  { id: "cloud", label: "Cloud & Infra", color: "#7209b7", icon: "C" },
  { id: "creative", label: "Creative & Design", color: "#f72585", icon: "A" },
  { id: "game-engines", label: "Game Engines", color: "#ff6b35", icon: "G" },
  { id: "ai-ml", label: "AI & ML", color: "#4cc9f0", icon: "AI" },
  { id: "productivity", label: "Productivity", color: "#ffd166", icon: "P" },
  { id: "communication", label: "Communication", color: "#06d6a0", icon: "@" },
  { id: "commerce", label: "Commerce & Finance", color: "#ef476f", icon: "$" },
  { id: "search-web", label: "Search & Web", color: "#3a86a7", icon: "?" },
  { id: "platforms", label: "Platforms", color: "#8338ec", icon: "~" },
  { id: "science", label: "Science & IoT", color: "#3a86a7", icon: "!" },
  { id: "writing", label: "Writing & Content", color: "#9b5de5", icon: "W" },
  { id: "education", label: "Education", color: "#2ec4b6", icon: "E" },
  { id: "registries", label: "Registries", color: "#9b5de5", icon: "#" },
];

export const SOURCE_OPTIONS = [
  { id: "all", label: "All Sources" },
  { id: "official", label: "Official" },
  { id: "official-integration", label: "Vendor" },
  { id: "partner", label: "Partner" },
  { id: "community", label: "Community" },
];

export const STATUS_OPTIONS = [
  { id: "all", label: "All Status" },
  { id: "live", label: "Live" },
  { id: "beta", label: "Beta" },
  { id: "archived", label: "Archived" },
  { id: "deprecated", label: "Deprecated" },
  { id: "coming-soon", label: "Coming Soon" },
];

export const accentMap: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.color])
);

export const SOURCE_COLORS: Record<string, string> = {
  official: "#d4a373",
  "official-integration": "#06d6a0",
  partner: "#06d6a0",
  community: "#4cc9f0",
};

export const STATUS_COLORS: Record<string, string> = {
  live: "#06d6a0",
  beta: "#ffd166",
  archived: "#71717a",
  deprecated: "#71717a",
  "coming-soon": "#8338ec",
};
