import React from "react";

export enum Routes {
  component = "component",
}

export enum ComponentDetailsId {
  assets = "assets",
  branding = "branding",
  buttons = "buttons",
  formElements = "formElements",
  iconButtons = "iconButtons",
  identicons = "identicons",
  infoBlocks = "infoBlocks",
  loaders = "loaders",
  modals = "modals",
  textLinks = "textLinks",
  typography = "typography",
}

// TODO: update when details are added
interface ComponentDetailsList {
  assets: ComponentDetails | undefined;
  branding: ComponentDetails | undefined;
  buttons: ComponentDetails;
  formElements: ComponentDetails | undefined;
  iconButtons: ComponentDetails | undefined;
  identicons: ComponentDetails | undefined;
  infoBlocks: ComponentDetails | undefined;
  loaders: ComponentDetails | undefined;
  modals: ComponentDetails | undefined;
  textLinks: ComponentDetails | undefined;
  typography: ComponentDetails | undefined;
}

interface ComponentDetails {
  id: ComponentDetailsId;
  title: string;
  description: React.ReactNode;
  examples: ComponentExample[];
  props: ComponentProp[];
  externalProps?: ComponentExternalProps;
}

interface ComponentExample {
  title: string;
  description: string | undefined;
  component: React.ReactNode[];
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
