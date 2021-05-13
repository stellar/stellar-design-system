import { Branding } from "sections/Branding";
import { Buttons } from "sections/Buttons";
import { IconButtons } from "sections/IconButtons";
import { Loaders } from "sections/Loaders";
import { TextLinks } from "sections/TextLinks";
import { Typography } from "sections/Typography";

import "styles.scss";

export const App = () => (
  <>
    <Typography />
    <Branding />
    <Loaders />
    <Buttons />
    <IconButtons />
    <TextLinks />
  </>
);
