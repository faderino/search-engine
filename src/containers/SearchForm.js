import { useLocation } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MicIcon from "@mui/icons-material/Mic";

import Button from "../components/Button";
import SearchBar from "../components/SearchBar";

const SearchForm = () => {
  const { pathname } = useLocation();

  return (
    <form className="mx-auto max-w-xl">
      {/* Searchbar */}
      <SearchBar>
        {pathname === "/images" && (
          <CameraAltIcon className="cursor-pointer" color="action" />
        )}
        <MicIcon className="cursor-pointer" color="primary" />
        {pathname !== "/" && (
          <button type="submit">
            <SearchIcon className="cursor-pointer" color="primary" />
          </button>
        )}
      </SearchBar>

      {/* Buttons */}
      {pathname === "/" && (
        <div className="flex justify-center space-x-3">
          <Button type="submit">Google Search</Button>
          <Button type="button">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default SearchForm;
