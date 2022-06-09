import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MicIcon from "@mui/icons-material/Mic";

import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import { formatSearchQuery } from "../utils/formatSearchQuery";

const HomeSearch = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch("");
  }, [pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/search-result/${
        pathname.substring(1) || "normal"
      }?q=${formatSearchQuery(search)}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
      <SearchBar
        search={search}
        setSearch={setSearch}
        withSearchIcon={true}
        className="mt-2 mb-8 focus-within:shadow-md hover:shadow-md"
      >
        {pathname === "/images" && (
          <CameraAltIcon className="cursor-pointer" color="action" />
        )}
        <MicIcon className="cursor-pointer" color="primary" />
        {pathname !== "/" && (
          <button type="submit" onClick={handleSubmit}>
            <SearchIcon className="cursor-pointer" color="primary" />
          </button>
        )}
      </SearchBar>

      {pathname === "/" && (
        <div className="flex justify-center space-x-3">
          <Button type="submit" onClick={handleSubmit}>
            Google Search
          </Button>
          <Button type="button">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default HomeSearch;
