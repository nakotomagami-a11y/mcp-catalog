import { useCallback, useRef } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const timerRef = useRef<NodeJS.Timeout>(undefined);

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        onSearch(e.target.value.toLowerCase().trim());
      }, 150);
    },
    [onSearch]
  );

  return (
    <div className="search-wrap">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        className="search-input"
        placeholder="Search servers, tags, or descriptions..."
        autoComplete="off"
        onChange={handleInput}
      />
      <span className="search-hint">MCP</span>
    </div>
  );
}
