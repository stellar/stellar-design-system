import React from "react";

export enum Routes {
  component = "component",
}

export enum ComponentDetailsId {
  assets = "assets",
  branding = "branding",
  buttons = "buttons",
  checkboxes = "checkboxes",
  iconButtons = "iconButtons",
  identicons = "identicons",
  infoBlocks = "infoBlocks",
  inputs = "inputs",
  loaders = "loaders",
  modals = "modals",
  radioButtons = "radioButtons",
  selects = "selects",
  textLinks = "textLinks",
  toggles = "toggles",
  typography = "typography",
}

interface ComponentDetailsList {
  assets: ComponentDetails;
  branding: ComponentDetails;
  buttons: ComponentDetails;
  checkboxes: ComponentDetails;
  iconButtons: ComponentDetails;
  identicons: ComponentDetails;
  infoBlocks: ComponentDetails;
  inputs: ComponentDetails;
  loaders: ComponentDetails;
  modals: ComponentDetails;
  radioButtons: ComponentDetails;
  selects: ComponentDetails;
  textLinks: ComponentDetails;
  toggles: ComponentDetails;
  typography: ComponentDetails;
}

interface ComponentDetails {
  id: ComponentDetailsId;
  title: string;
  description: React.ReactNode;
  examples: ComponentExample[];
  props: ComponentProp[];
  externalProps?: ComponentExternalProps;
  notes?: React.ReactNode[];
  subComponents?: {
    description: string | React.ReactNode;
    components: SubComponent[];
  };
}

interface ComponentExample {
  title: string;
  description: string | undefined;
  component: React.ReactNode[];
  // In cases where we need to provide state and helper methods to preview the
  // component (for example, Modal)
  previewExampleOverride?: React.Element[];
}

interface ComponentProp {
  prop: string;
  type: string[];
  default: string | null;
  optional: boolean;
  description: string | undefined;
}

interface ComponentExternalProps {
  link: string;
  label: string | undefined;
}

interface SubComponent {
  component: string;
  description: string;
  props: ComponentProp[];
}
