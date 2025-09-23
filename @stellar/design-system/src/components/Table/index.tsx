import React, { useCallback, useLayoutEffect, useState } from "react";
import { chunk } from "lodash";
import { Loader } from "../Loader";
import { Pagination } from "../Pagination";
import { Icon } from "../../icons";
import { sortList } from "../../helpers/sortList";
import { SortOrder } from "../../types/types";
import "./styles.scss";

/** */
export interface TableColumnLabel {
  /** Path to data property in object, it is used in sorting */
  id: string;
  /** Column label */
  label: string | React.ReactNode;
  /** Enable sorting for this column using ID */
  sortBy?: boolean;
}

/** */
export interface TableProps<T> {
  /** Optional ID used for row keys @defaultValue `table` */
  id?: string;
  /** Data to display in table */
  data: T[];
  /** Column label data */
  columnLabels: TableColumnLabel[];
  /** Function to render table rows */
  renderItemRow: (item: T) => React.ReactElement;
  /** Media query breakpoint to show sticky column layout */
  breakpoint: 300 | 400 | 500 | 600 | 700 | 800 | 900;
  /** Hide number column */
  hideNumberColumn?: boolean;
  /** Set table in loading state */
  isLoading?: boolean;
  /** Table empty message @defaultValue `No data to show` */
  emptyMessage?: string;
  /** Page size for pagination */
  pageSize?: number;
}

/**
 * Display sets of data in a table. Table data can be sorted with pagination. If any of the table labels have the `sortBy` flag enabled, the table becomes sortable.
 */
export const Table = <T extends Record<string, any>>({
  id = "table",
  data,
  columnLabels,
  renderItemRow,
  breakpoint,
  hideNumberColumn,
  isLoading,
  emptyMessage = "No data to show",
  pageSize,
}: TableProps<T>): JSX.Element => {
  const chunkData = useCallback(
    (items: T[]) => chunk(items, pageSize || items.length),
    [pageSize],
  );

  const [localData, setLocalData] = useState<T[][]>(chunkData(data));
  const [currentSortKey, setCurrentSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOder] = useState<SortOrder | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const isSortableTable = Boolean(columnLabels.find((cl) => cl.sortBy));

  useLayoutEffect(() => {
    setLocalData(chunkData(data));
  }, [data, pageSize, chunkData]);

  const handleSort = (sortKey: string) => {
    let sortedData = data;
    let sortedKey: string | null = sortKey;
    let sortedOrder = null;

    if (currentSortKey === sortedKey) {
      // repeated click
      if (sortOrder === SortOrder.ASC) {
        // second click: desc order
        sortedOrder = SortOrder.DESC;
        sortedData = sortList(data, sortKey, SortOrder.DESC);
      } else {
        // third click: clear sort
        sortedKey = null;
      }
    } else {
      // first click: asc order
      sortedOrder = SortOrder.ASC;
      sortedData = sortList(data, sortKey);
    }

    setCurrentSortKey(sortedKey);
    setLocalData(chunkData(sortedData));
    setSortOder(sortedOrder);
  };

  const renderSortIcon = (sortKey: string) => {
    if (sortKey === currentSortKey && sortOrder) {
      return (
        <div className="SortableTable__sortableCell__icon">
          {sortOrder === SortOrder.ASC ? (
            <Icon.ChevronDown />
          ) : (
            <Icon.ChevronUp />
          )}
        </div>
      );
    }

    return null;
  };

  const getItemNumber = (
    pgSize: number,
    currentPgIndex: number,
    itemIndex: number,
  ) => currentPgIndex * pgSize + itemIndex;

  return (
    <div
      className={[
        "TableContainer",
        isLoading ? "TableContainer--loading" : "",
      ].join(" ")}
    >
      <div className="TableWrapper">
        {localData.length === 0 ? <p>{emptyMessage}</p> : null}

        {localData.length > 0 ? (
          <table
            className={["Table", isSortableTable ? "SortableTable" : ""].join(
              " ",
            )}
            data-breakpoint={breakpoint}
          >
            <thead>
              <tr>
                {hideNumberColumn ? null : <th>#</th>}
                {columnLabels.map((lb) => (
                  <th
                    key={lb.id}
                    {...(lb.sortBy ? { onClick: () => handleSort(lb.id) } : {})}
                  >
                    <div
                      className={lb.sortBy ? "SortableTable__sortableCell" : ""}
                    >
                      {lb.label}
                      {renderSortIcon(lb.id)}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {localData[currentPage - 1].map(
                (item, index) => (
                  // TODO: handle clickable row by allowing to extend className
                  // and add other props
                  /* eslint-disable react/no-array-index-key */
                  <tr key={`${id}-row-${index}`}>
                    {hideNumberColumn ? null : (
                      <td>
                        {getItemNumber(
                          pageSize || 0,
                          currentPage - 1,
                          index + 1,
                        )}
                      </td>
                    )}
                    {renderItemRow(item)}
                  </tr>
                ),
                /* eslint-enable */
              )}
            </tbody>
          </table>
        ) : null}
      </div>

      {pageSize ? (
        <Pagination
          pageSize={pageSize}
          itemCount={data.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}

      {isLoading ? <Loader size="3rem" /> : null}
    </div>
  );
};

Table.displayName = "Table";
