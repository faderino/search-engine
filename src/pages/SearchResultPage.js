import { useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";

import avatar from "../assets/avatar.png";
import Avatar from "../components/Avatar";
import logo from "../assets/googlelogo.png";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import TabNavigation from "../components/TabNavigation";

const SearchResultPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");

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

      <TabNavigation search={search} navigate={navigate} />

      {/* Search Result */}
      <div className="ml-8 grow xl:ml-44">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default SearchResultPage;
