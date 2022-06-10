import { useSearch } from "../hooks/useSearch";

import NewsCard from "../components/NewsCard";
import Loading from "../components/Loading";

const NewsResult = () => {
  const { loading, data } = useSearch("NEWS_SEARCH");

  if (loading) {
    return <Loading />;
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
