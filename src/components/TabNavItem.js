import PropTypes from "prop-types";

import formatSearchQuery from "../utils/formatSearchQuery";

const TabNavItem = ({ title, search, searchBy, navigate, children }) => {
  const selected = () => {
    if (
      searchBy === title.toLowerCase() ||
      (title === "All" && searchBy === "normal")
    ) {
      return "border-blue-500 pb-2 text-blue-500";
    }
    return "border-transparent text-gray-500";
  };

  return (
    <div
      onClick={() =>
        navigate(
          `/search-result/${
            title === "All" ? "normal" : title.toLowerCase()
          }?q=${formatSearchQuery(search)}`
        )
      }
      className={`flex cursor-pointer items-center space-x-1 border-b-4 pb-2 text-sm ${selected()}`}
    >
      {children}
      <span>{title}</span>
    </div>
  );
};

TabNavItem.propTypes = {
  title: PropTypes.string,
  search: PropTypes.string,
  searchBy: PropTypes.string,
  navigate: PropTypes.func,
  children: PropTypes.node,
};

export default TabNavItem;
