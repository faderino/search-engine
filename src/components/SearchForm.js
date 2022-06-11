import CloseIcon from "@mui/icons-material/Close";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";

import SearchBar from "../components/SearchBar";

const SearchForm = ({ onSubmit, search, setSearch, placeholder, inputRef }) => {
  return (
    <form onSubmit={onSubmit} className="grow">
      <SearchBar
        search={search}
        setSearch={setSearch}
        className="h-10 max-w-xl shadow-md focus-within:shadow-lg"
        placeholder={placeholder}
        inputRef={inputRef}
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
          onClick={onSubmit}
          className="hidden sm:inline-block"
        >
          <SearchIcon className="cursor-pointer" color="primary" />
        </button>
      </SearchBar>
    </form>
  );
};

export default SearchForm;
