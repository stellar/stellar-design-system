// eslint-disable-next-line import/no-unresolved
import MDXComponents from "@theme-original/MDXComponents";
import { ComponentDescription } from "@site/src/components/ComponentDescription";
import { ComponentProps } from "@site/src/components/ComponentProps";
import { PreviewBlock } from "@site/src/components/PreviewBlock";
import { AssetPreview } from "@site/src/components/AssetPreview";
import { ColorPalette } from "@site/src/components/ColorPalette";
import { ColorPaletteThemeSwitcher } from "@site/src/components/ColorPaletteThemeSwitcher";

export default {
  ...MDXComponents,
  ComponentDescription,
  ComponentProps,
  PreviewBlock,
  AssetPreview,
  ColorPalette,
  ColorPaletteThemeSwitcher,
};
