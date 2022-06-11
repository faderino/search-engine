import PropTypes from "prop-types";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import { formatDate } from "../utils/formatDate";

const SavedNewsCard = ({ news, setReadingList }) => {
  const trimTitle = (title, source) => {
    return title.replace(` - ${source}`, "");
  };

  const removeFromReadingList = (news) => {
    setReadingList((readingList) => [
      ...readingList.filter((saved) => saved.id !== news.id),
    ]);
  };

  return (
    <div key={news.id} className="group relative mb-8 mr-8 max-w-md py-2">
      <a
        href={news.link}
        target="_blank"
        rel="noreferrer"
        className="absolute top-0 left-0 right-0 bottom-0"
      >
        {" "}
      </a>
      <p className="mb-1 text-sm font-medium text-gray-500">
        {news.source.title}
      </p>
      <h1 className="mb-1 text-lg font-semibold leading-5 group-hover:underline">
        <a href={news.link} target="_blank" rel="noreferrer" className=" ">
          {trimTitle(news.title, news.source.title)}
        </a>
      </h1>
      <div className="flex items-center justify-between">
        <div className="space-x-2 text-xs leading-6 text-gray-500">
          <span>{formatDate(news.published)}</span>
        </div>
        <div className="z-50 space-x-2">
          <BookmarkIcon
            color="primary"
            fontSize="small"
            className="cursor-pointer"
            onClick={() => removeFromReadingList(news)}
          />
          <ShareIcon
            color="disabled"
            fontSize="small"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

SavedNewsCard.propTypes = {
  news: PropTypes.object,
  setReadingList: PropTypes.func,
};

export default SavedNewsCard;
