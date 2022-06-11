import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SearchIcon from "@mui/icons-material/Search";

import avatar from "../assets/avatar.png";
import Avatar from "../components/Avatar";
import emptyReadingList from "../assets/empty-reading-list.png";
import logo from "../assets/googlelogo.png";
import Footer from "../components/Footer";
import { formatSearchQuery } from "../utils/formatSearchQuery";
import { useLocalStorage } from "../hooks/useLocalStorage";
import SavedNewsCard from "../components/SavedNewsCard";
import SearchForm from "../components/SearchForm";

const ReadingListPage = () => {
  const navigate = useNavigate();
  const [readingList, setReadingList] = useLocalStorage("readingList", []);
  const inputRef = useRef(null);

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search-result/news?q=${formatSearchQuery(search)}`);
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

        <SearchForm
          onSubmit={handleSubmit}
          search={search}
          setSearch={setSearch}
          placeholder="Search news..."
          inputRef={inputRef}
        />

        <Avatar width={32} src={avatar} className="hidden sm:inline-block" />
      </div>

      <nav className="border-b pl-8 pr-8 xl:pl-44">
        <div className="flex w-fit cursor-default items-center space-x-2 border-b-4 border-blue-500 pb-2 text-blue-500">
          <AutoStoriesIcon color="primary" fontSize="small" />
          <span className="text-sm font-semibold">Reading list</span>
        </div>
      </nav>

      {/* Content */}
      <div className="ml-8 mr-8 max-w-5xl grow py-5 xl:ml-44">
        {readingList.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2">
            {readingList.map((news) => (
              <SavedNewsCard
                key={news.id}
                news={news}
                setReadingList={setReadingList}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border p-6">
            <img
              src={emptyReadingList}
              alt="Reading list is empty"
              width={140}
              height={140}
              className="mx-auto mb-8"
            />

            <p className="mb-4 text-center text-sm text-gray-700">
              Your saved news will appear here.
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => inputRef.current.focus()}
                className="flex items-center rounded border px-2 py-1"
              >
                <SearchIcon color="primary" fontSize="small" />
                <span className="ml-2 text-sm font-medium text-blue-500">
                  Search news
                </span>
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ReadingListPage;
