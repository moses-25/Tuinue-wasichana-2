import { useMemo, useState } from 'react';

const usePagination = (data = [], itemsPerPage = 6) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => Math.ceil(data.length / itemsPerPage), [data, itemsPerPage]);

  const currentData = useMemo(() => {
    return data.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [currentPage, data, itemsPerPage]);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const setPage = (pageNum) => {
    setCurrentPage(() => Math.min(Math.max(pageNum, 1), totalPages));
  };

  return {
    currentData,
    currentPage,
    totalPages,
    goToNextPage,
    goToPrevPage,
    setPage,
  };
};

export default usePagination;

