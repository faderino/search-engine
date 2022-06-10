import { useSearch } from "../hooks/useSearch";

import NewsCard from "../components/NewsCard";

const NewsResult = () => {
  const { loading, data } = useSearch("NEWS_SEARCH");

  if (loading) {
    return (
      <div className="absolute bottom-0 top-0 left-0 right-0 border-t-4 border-blue-500"></div>
    );
  }

  return (
    <div className="mr-8 py-8 pt-4">
      {data.slice(0, 10).map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};

export default NewsResult;
