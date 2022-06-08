import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ children }) => {
  return (
    <div className="mt-2 mb-8 flex items-center space-x-2 rounded-3xl border px-3 py-2 hover:shadow-md">
      <SearchIcon className="p-[2px]" color="action" />
      <input className="h-7 grow focus:outline-none" type="text" />
      {children}
    </div>
  );
};

export default SearchBar;
