import { Assets } from "sections/Assets";
import { Branding } from "sections/Branding";
import { Buttons } from "sections/Buttons";
import { FormElements } from "sections/FormElements";
import { IconButtons } from "sections/IconButtons";
import { InfoBlocks } from "sections/InfoBlocks";
import { Loaders } from "sections/Loaders";
import { TextLinks } from "sections/TextLinks";
import { Typography } from "sections/Typography";

import "styles.scss";

export const App = () => (
  <>
    <Typography />
    <Branding />
    <Assets />
    <Loaders />
    <Buttons />
    <IconButtons />
    <TextLinks />
    <InfoBlocks />
    <FormElements />
  </>
);
