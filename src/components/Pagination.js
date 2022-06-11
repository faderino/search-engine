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
    <div className="flex justify-between items-center max-w-xl">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="mr-2"
      >
        <KeyboardArrowLeftOutlinedIcon
          color={currentPage === 1 ? "disabled" : "primary"}
        />
      </button>
      <div className="flex justify-between">
        {Array(totalPage)
          .fill("")
          .map((_, idx) => (
            <div
              key={idx}
              className="group text-sm"
            >
              <button
                className="mr-4 sm:mr-8 p-[1px]"
                onClick={() => setCurrentPage(idx + 1)}
              >
                <span
                  className={`group-hover:underline text-blue-500 ${
                    currentPage === idx + 1 ? "font-bold underline" : ""
                  }`}
                >
                  {idx + 1}
                </span>
              </button>
            </div>
          ))}

      </div>
      <button
        disabled={totalPage === currentPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <NavigateNextOutlinedIcon
          color={totalPage === currentPage ? "disabled" : "primary"}
        />
      </button>
    </div>
  );
};

export default Pagination;
