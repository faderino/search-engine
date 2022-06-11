import { useEffect, useState } from "react";
import { useSearch } from "../hooks/useSearch";
import { usePagination } from "../hooks/usePagination";

import NewsCard from "../components/NewsCard";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

const useLocalStorage = (key, defaultValue = "") => {
  const [state, setState] = useState(() => {
    const inLocalStorage = localStorage.getItem(key);
    if (inLocalStorage) {
      return JSON.parse(inLocalStorage);
    }
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

const NewsResult = () => {
  const { loading, data } = useSearch("NEWS_SEARCH");
  const {
    currentPage,
    setCurrentPage,
    itemsPerPage,
    displayData: displayNews,
  } = usePagination(10, data);
  const [readingList, setReadingList] = useLocalStorage("readingList", []);

  if (loading || !displayNews) {
    return <Loading />;
  }

  return (
    <div className="mr-8 py-8 pt-4">
      {displayNews.map((news) => (
        <NewsCard
          key={news.id}
          news={news}
          setReadingList={setReadingList}
          saved={
            readingList.filter((saved) => saved.id === news.id).length === true
          }
        />
      ))}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
      />
    </div>
  );
};

export default NewsResult;
