import { IconButton } from "../IconButton";
import { Icon } from "../../icons";
import "./styles.scss";

/** */
export interface PaginationProps {
  /** How many items per page */
  pageSize: number;
  /** Total count of all items */
  itemCount: number;
  /** Current page */
  currentPage: number;
  /** Function to set current page */
  setCurrentPage: (currentPage: number) => void;
}

/**
 * Pagination provides a range of pages to display long lists of data.
 */
export const Pagination = ({
  pageSize,
  itemCount,
  currentPage,
  setCurrentPage,
}: PaginationProps): JSX.Element | null => {
  if (!pageSize || !itemCount) {
    return null;
  }

  const pageCount = Math.ceil(itemCount / pageSize);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageCount;

  const handlePageNavigation = (direction: "prev" | "next") => {
    const newPage = direction === "prev" ? currentPage - 1 : currentPage + 1;
    setCurrentPage(newPage);
  };

  const customProps = {
    customSize: "1rem",
    customColor: "var(--sds-clr-lilac-09)",
  };

  if (pageCount === 1) {
    return null;
  }

  return (
    <div className="Pagination">
      <IconButton
        icon={<Icon.ChevronLeft />}
        altText="Previous page"
        disabled={isFirstPage}
        onClick={() => handlePageNavigation("prev")}
        {...customProps}
      />
      {`${currentPage} of ${pageCount}`}
      <IconButton
        icon={<Icon.ChevronRight />}
        altText="Next page"
        disabled={isLastPage}
        onClick={() => handlePageNavigation("next")}
        {...customProps}
      />
    </div>
  );
};

Pagination.displayName = "Pagination";
