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
  description: (
    <>
      Display sets of data in a table. Table data can be sorted and with
      pagination. If any of the table labels have <code>sortBy</code> flag
      enabled, the table becomes sortable.
    </>
  ),
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
          breakpoint={400}
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
          breakpoint={400}
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
          breakpoint={400}
          isLoading
        />,
      ],
    },
    {
      title: "Table without data",
      description: "",
      component: [
        <Table
          columnLabels={sortableTableLabels}
          data={[]}
          renderItemRow={renderItemRow}
          breakpoint={400}
        />,
      ],
    },
  ],
  props: [
    {
      prop: "id",
      type: ["string"],
      default: "table",
      optional: true,
      description: "Optional ID used for row keys",
    },
    {
      prop: "data",
      type: ["T[]"],
      default: null,
      optional: false,
      description: "Data to display in table",
    },
    {
      prop: "columnLabels",
      type: ["TableColumnLabel[]"],
      default: null,
      optional: false,
      description: "Column label data",
    },
    {
      prop: "renderItemRow",
      type: ["(item: T) => React.ReactElement"],
      default: null,
      optional: false,
      description: "Function to render table rows",
    },
    {
      prop: "breakpoint",
      type: ["300", "400", "500", "600", "700", "800", "900"],
      default: null,
      optional: false,
      description: "Media query breakpoint to show sticky column layout",
    },
    {
      prop: "hideNumberColumn",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Hide number column",
    },
    {
      prop: "isLoading",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Set table in loading state",
    },
    {
      prop: "emptyMessage",
      type: ["string"],
      default: "No data to show",
      optional: true,
      description: "Table empty message",
    },
    {
      prop: "pageSize",
      type: ["number"],
      default: null,
      optional: true,
      description: "Page size for pagination",
    },
    {
      prop: "TableColumnLabel",
      type: [],
      default: null,
      optional: false,
      description: "",
    },
    {
      prop: "id",
      type: ["string"],
      default: null,
      optional: false,
      description: "Path to data property in object, it is used in sorting",
    },
    {
      prop: "label",
      type: ["string", "ReactNode"],
      default: null,
      optional: false,
      description: "Column label",
    },
    {
      prop: "sortBy",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Enable sorting for this column using ID",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
