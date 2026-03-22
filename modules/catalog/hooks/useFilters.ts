import { useState, useMemo } from "react";
import type { CatalogEntry, Platform } from "@shared/types";

export function useFilters(entries: CatalogEntry[]) {
  const [activePlatform, setActivePlatform] = useState<Platform | "all">("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSource, setActiveSource] = useState("all");
  const [activeStatus, setActiveStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return entries.filter((e) => {
      if (activePlatform !== "all" && e.platform !== activePlatform) return false;
      if (activeCategory !== "all" && e.category !== activeCategory) return false;
      if (activeSource !== "all" && e.source !== activeSource) return false;
      if (activeStatus !== "all" && e.status !== activeStatus) return false;
      if (searchQuery) {
        const haystack = (
          e.name + " " + e.description + " " + e.tags.join(" ") + " " + e.category
        ).toLowerCase();
        if (!haystack.includes(searchQuery)) return false;
      }
      return true;
    });
  }, [entries, activePlatform, activeCategory, activeSource, activeStatus, searchQuery]);

  return {
    filtered,
    activePlatform,
    setActivePlatform,
    activeCategory,
    setActiveCategory,
    activeSource,
    setActiveSource,
    activeStatus,
    setActiveStatus,
    searchQuery,
    setSearchQuery,
  };
}
