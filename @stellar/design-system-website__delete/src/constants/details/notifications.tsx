import { Icon, Notification } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const notifications: ComponentDetails = {
  id: ComponentDetailsId.notifications,
  title: "Notifications",
  description: (
    <>
      Use notification to draw user attention. There are five variants{" "}
      <code>primary</code>, <code>secondary</code>, <code>success</code>,{" "}
      <code>error</code>, and <code>warning</code>.
    </>
  ),
  shortDescription: "Use notification to draw user attention",
  examples: [
    {
      title: "Primary",
      description: "",
      component: [
        <Notification
          variant="primary"
          title="Lorem ipsum dolor sit"
        ></Notification>,
        <Notification
          variant="primary"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
        ></Notification>,
        <Notification variant="primary" title="Lorem ipsum dolor sit">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          asperiores autem excepturi doloremque esse, dicta sunt soluta! Quia
          quis eos beatae et optio facere voluptatum. Labore illum molestiae
          corporis id?
        </Notification>,
        <Notification
          variant="primary"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          asperiores autem excepturi doloremque esse, dicta sunt soluta! Quia
          quis eos beatae et optio facere voluptatum. Labore illum molestiae
          corporis id?
        </Notification>,
      ],
    },
    {
      title: "Secondary",
      description: "",
      component: [
        <Notification
          variant="secondary"
          title="Lorem ipsum dolor sit"
        ></Notification>,
        <Notification
          variant="secondary"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
        ></Notification>,
        <Notification variant="secondary" title="Lorem ipsum dolor sit">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          asperiores autem excepturi doloremque esse, dicta sunt soluta! Quia
          quis eos beatae et optio facere voluptatum. Labore illum molestiae
          corporis id?
        </Notification>,
        <Notification
          variant="secondary"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          asperiores autem excepturi doloremque esse, dicta sunt soluta! Quia
          quis eos beatae et optio facere voluptatum. Labore illum molestiae
          corporis id?
        </Notification>,
      ],
    },
    {
      title: "Success",
      description: "",
      component: [
        <Notification
          variant="success"
          title="Lorem ipsum dolor sit"
        ></Notification>,
        <Notification
          variant="success"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
        ></Notification>,
        <Notification
          variant="success"
          title="Lorem ipsum dolor sit"
          icon={<Icon.CheckCircle />}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          asperiores autem excepturi doloremque esse, dicta sunt soluta! Quia
          quis eos beatae et optio facere voluptatum. Labore illum molestiae
          corporis id?
        </Notification>,
        <Notification
          variant="success"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
          icon={<Icon.CheckCircle />}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          asperiores autem excepturi doloremque esse, dicta sunt soluta! Quia
          quis eos beatae et optio facere voluptatum. Labore illum molestiae
          corporis id?
        </Notification>,
      ],
    },
    {
      title: "Error",
      description: "",
      component: [
        <Notification
          variant="error"
          title="Lorem ipsum dolor sit"
        ></Notification>,
        <Notification
          variant="error"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
        ></Notification>,
        <Notification
          variant="error"
          title="Lorem ipsum dolor sit"
          icon={<Icon.Error />}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          asperiores autem excepturi doloremque esse, dicta sunt soluta! Quia
          quis eos beatae et optio facere voluptatum. Labore illum molestiae
          corporis id?
        </Notification>,
        <Notification
          variant="error"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
          icon={<Icon.Error />}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          asperiores autem excepturi doloremque esse, dicta sunt soluta! Quia
          quis eos beatae et optio facere voluptatum. Labore illum molestiae
          corporis id?
        </Notification>,
      ],
    },
    {
      title: "Warning",
      description: "",
      component: [
        <Notification
          variant="warning"
          title="Lorem ipsum dolor sit"
        ></Notification>,
        <Notification
          variant="warning"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
        ></Notification>,
        <Notification
          variant="warning"
          title="Lorem ipsum dolor sit"
          icon={<Icon.Warning />}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          asperiores autem excepturi doloremque esse, dicta sunt soluta! Quia
          quis eos beatae et optio facere voluptatum. Labore illum molestiae
          corporis id?
        </Notification>,
        <Notification
          variant="warning"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
          icon={<Icon.Warning />}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          asperiores autem excepturi doloremque esse, dicta sunt soluta! Quia
          quis eos beatae et optio facere voluptatum. Labore illum molestiae
          corporis id?
        </Notification>,
      ],
    },
  ],
  props: [
    {
      prop: "variant",
      type: ["primary", "secondary", "success", "error", "warning"],
      default: null,
      optional: false,
      description: "Variant of the notification",
    },
    {
      prop: "title",
      type: ["string"],
      default: null,
      optional: false,
      description: "Notification title",
    },
    {
      prop: "icon",
      type: ["ReactNode"],
      default: "Info",
      optional: true,
      description: "Notification title",
    },
    {
      prop: "children",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Notification message",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
