import React, { useCallback, useEffect, useState } from "react";
import { Toggle } from "../Toggle";
import { Icon } from "../../icons";

export enum ThemeMode {
  LIGHT = "sds-theme-light",
  DARK = "sds-theme-dark",
}

interface ThemeSwitchProps {
  storageKeyId?: string;
  onActionEnd?: (isDarkMode: boolean) => void;
  disableSetThemeOnLoad?: boolean;
}

export const ThemeSwitch = ({
  storageKeyId,
  onActionEnd,
  disableSetThemeOnLoad,
}: ThemeSwitchProps): React.ReactElement => {
  const isBrowser =
    typeof window !== "undefined" && typeof localStorage !== "undefined";
  const prefersDarkMode = isBrowser
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : undefined;

  const getCurrentMode = useCallback(() => {
    const modeSaved =
      isBrowser && storageKeyId ? localStorage.getItem(storageKeyId) : null;

    if (modeSaved) {
      return modeSaved;
    }

    return prefersDarkMode?.matches ? ThemeMode.DARK : ThemeMode.LIGHT;
  }, [storageKeyId, prefersDarkMode?.matches, isBrowser]);

  const [isDarkMode, setIsDarkMode] = useState(
    Boolean(getCurrentMode() === ThemeMode.DARK),
  );

  // Set theme on page load
  useEffect(() => {
    if (disableSetThemeOnLoad) {
      return;
    }

    const currentMode = getCurrentMode();
    const _isDarkMode = Boolean(currentMode === ThemeMode.DARK);

    setIsDarkMode(_isDarkMode);
  }, [disableSetThemeOnLoad, getCurrentMode]);

  // Set body class when value changes
  useEffect(() => {
    if (disableSetThemeOnLoad) {
      return;
    }

    if (isDarkMode) {
      document.body.classList.remove(ThemeMode.LIGHT);
      document.body.classList.add(ThemeMode.DARK);
      document.body.setAttribute("data-sds-theme", ThemeMode.DARK);
    } else {
      document.body.classList.remove(ThemeMode.DARK);
      document.body.classList.add(ThemeMode.LIGHT);
      document.body.setAttribute("data-sds-theme", ThemeMode.LIGHT);
    }
  }, [disableSetThemeOnLoad, isDarkMode]);

  const handleSwitch = () => {
    const _isDarkMode = !isDarkMode;

    setIsDarkMode(_isDarkMode);

    if (isBrowser && storageKeyId) {
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
    <Toggle
      id="theme-switch"
      fieldSize="md"
      checked={isDarkMode}
      onChange={handleSwitch}
      title={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
      iconChecked={<Icon.Moon01 />}
      iconUnchecked={<Icon.Sun />}
    />
  );
};

ThemeSwitch.displayName = "ThemeSwitch";
