import Loading from "../components/Loading";
import NormalCard from "../components/NormalCard";
import SearchStats from "../components/SearchStats";
import { useSearch } from "../hooks/useSearch";

const NormalResult = () => {
  const { loading, data } = useSearch("NORMAL_SEARCH");

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="py-8 pt-4 pr-4" data-testid="normal-result">
      <SearchStats className="mb-4" total={data.total} ts={data.ts} />

      {data.results.map((result, idx) => (
        <NormalCard key={idx} result={result} />
      ))}
    </div>
  );
};

export default NormalResult;
