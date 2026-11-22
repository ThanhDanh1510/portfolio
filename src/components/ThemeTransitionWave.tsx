"use client";

import React, { createContext, useContext, useCallback } from "react";
import { useTheme } from "next-themes";

interface ThemeTransitionContextType {
  triggerThemeTransition: (centerX: number, centerY: number) => void;
}

const ThemeTransitionContext = createContext<ThemeTransitionContextType>({
  triggerThemeTransition: () => {},
});

export const useThemeTransition = () => useContext(ThemeTransitionContext);

export function ThemeTransitionProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const triggerThemeTransition = useCallback(
    (centerX: number, centerY: number) => {
      const currentTheme = resolvedTheme || theme || "dark";
      const targetTheme = currentTheme === "dark" ? "light" : "dark";

      // Maximum distance from center to the furthest viewport corner
      const maxRadius = Math.hypot(
        Math.max(centerX, window.innerWidth - centerX),
        Math.max(centerY, window.innerHeight - centerY)
      );

      // Fallback for browsers that do not support View Transitions API
      if (!document.startViewTransition) {
        setTheme(targetTheme);
        return;
      }

      // Start view transition with synchronous DOM class update so the new snapshot has new theme styles
      const transition = document.startViewTransition(() => {
        if (targetTheme === "dark") {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add("light");
        }
        setTheme(targetTheme);
      });

      // Animate the incoming (new) theme view expanding outward in a perfect borderless circle
      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${centerX}px ${centerY}px)`,
              `circle(${maxRadius}px at ${centerX}px ${centerY}px)`,
            ],
          },
          {
            duration: 1250,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    },
    [resolvedTheme, theme, setTheme]
  );

  return (
    <ThemeTransitionContext.Provider value={{ triggerThemeTransition }}>
      {children}
    </ThemeTransitionContext.Provider>
  );
}
