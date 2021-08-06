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
  layout = "layout",
  loaders = "loaders",
  modals = "modals",
  navButtons = "navButtons",
  pieProgress = "pieProgress",
  radioButtons = "radioButtons",
  selects = "selects",
  statusBars = "statusBars",
  tags = "tags",
  textLinks = "textLinks",
  toggles = "toggles",
  tooltips = "tooltips",
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
  layout: ComponentDetails;
  loaders: ComponentDetails;
  modals: ComponentDetails;
  navButtons: ComponentDetails;
  pieProgress: ComponentDetails;
  radioButtons: ComponentDetails;
  selects: ComponentDetails;
  statusBars: ComponentDetails;
  tags: ComponentDetails;
  textLinks: ComponentDetails;
  toggles: ComponentDetails;
  tooltips: ComponentDetails;
  typography: ComponentDetails;
}

interface ComponentDetails {
  id: ComponentDetailsId;
  title: string;
  description: React.ReactNode;
  shortDescription: string;
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
  description: string | React.ReactNode | undefined;
  component: React.ReactNode[];
  // In cases where we need to provide state and helper methods to preview the
  // component (for example, Modal)
  previewExampleOverride?: any[];
  useGridLayout?: boolean;
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
  notes?: React.ReactNode[];
}
