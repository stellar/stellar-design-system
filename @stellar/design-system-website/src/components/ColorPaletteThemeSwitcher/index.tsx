import React, { useState } from "react";
import "./styles.css";
import { Select } from "@stellar/design-system";

export const LOCAL_STORAGE_COLOR_PALETTE_THEME = "sdsColorPaletteTheme";
export const COLOR_PALETTE_THEME_CHANGE_EVENT =
  "sdsColorPaletteThemeChangeEvent";

export const ColorPaletteThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem(LOCAL_STORAGE_COLOR_PALETTE_THEME) || "light",
  );

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = event.target.value;

    localStorage.setItem(LOCAL_STORAGE_COLOR_PALETTE_THEME, newTheme);
    setCurrentTheme(newTheme);

    document.dispatchEvent(
      new CustomEvent(COLOR_PALETTE_THEME_CHANGE_EVENT, {
        bubbles: true,
        detail: { theme: newTheme },
      }),
    );
  };

  return (
    <>
      <p>Selec the color theme below to view color palette for that theme.</p>

      <div className="ColorPaletteThemeSwitcher sds-theme-light">
        <Select
          id="color-palette-theme"
          fieldSize="sm"
          onChange={handleThemeChange}
          value={currentTheme}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </Select>
      </div>
    </>
  );
};
