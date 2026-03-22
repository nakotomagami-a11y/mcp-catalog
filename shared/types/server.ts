export type Platform = "mcp" | "chatgpt";

export interface CatalogEntry {
  name: string;
  url: string;
  description: string;
  category: string;
  tags: string[];
  source: "official" | "official-integration" | "partner" | "community";
  status: "live" | "beta" | "archived" | "deprecated";
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
