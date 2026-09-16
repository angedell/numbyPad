import { useCallback, useEffect, useState } from "react";
import { accentThemes, defaultAccentKey, accentStorageKey } from "../data/content.js";

function applyTheme(theme) {
  const root = document.documentElement;
  root.style.setProperty("--brand", theme.hex);
  root.style.setProperty("--brand-fg", theme.fg);
}

function readStoredKey() {
  try {
    return window.localStorage.getItem(accentStorageKey);
  } catch {
    return null;
  }
}

export function useAccentTheme() {
  const [accentKey, setAccentKey] = useState(defaultAccentKey);

  useEffect(() => {
    const stored = readStoredKey();
    const key = accentThemes.some((t) => t.key === stored) ? stored : defaultAccentKey;
    setAccentKey(key);
    applyTheme(accentThemes.find((t) => t.key === key));
  }, []);

  const setAccent = useCallback((key) => {
    const theme = accentThemes.find((t) => t.key === key);
    if (!theme) return;
    setAccentKey(key);
    applyTheme(theme);
    try {
      window.localStorage.setItem(accentStorageKey, key);
    } catch {
      // private browsing / storage disabled — accent just won't persist
    }
  }, []);

  return { accentKey, setAccent };
}
