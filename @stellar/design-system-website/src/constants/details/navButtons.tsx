import { NavButton, Icon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const navButtons: ComponentDetails = {
  id: ComponentDetailsId.navButtons,
  title: "Navigation buttons",
  description: (
    <>
      <code>NavButton</code> is used to trigger actions like toggle dark and
      light mode, close a modal, and toggle side navigation. It is similar to{" "}
      <code>IconButton</code> but the styling is different.
    </>
  ),
  shortDescription:
    "Used to trigger actions like toggle dark mode, close a modal, etc.",
  examples: [
    {
      title: "Menu",
      description: "",
      component: [
        <NavButton
          id="nav-button-menu-1"
          title="Menu"
          onClick={() => {
            // do nothing
          }}
          icon={<Icon.Menu />}
        />,
        <NavButton
          id="nav-button-menu-2"
          title="Menu"
          onClick={() => {
            // do nothing
          }}
          icon={<Icon.Menu />}
          showBorder
        />,
      ],
    },
    {
      title: "Close",
      description: "",
      component: [
        <NavButton
          id="nav-button-close-1"
          title="Close"
          onClick={() => {
            // do nothing
          }}
          icon={<Icon.Close />}
        />,
        <NavButton
          id="nav-button-close-2"
          title="Close"
          onClick={() => {
            // do nothing
          }}
          icon={<Icon.Close />}
          showBorder
        />,
      ],
    },
    {
      title: "Dark mode",
      description: "",
      component: [
        <NavButton
          id="nav-button-dark-1"
          title="Dark mode"
          onClick={() => {
            // do nothing
          }}
          icon={<Icon.ModeDark />}
        />,
        <NavButton
          id="nav-button-dark-2"
          title="Dark mode"
          onClick={() => {
            // do nothing
          }}
          icon={<Icon.ModeDark />}
          showBorder
        />,
      ],
    },
  ],
  props: [
    {
      prop: "id",
      type: ["string"],
      default: null,
      optional: false,
      description: "ID of the component should be unique",
    },
    {
      prop: "title",
      type: ["string"],
      default: null,
      optional: false,
      description: "Title or label to show on hover",
    },
    {
      prop: "onClick",
      type: ["() => void"],
      default: null,
      optional: false,
      description: "Action to trigger on click",
    },
    {
      prop: "icon",
      type: ["React.ReactNode"],
      default: null,
      optional: false,
      description: "Icon of the component",
    },
    {
      prop: "disabled",
      type: ["boolean"],
      default: "",
      optional: true,
      description: "Disable the component",
    },
    {
      prop: "showBorder",
      type: ["boolean"],
      default: "",
      optional: true,
      description: "Show border around the component",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
