import PropTypes from "prop-types";

import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({
  search,
  setSearch,
  withSearchIcon,
  className,
  children,
}) => {
  return (
    <div
      className={`flex items-center space-x-2 rounded-3xl border px-3 py-2 ${className}`}
    >
      {withSearchIcon && <SearchIcon className="p-[2px]" color="action" />}
      <input
        className={`grow focus:outline-none ${withSearchIcon ? "" : "pl-2"}`}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {children}
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  withSearchIcon: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SearchBar;
