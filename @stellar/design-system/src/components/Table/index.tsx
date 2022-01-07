import React, { useCallback, useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { chunk } from "lodash";
import { Loader } from "../Loader";
import { Pagination } from "../Pagination";
import { Icon } from "../../icons";
import { sortList } from "../../helpers/sortList";
import { SortOrder } from "../../types/types";
import "./styles.scss";

interface TableColumnLabel {
  id: string;
  label: string;
  sortBy?: boolean;
}

interface TableProps<DataItem> {
  data: DataItem[];
  columnLabels: TableColumnLabel[];
  renderItemRow: (item: DataItem) => React.ReactElement;
  hideNumberColumn?: boolean;
  isLoading?: boolean;
  emptyMessage?: string;
  pageSize?: number;
}

export const Table = <DataItem extends Record<string, any>>({
  data,
  columnLabels,
  renderItemRow,
  hideNumberColumn,
  isLoading,
  emptyMessage = "No data to show",
  pageSize,
}: TableProps<DataItem>) => {
  const chunkData = useCallback(
    (items: DataItem[]) => chunk(items, pageSize || items.length),
    [pageSize],
  );

  const [localData, setLocalData] = useState<DataItem[][]>(chunkData(data));
  const [currentSortKey, setCurrentSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOder] = useState<SortOrder | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();

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
                  /* eslint-disable react/no-array-index-key */
                  <tr
                    className={item.href ? `Table__clickableRow` : ""}
                    key={`row-${index}`}
                    onClick={() => (item.href ? history.push(item.href) : null)}
                  >
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
