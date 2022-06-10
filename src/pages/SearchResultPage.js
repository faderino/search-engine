import { useState } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import MicIcon from "@mui/icons-material/Mic";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import SearchIcon from "@mui/icons-material/Search";

import avatar from "../assets/avatar.png";
import Avatar from "../components/Avatar";
import { getCurrentPath } from "../utils/getCurrentPath";
import logo from "../assets/googlelogo.png";
import SearchBar from "../components/SearchBar";
import TabNavItem from "../components/TabNavItem";
import Footer from "../components/Footer";

const SearchResultPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  const searchBy = getCurrentPath(pathname);

  const [search, setSearch] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    setSearchParams({ q: search });
  };

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <div className="flex items-center px-8 py-5">
        <img
          src={logo}
          alt="logo"
          width={92}
          height={30}
          onClick={() => navigate("/")}
          className="mr-8 cursor-pointer"
        />

        <form onSubmit={handleSubmit} className="grow">
          <SearchBar
            search={search}
            setSearch={setSearch}
            className="h-10 max-w-xl shadow-md focus-within:shadow-lg"
          >
            <CloseIcon
              className="cursor-pointer text-gray-500 hover:text-black"
              onClick={() => setSearch("")}
            />
            <div className="hidden h-full w-[2px] bg-gray-300 sm:inline-block"></div>
            <div className="hidden sm:inline-block">
              <MicIcon className="cursor-pointer" color="primary" />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="hidden sm:inline-block"
            >
              <SearchIcon className="cursor-pointer" color="primary" />
            </button>
          </SearchBar>
        </form>

        <Avatar width={32} src={avatar} className="hidden sm:inline-block" />
      </div>

      {/* Tab Navigation */}
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

      {/* Search Result */}
      <div className="ml-8 grow xl:ml-44">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default SearchResultPage;
