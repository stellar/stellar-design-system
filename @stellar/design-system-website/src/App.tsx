import { Layout } from "@stellar/design-system";

import { Assets } from "sections/Assets";
import { Branding } from "sections/Branding";
import { Buttons } from "sections/Buttons";
import { FormElements } from "sections/FormElements";
import { IconButtons } from "sections/IconButtons";
import { Identicons } from "sections/Identicons";
import { InfoBlocks } from "sections/InfoBlocks";
import { Loaders } from "sections/Loaders";
import { Modals } from "sections/Modals";
import { TextLinks } from "sections/TextLinks";
import { Typography } from "sections/Typography";

import "styles.scss";

export const App = () => (
  <>
    {/* TODO: update project link */}
    <Layout.Header
      projectTitle="Design System"
      projectLink="https://www.stellar.org"
    />

    <Layout.Content>
      <Typography />
      <Branding />
      <Identicons />
      <Assets />
      <Loaders />
      <Buttons />
      <IconButtons />
      <TextLinks />
      <InfoBlocks />
      <FormElements />
      <Modals />
    </Layout.Content>

    <Layout.Footer gitHubLink="https://github.com/stellar/stellar-design-system" />
  </>
);
