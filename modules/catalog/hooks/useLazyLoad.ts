import { useState, useEffect, useRef } from "react";
import { BATCH_SIZE } from "../utils/constants";

export function useLazyLoad<T>(items: T[]) {
  const [count, setCount] = useState(BATCH_SIZE);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setCount(BATCH_SIZE);
  }, [items]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || count >= items.length) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount((c) => Math.min(c + BATCH_SIZE, items.length));
        }
      },
      { rootMargin: "400px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [count, items.length]);

  const visible = items.slice(0, count);
  const hasMore = count < items.length;

  return { visible, hasMore, sentinelRef };
}
