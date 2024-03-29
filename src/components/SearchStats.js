import PropTypes from "prop-types";
import { formatNumber, round } from "../utils/numbering";

const SearchStats = ({ className, total, ts }) => {
  return (
    <div className={`text-sm text-gray-500 ${className}`}>
      About {formatNumber(total)} result{total > 1 ? "s" : ""} ({round(ts, 2)}{" "}
      seconds)
    </div>
  );
};

SearchStats.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number,
  ts: PropTypes.number,
};

export default SearchStats;
