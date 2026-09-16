import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { accentThemes } from "../data/content.js";
import { useAccentTheme } from "../hooks/useAccentTheme.js";
import styles from "./ThemeSwitcher.module.css";

export default function ThemeSwitcher() {
  const { accentKey, setAccent } = useAccentTheme();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    }
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const current = accentThemes.find((t) => t.key === accentKey);

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        type="button"
        className={styles.trigger}
        style={{ background: current?.hex }}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`Accent color: ${current?.name ?? "Default"}. Change accent color`}
        onClick={() => setOpen((v) => !v)}
      />
      {open && (
        <div className={styles.panel} role="menu" aria-label="Accent color">
          <div className={styles.panelLabel}>Accent color, just like in the app</div>
          <div className={styles.grid}>
            {accentThemes.map((theme) => (
              <button
                key={theme.key}
                type="button"
                role="menuitemradio"
                aria-checked={theme.key === accentKey}
                title={theme.name}
                className={styles.swatch}
                style={{ background: theme.hex }}
                onClick={() => {
                  setAccent(theme.key);
                  setOpen(false);
                }}
              >
                {theme.key === accentKey && (
                  <span className={styles.swatchCheck} style={{ color: theme.fg }} aria-hidden="true">
                    <Check size={13} strokeWidth={3} />
                  </span>
                )}
                <span className="visually-hidden">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
