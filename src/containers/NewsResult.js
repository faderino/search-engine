import { useSearch } from "../hooks/useSearch";
import { usePagination } from "../hooks/usePagination";
import { useLocalStorage } from "../hooks/useLocalStorage";

import NewsCard from "../components/NewsCard";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

const NewsResult = () => {
  const navigate = useNavigate();
  const { loading, data } = useSearch("NEWS_SEARCH");
  const {
    currentPage,
    setCurrentPage,
    itemsPerPage,
    displayData: displayNews,
  } = usePagination(10, data);
  const [readingList, setReadingList] = useLocalStorage("readingList", []);

  const isSaved = (newsId) => {
    return Boolean(readingList.find((saved) => saved.id === newsId));
  };

  const addToReadingList = (news) => {
    setReadingList((readingList) => [...readingList, news]);
  };

  const removeFromReadingList = (news) => {
    setReadingList((readingList) => [
      ...readingList.filter((saved) => saved.id !== news.id),
    ]);
  };

  if (loading || !displayNews) {
    return <Loading />;
  }

  return (
    <div className="mr-8 py-8 pt-4" data-testid="news-result">
      <nav className="mb-2 flex max-w-xl items-center justify-between">
        <h1 className="text-lg font-semibold">Headlines</h1>
        <button
          onClick={() => navigate("/reading-list")}
          className="text-sm font-semibold text-blue-500"
        >
          My Reading List
        </button>
      </nav>
      {displayNews.map((news) => (
        <NewsCard
          key={news.id}
          news={news}
          addToReadingList={addToReadingList}
          removeFromReadingList={removeFromReadingList}
          saved={isSaved(news.id)}
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
