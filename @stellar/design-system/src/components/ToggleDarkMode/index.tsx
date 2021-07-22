import { useCallback, useEffect, useState } from "react";
import { NavButton } from "../NavButton";
import { Icon } from "../../icons";

export enum ModeValue {
  light = "light-mode",
  dark = "dark-mode",
}

interface ToggleDarkModeProps {
  storageKeyId?: string;
  showBorder?: boolean;
  onToggleEnd?: (isDarkMode: boolean) => void;
}

export const ToggleDarkMode = ({
  storageKeyId,
  showBorder,
  onToggleEnd,
}: ToggleDarkModeProps) => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

  const getCurrentMode = useCallback(() => {
    const modeSaved = storageKeyId ? localStorage.getItem(storageKeyId) : null;

    if (modeSaved) {
      return modeSaved;
    }

    return prefersDarkMode.matches ? ModeValue.dark : ModeValue.light;
  }, [storageKeyId, prefersDarkMode.matches]);

  const [isDarkMode, setIsDarkMode] = useState(
    Boolean(getCurrentMode() === ModeValue.dark),
  );

  // Set theme on page load
  useEffect(() => {
    const currentMode = getCurrentMode();
    const _isDarkMode = Boolean(currentMode === ModeValue.dark);

    setIsDarkMode(_isDarkMode);
  }, [getCurrentMode]);

  // Set body class when value changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove(ModeValue.light);
      document.body.classList.add(ModeValue.dark);
    } else {
      document.body.classList.remove(ModeValue.dark);
      document.body.classList.add(ModeValue.light);
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    const _isDarkMode = !isDarkMode;

    setIsDarkMode(_isDarkMode);

    if (storageKeyId) {
      if (_isDarkMode) {
        localStorage.setItem(storageKeyId, ModeValue.dark);
      } else {
        localStorage.setItem(storageKeyId, ModeValue.light);
      }
    }

    if (onToggleEnd) {
      onToggleEnd(_isDarkMode);
    }
  };

  return (
    <NavButton
      id="dark-mode-toggle"
      title={isDarkMode ? "Activate light mode" : "Activate dark mode"}
      onClick={handleToggle}
      icon={isDarkMode ? <Icon.Sun /> : <Icon.Moon />}
      showBorder={showBorder}
    />
  );
};

ToggleDarkMode.displayName = "ToggleDarkMode";
