import React from "react";

export enum Routes {
  component = "component",
}

export enum ComponentDetailsId {
  assetIcons = "assetIcons",
  assets = "assets",
  avatars = "avatars",
  badges = "badges",
  banners = "banners",
  branding = "branding",
  buttons = "buttons",
  cards = "cards",
  checkboxes = "checkboxes",
  copyTexts = "copyTexts",
  iconButtons = "iconButtons",
  inputs = "inputs",
  layout = "layout",
  links = "links",
  loaders = "loaders",
  modals = "modals",
  navButtons = "navButtons",
  notifications = "notifications",
  pagination = "pagination",
  pieProgress = "pieProgress",
  profiles = "profiles",
  radioButtons = "radioButtons",
  selects = "selects",
  tables = "tables",
  textareas = "textareas",
  toggles = "toggles",
  tooltips = "tooltips",
  typography = "typography",
}

export interface ComponentDetailsList {
  assetIcons: ComponentDetails;
  assets: ComponentDetails;
  avatars: ComponentDetails;
  badges: ComponentDetails;
  banners: ComponentDetails;
  branding: ComponentDetails;
  buttons: ComponentDetails;
  cards: ComponentDetails;
  checkboxes: ComponentDetails;
  copyTexts: ComponentDetails;
  iconButtons: ComponentDetails;
  inputs: ComponentDetails;
  layout: ComponentDetails;
  links: ComponentDetails;
  loaders: ComponentDetails;
  modals: ComponentDetails;
  navButtons: ComponentDetails;
  notifications: ComponentDetails;
  pagination: ComponentDetails;
  pieProgress: ComponentDetails;
  profiles: ComponentDetails;
  radioButtons: ComponentDetails;
  selects: ComponentDetails;
  tables: ComponentDetails;
  textareas: ComponentDetails;
  toggles: ComponentDetails;
  tooltips: ComponentDetails;
  typography: ComponentDetails;
}

export interface ComponentDetails {
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

export interface ComponentExample {
  title: string;
  description: string | React.ReactNode | undefined;
  component: React.ReactNode[];
  // In cases where we need to provide state and helper methods to preview the
  // component (for example, Modal)
  previewExampleOverride?: any[];
  useGridLayout?: boolean;
}

export interface ComponentProp {
  prop: string;
  type: string[];
  default: string | null;
  optional: boolean;
  description: string | undefined;
  heading?: string;
}

export interface ComponentExternalProps {
  link: string;
  label: string | undefined;
}

export interface SubComponent {
  component: string;
  description: string;
  props: ComponentProp[];
  notes?: React.ReactNode[];
}
