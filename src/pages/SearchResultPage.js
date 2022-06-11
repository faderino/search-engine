import { useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

import avatar from "../assets/avatar.png";
import Avatar from "../components/Avatar";
import logo from "../assets/googlelogo.png";
import Footer from "../components/Footer";
import TabNavigation from "../components/TabNavigation";
import SearchForm from "../components/SearchForm";

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
      <div className="flex items-center px-4 py-5 sm:px-8">
        <img
          src={logo}
          alt="logo"
          width={92}
          height={30}
          onClick={() => navigate("/")}
          className="mr-4 cursor-pointer sm:mr-8"
        />

        <SearchForm
          onSubmit={handleSubmit}
          search={search}
          setSearch={setSearch}
        />

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
