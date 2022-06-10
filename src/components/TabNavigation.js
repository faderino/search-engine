import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import SearchIcon from "@mui/icons-material/Search";

import { getCurrentPath } from "../utils/getCurrentPath";

import TabNavItem from "./TabNavItem";

const TabNavigation = ({ search, navigate }) => {
  const { pathname } = useLocation();
  const searchBy = getCurrentPath(pathname);

  return (
    <nav className="border-b pl-8 pr-8 xl:pl-44">
      <div className="flex space-x-6">
        <TabNavItem
          title="All"
          search={search}
          searchBy={searchBy}
          navigate={navigate}
        >
          <SearchIcon fontSize="inherit" />
        </TabNavItem>

        <TabNavItem
          title="Images"
          search={search}
          searchBy={searchBy}
          navigate={navigate}
        >
          <ImageOutlinedIcon fontSize="inherit" />
        </TabNavItem>

        <TabNavItem
          title="News"
          search={search}
          searchBy={searchBy}
          navigate={navigate}
        >
          <NewspaperOutlinedIcon fontSize="inherit" />
        </TabNavItem>
      </div>
    </nav>
  );
};

TabNavigation.propTypes = {
  search: PropTypes.string,
  navigate: PropTypes.func,
};

export default TabNavigation;
