import { formatNumber, round } from "../utils/numbering";

const SearchStats = ({ className, total, ts }) => {
  return (
    <div className={`text-sm text-gray-500 ${className}`}>
      About {formatNumber(total)} results ({round(ts, 2)} seconds)
    </div>
  );
};

export default SearchStats;
