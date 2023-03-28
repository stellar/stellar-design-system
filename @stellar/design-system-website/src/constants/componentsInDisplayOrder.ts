import { ComponentDetailsId } from "types/types";

interface ComponentsInDisplayOrder {
  id: ComponentDetailsId;
  label: string;
}

export const componentsInDisplayOrder: ComponentsInDisplayOrder[] = [
  {
    id: ComponentDetailsId.typography,
    label: "Typography",
  },
  {
    id: ComponentDetailsId.branding,
    label: "Branding",
  },
  {
    id: ComponentDetailsId.assets,
    label: "Assets",
  },
  {
    id: ComponentDetailsId.avatars,
    label: "Avatars",
  },
  {
    id: ComponentDetailsId.profiles,
    label: "Profiles",
  },
  {
    id: ComponentDetailsId.assetIcons,
    label: "Asset icons",
  },
  {
    id: ComponentDetailsId.loaders,
    label: "Loaders",
  },
  {
    id: ComponentDetailsId.notifications,
    label: "Notifications",
  },
  {
    id: ComponentDetailsId.banners,
    label: "Banners",
  },
  {
    id: ComponentDetailsId.buttons,
    label: "Buttons",
  },
  {
    id: ComponentDetailsId.iconButtons,
    label: "Icon buttons",
  },
  {
    id: ComponentDetailsId.navButtons,
    label: "Navigation buttons",
  },
  {
    id: ComponentDetailsId.links,
    label: "Links",
  },
  {
    id: ComponentDetailsId.inputs,
    label: "Inputs",
  },
  {
    id: ComponentDetailsId.selects,
    label: "Selects",
  },
  {
    id: ComponentDetailsId.textareas,
    label: "Textareas",
  },
  {
    id: ComponentDetailsId.checkboxes,
    label: "Checkboxes",
  },
  {
    id: ComponentDetailsId.radioButtons,
    label: "Radio buttons",
  },
  {
    id: ComponentDetailsId.toggles,
    label: "Toggles",
  },
  {
    id: ComponentDetailsId.badges,
    label: "Badges",
  },
  {
    id: ComponentDetailsId.modals,
    label: "Modals",
  },
  {
    id: ComponentDetailsId.cards,
    label: "Cards",
  },
  {
    id: ComponentDetailsId.layout,
    label: "Layout",
  },
  {
    id: ComponentDetailsId.tables,
    label: "Tables",
  },
  {
    id: ComponentDetailsId.pagination,
    label: "Pagination",
  },
  {
    id: ComponentDetailsId.pieProgress,
    label: "Pie progress",
  },
  {
    id: ComponentDetailsId.tooltips,
    label: "Tooltips",
  },
  {
    id: ComponentDetailsId.copyTexts,
    label: "Copy text",
  },
];
