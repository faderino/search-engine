import { useSearch } from "../hooks/useSearch";
import { usePagination } from "../hooks/usePagination";

import NewsCard from "../components/NewsCard";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

const NewsResult = () => {
  const { loading, data } = useSearch("NEWS_SEARCH");
  const {
    currentPage,
    setCurrentPage,
    itemsPerPage,
    displayData: displayNews,
  } = usePagination(10, data);

  if (loading || !displayNews) {
    return <Loading />;
  }

  return (
    <div className="mr-8 py-8 pt-4">
      {displayNews.map((news) => (
        <NewsCard key={news.id} news={news} />
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
