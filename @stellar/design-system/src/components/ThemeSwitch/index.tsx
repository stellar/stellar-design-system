import { useCallback, useEffect, useState } from "react";
import { Icon } from "../../icons";

import "./styles.scss";

export enum ThemeMode {
  LIGHT = "sds-theme-light",
  DARK = "sds-theme-dark",
}

interface ThemeSwitchProps {
  storageKeyId?: string;
  onActionEnd?: (isDarkMode: boolean) => void;
}

export const ThemeSwitch = ({
  storageKeyId,
  onActionEnd,
}: ThemeSwitchProps) => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

  const getCurrentMode = useCallback(() => {
    const modeSaved = storageKeyId ? localStorage.getItem(storageKeyId) : null;

    if (modeSaved) {
      return modeSaved;
    }

    return prefersDarkMode.matches ? ThemeMode.DARK : ThemeMode.LIGHT;
  }, [storageKeyId, prefersDarkMode.matches]);

  const [isDarkMode, setIsDarkMode] = useState(
    Boolean(getCurrentMode() === ThemeMode.DARK),
  );

  // Set theme on page load
  useEffect(() => {
    const currentMode = getCurrentMode();
    const _isDarkMode = Boolean(currentMode === ThemeMode.DARK);

    setIsDarkMode(_isDarkMode);
  }, [getCurrentMode]);

  // Set body class when value changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove(ThemeMode.LIGHT);
      document.body.classList.add(ThemeMode.DARK);
    } else {
      document.body.classList.remove(ThemeMode.DARK);
      document.body.classList.add(ThemeMode.LIGHT);
    }
  }, [isDarkMode]);

  const handleSwitch = () => {
    const _isDarkMode = !isDarkMode;

    setIsDarkMode(_isDarkMode);

    if (storageKeyId) {
      if (_isDarkMode) {
        localStorage.setItem(storageKeyId, ThemeMode.DARK);
      } else {
        localStorage.setItem(storageKeyId, ThemeMode.LIGHT);
      }
    }

    if (onActionEnd) {
      onActionEnd(_isDarkMode);
    }
  };

  return (
    <label
      className="ThemeSwitch"
      htmlFor="theme-switch"
      title={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
    >
      <input
        type="checkbox"
        id="theme-switch"
        name="theme-switch"
        checked={isDarkMode}
        onChange={handleSwitch}
      />
      <div aria-hidden="true" className="ThemeSwitch__track" />
      <div aria-hidden="true" className="ThemeSwitch__thumb">
        <div className="ThemeSwitch__thumb__icon" data-mode={ThemeMode.DARK}>
          <Icon.ModeDark />
        </div>
        <div className="ThemeSwitch__thumb__icon" data-mode={ThemeMode.LIGHT}>
          <Icon.ModeLight />
        </div>
      </div>
    </label>
  );
};

ThemeSwitch.displayName = "ThemeSwitch";
