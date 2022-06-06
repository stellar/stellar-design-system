import { Pagination } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const pagination: ComponentDetails = {
  id: ComponentDetailsId.pagination,
  title: "Pagination",
  description: `Pagination provides a range of pages to display long lists of data.`,
  shortDescription: "Range of pages for long lists",
  examples: [
    {
      title: "Pagination",
      description: "",
      component: [
        <Pagination
          pageSize={5}
          itemCount={20}
          currentPage={1}
          setCurrentPage={() => {
            // do nothing
          }}
        />,
      ],
    },
  ],
  props: [
    {
      prop: "pageSize",
      type: ["number"],
      default: null,
      optional: false,
      description: "How many items per page",
    },
    {
      prop: "itemCount",
      type: ["number"],
      default: null,
      optional: false,
      description: "Total count of all items",
    },
    {
      prop: "currentPage",
      type: ["number"],
      default: null,
      optional: false,
      description: "Current page",
    },
    {
      prop: "setCurrentPage",
      type: ["(currentPage: number) => void"],
      default: null,
      optional: false,
      description: "Function to set current page",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
