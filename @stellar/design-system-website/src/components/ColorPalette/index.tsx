import React, { useEffect, useState } from "react";
import {
  COLOR_PALETTE_THEME_CHANGE_EVENT,
  LOCAL_STORAGE_COLOR_PALETTE_THEME,
  isBrowser,
} from "../ColorPaletteThemeSwitcher";
import "./styles.css";

export const ColorPalette = ({
  colors,
}: {
  colors: {
    hex: { light: string; dark: string };
    variable: string;
    name: string;
  }[];
}) => {
  const [theme, setTheme] = useState<string>(
    isBrowser
      ? localStorage.getItem(LOCAL_STORAGE_COLOR_PALETTE_THEME) || "light"
      : null,
  );

  useEffect(() => {
    const onStorageChange = (event: any) => {
      setTheme(event.detail.theme || "light");
    };

    addEventListener(COLOR_PALETTE_THEME_CHANGE_EVENT, onStorageChange);

    return () => {
      removeEventListener(COLOR_PALETTE_THEME_CHANGE_EVENT, onStorageChange);
    };
  }, []);

  const renderColor = (color: string) => {
    if (color.startsWith("rgba")) {
      // Turn RGBA opacity into %
      const opacity = color
        .match(/\((.*?)\)/)[1]
        .split(",")[3]
        .trim();

      return `${Number(opacity) * 100}%`;
    }

    return color;
  };

  if (!theme) {
    return null;
  }

  return (
    <div className="ColorPalette">
      {colors.map((c) => (
        <div className="ColorPalette__color" key={c.hex[theme]}>
          <div
            className="ColorPalette__color__box"
            style={
              {
                "--ColorPalette-color": c.hex[theme],
              } as React.CSSProperties
            }
          ></div>
          <div className="ColorPalette__color__name">{c.name}</div>
          <div className="ColorPalette__color__hex">
            {renderColor(c.hex[theme])}
          </div>
        </div>
      ))}
    </div>
  );
};
