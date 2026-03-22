import { useCallback, useRef } from "react";
import { TILT_MAX, TILT_SCALE } from "../utils/constants";

export function useTilt<T extends HTMLElement>() {
  const rafRef = useRef<number>(0);
  const elRef = useRef<T | null>(null);

  const setRef = useCallback((node: T | null) => {
    if (elRef.current) {
      elRef.current.removeEventListener("mousemove", handleMove);
      elRef.current.removeEventListener("mouseenter", handleEnter);
      elRef.current.removeEventListener("mouseleave", handleLeave);
      elRef.current.removeEventListener("animationend", handleAnimEnd);
    }
    elRef.current = node;
    if (!node) return;

    node.addEventListener("animationend", handleAnimEnd, { once: true });
    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseenter", handleEnter);
    node.addEventListener("mouseleave", handleLeave);
  }, []);

  function handleAnimEnd() {
    if (elRef.current) elRef.current.style.animation = "none";
  }

  function handleMove(e: MouseEvent) {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const el = elRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotY = (x - 0.5) * TILT_MAX;
      const rotX = (0.5 - y) * TILT_MAX;
      el.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${TILT_SCALE},${TILT_SCALE},${TILT_SCALE})`;
    });
  }

  function handleEnter() {
    if (elRef.current) {
      elRef.current.style.transition =
        "transform 0.15s ease-out, border-color 0.3s";
    }
  }

  function handleLeave() {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (elRef.current) {
      elRef.current.style.transition =
        "transform 0.5s cubic-bezier(.22,.68,0,1.2), border-color 0.3s";
      elRef.current.style.transform =
        "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    }
  }

  return setRef;
}
