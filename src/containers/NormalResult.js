import NormalCard from "../components/NormalCard";
import SearchStats from "../components/SearchStats";
import { useSearch } from "../hooks/useSearch";

const NormalResult = () => {
  const { loading, data } = useSearch("NORMAL_SEARCH");

  if (loading) {
    return <div></div>;
  }

  return (
    <>
      <SearchStats className="py-4" total={data.total} ts={data.ts} />

      {data.results.map((result, idx) => (
        <NormalCard key={idx} result={result} />
      ))}
    </>
  );
};

export default NormalResult;
