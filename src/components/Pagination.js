import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

const Pagination = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  totalItems,
}) => {
  const totalPage = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="mr-2"
      >
        <KeyboardArrowLeftOutlinedIcon
          color={currentPage === 1 ? "disabled" : ""}
        />
      </button>
      {Array(totalPage)
        .fill("")
        .map((_, idx) => (
          <div
            className={`b-8 group mr-2 inline-block w-8 rounded-full px-2 py-1 text-sm ${
              currentPage === idx + 1 ? "bg-gray-200" : ""
            }`}
          >
            <button
              className="h-full w-full"
              onClick={() => setCurrentPage(idx + 1)}
            >
              <span
                className={`group-hover:underline ${
                  currentPage === idx + 1 ? "font-bold" : ""
                }`}
              >
                {idx + 1}
              </span>
            </button>
          </div>
        ))}
      <button
        disabled={totalPage === currentPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <NavigateNextOutlinedIcon
          color={totalPage === currentPage ? "disabled" : ""}
        />
      </button>
    </div>
  );
};

export default Pagination;
