export type Platform = "mcp" | "chatgpt" | "qwen" | "llama" | "gemini" | "copilot";

export interface CatalogEntry {
  name: string;
  url: string;
  description: string;
  category: string;
  tags: string[];
  source: "official" | "official-integration" | "partner" | "community";
  status: "live" | "beta" | "archived" | "deprecated" | "coming-soon";
  platform: Platform;
}

export interface Category {
  id: string;
  label: string;
  color: string;
  icon: string;
}

export interface CatalogData {
  categories: Category[];
  entries: CatalogEntry[];
}
