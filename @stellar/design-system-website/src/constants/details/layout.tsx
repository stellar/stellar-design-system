import { Layout } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const layout: ComponentDetails = {
  id: ComponentDetailsId.layout,
  title: "Layout",
  description: (
    <>
      Use <code>Layout</code> component’s sub-components, such as{" "}
      <code>Inset</code>, <code>Header</code>, and <code>Footer</code>, to build
      page layouts.
    </>
  ),
  shortDescription: "Elements to build page layouts",
  examples: [
    {
      title: "Default header",
      description: "",
      component: [
        <Layout.Header projectTitle="Design System" hasDarkModeToggle />,
      ],
    },
    {
      title: "Default footer",
      description: "",
      component: [<Layout.Footer />],
    },
    {
      title: "Content with Inset",
      description: "",
      component: [
        <Layout.Content>
          <Layout.Inset>Content</Layout.Inset>
        </Layout.Content>,
      ],
    },
  ],
  props: [],
  subComponents: {
    description: "",
    components: [
      {
        component: "Inset",
        description:
          "Inset defines width/max-width and horizontal margins. It is used in upper level block/section components to have consistent horizontal styling.",
        props: [
          {
            prop: "children",
            type: ["ReactNode"],
            default: null,
            optional: false,
            description: "Content of the component",
          },
        ],
      },
      {
        component: "Content",
        description:
          "Page level content of the website (all other content goes in here). It is on the same level as header and footer.",
        props: [
          {
            prop: "children",
            type: ["ReactNode"],
            default: null,
            optional: false,
            description: "Content of the component",
          },
        ],
      },
      {
        component: "Header",
        description: "Header of the website.",
        props: [
          {
            prop: "projectTitle",
            type: ["string"],
            default: null,
            optional: false,
            description: "Name of the project",
          },
          {
            prop: "projectLink",
            type: ["string"],
            default: null,
            optional: true,
            description: "Link of the project",
          },
          {
            prop: "hasDarkModeToggle",
            type: ["boolean"],
            default: null,
            optional: true,
            description: "Show theme toggle button",
          },
          {
            prop: "onDarkModeToggleEnd",
            type: ["(isDarkMode: boolean) => void"],
            default: null,
            optional: true,
            description: "Function to call at the end of the toggle event",
          },
          {
            prop: "onSignOut",
            type: ["() => void"],
            default: null,
            optional: true,
            description: "Show sign out link if function is provided",
          },
          {
            prop: "showButtonBorder",
            type: ["boolean"],
            default: null,
            optional: true,
            description: "Show border around navigation buttons",
          },
          {
            prop: "contentCenter",
            type: ["ReactElement"],
            default: null,
            optional: true,
            description: "Custom content in the middle",
          },
          {
            prop: "contentRight",
            type: ["ReactElement"],
            default: null,
            optional: true,
            description: "Custom content on the right",
          },
          {
            prop: "menu",
            type: ["{ isEnabled: boolean; onOpen: () => void; }"],
            default: null,
            optional: true,
            description: "Show burger menu icon",
          },
        ],
      },
      {
        component: "Footer",
        description: "Footer of the website.",
        props: [
          {
            prop: "hideLegalLinks",
            type: ["boolean"],
            default: null,
            optional: true,
            description: "Hide legal links",
          },
          {
            prop: "hideTopBorder",
            type: ["boolean"],
            default: null,
            optional: true,
            description: "Hide top border",
          },
          {
            prop: "gitHubLink",
            type: ["string"],
            default: null,
            optional: true,
            description: "Link to GitHub repo",
          },
          {
            prop: "gitHubLabel",
            type: ["string"],
            default: null,
            optional: true,
            description: "Title/label of GitHub link (visible on hover)",
          },
          {
            prop: "marginTop",
            type: ["string"],
            default: null,
            optional: true,
            description: "Set custom margin top",
          },
          {
            prop: "children",
            type: ["ReactNode"],
            default: null,
            optional: true,
            description: "Custom content in the footer",
          },
        ],
      },
    ],
  },
  externalProps: {
    link: "",
    label: "",
  },
};
