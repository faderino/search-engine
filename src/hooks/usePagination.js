import { useEffect, useState } from "react";

/**
 * Hooks to use pagination. Accepts total item per page and the original full list of data.
 * @param {number} itemsPerPage items to be displayed per page.
 * @param {array} data the full list of data.
 * @returns object with "currentPage"<number>, "setCurrentPage"<func>, "itemsPerPage"<number>, and "displayData"<array> property.
 */
export const usePagination = (itemsPerPage, data) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayData, setDisplayData] = useState(null);

  useEffect(() => {
    if (data) {
      setDisplayData(
        data.slice(
          (currentPage - 1) * itemsPerPage,
          (currentPage - 1) * itemsPerPage + itemsPerPage
        )
      );
    }
  }, [currentPage, data, itemsPerPage]);

  return { currentPage, setCurrentPage, itemsPerPage, displayData };
};
