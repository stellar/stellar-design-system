import { IconButton } from "../IconButton";
import { Icon } from "../../icons";
import "./styles.scss";

enum NavigationDirection {
  PREV = "previous",
  NEXT = "next",
}

interface PaginationProps {
  pageSize: number;
  itemCount: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export const Pagination = ({
  pageSize,
  itemCount,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  if (!pageSize || !itemCount) {
    return null;
  }

  const pageCount = Math.ceil(itemCount / pageSize);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageCount;

  const handlePageNavigation = (direction: NavigationDirection) => {
    const newPage =
      direction === NavigationDirection.PREV
        ? currentPage - 1
        : currentPage + 1;
    setCurrentPage(newPage);
  };

  const customProps = {
    customSize: "1rem",
    customColor: "var(--pal-text-link)",
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
        onClick={() => handlePageNavigation(NavigationDirection.PREV)}
        {...customProps}
      />
      {`${currentPage} of ${pageCount}`}
      <IconButton
        icon={<Icon.ChevronRight />}
        altText="Next page"
        disabled={isLastPage}
        onClick={() => handlePageNavigation(NavigationDirection.NEXT)}
        {...customProps}
      />
    </div>
  );
};
