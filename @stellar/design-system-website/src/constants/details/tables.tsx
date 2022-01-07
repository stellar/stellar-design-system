import { Table } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

const tableData = [
  {
    id: "a",
    field1: "4",
    field2: "A",
    field3: "a",
  },
  {
    id: "b",
    field1: "5",
    field2: "B",
    field3: "b",
  },
  {
    id: "c",
    field1: "6",
    field2: "C",
    field3: "c",
  },
];

const tableLabels = [
  {
    id: "field1",
    label: "Col 1",
  },
  {
    id: "field2",
    label: "Col 2",
  },
  {
    id: "field3",
    label: "Col 3",
  },
];

const sortableTableLabels = [
  {
    id: "field1",
    label: "Col 1",
    sortBy: true,
  },
  {
    id: "field2",
    label: "Col 2",
    sortBy: true,
  },
  {
    id: "field3",
    label: "Col 3",
    sortBy: true,
  },
];

const renderItemRow = (item: any) => (
  <>
    <td>{item.field1}</td>
    <td>{item.field2}</td>
    <td>{item.field3}</td>
  </>
);

export const tables: ComponentDetails = {
  id: ComponentDetailsId.tables,
  title: "Tables",
  description: `Display sets of data in a table. Table data can be sorted and with pagination.`,
  shortDescription: "Display data in a table",
  examples: [
    {
      title: "Basic table without number column",
      description: "",
      component: [
        <Table
          columnLabels={tableLabels}
          data={tableData}
          renderItemRow={renderItemRow}
          hideNumberColumn
        />,
      ],
    },
    {
      title: "Sortable table with pagination",
      description: "",
      component: [
        <Table
          columnLabels={sortableTableLabels}
          data={tableData}
          renderItemRow={renderItemRow}
          pageSize={2}
        />,
      ],
    },
    {
      title: "Table in loading state",
      description: "",
      component: [
        <Table
          columnLabels={sortableTableLabels}
          data={tableData}
          renderItemRow={renderItemRow}
          pageSize={2}
          isLoading
        />,
      ],
    },
  ],
  props: [
    {
      prop: "title",
      type: ["string"],
      default: null,
      optional: false,
      description: "Project name",
    },
    {
      prop: "link",
      type: ["string"],
      default: "/",
      optional: true,
      description: "Project website link",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
