import { useState } from "react";
import PropTypes from "prop-types";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { formatDate } from "../utils/formatDate";
import SubNews from "./SubNews";

const NewsCard = ({ news, setReadingList, saved }) => {
  const [showSubNews, setShowSubNews] = useState(false);

  const trimTitle = (title, source) => {
    return title.replace(` - ${source}`, "");
  };

  const addToReadingList = (news) => {
    setReadingList((readingList) => {
      if (readingList.find((saved) => saved.id === news.id)) {
        return readingList;
      }
      return [...readingList, news];
    });
  };

  const removeFromReadingList = (news) => {
    setReadingList((readingList) => [
      ...readingList.filter((saved) => saved.id !== news.id),
    ]);
  };

  return (
    <div className="mb-8 max-w-xl overflow-hidden rounded-lg border">
      {/* Main Article */}
      <div className="group relative p-4">
        <a
          href={news.link}
          target="_blank"
          rel="noreferrer"
          className="absolute top-0 left-0 right-0 bottom-0"
        >
          {" "}
        </a>
        <h1 className="mb-1 text-lg font-semibold leading-5 group-hover:underline">
          <a href={news.link} target="_blank" rel="noreferrer" className=" ">
            {trimTitle(news.title, news.source.title)}
          </a>
        </h1>
        <div className="flex items-center justify-between">
          <div className="space-x-2 text-xs leading-6 text-gray-500">
            <span>{news.source.title}</span>
            <span className="font-bold">·</span>
            <span>{formatDate(news.published)}</span>
          </div>
          <div
            // className={`z-50 space-x-2 ${
            //   saved ? "" : "hidden group-hover:block"
            // }`}
            className="z-50 hidden space-x-2 group-hover:block"
          >
            {saved ? (
              <BookmarkIcon
                color="primary"
                fontSize="small"
                className="cursor-pointer"
                onClick={() => removeFromReadingList(news)}
              />
            ) : (
              <BookmarkBorderOutlinedIcon
                color="disabled"
                fontSize="small"
                className="cursor-pointer"
                onClick={() => addToReadingList(news)}
              />
            )}

            <ShareIcon
              color="disabled"
              fontSize="small"
              className="cursor-pointer"
            />
            <MoreVertIcon
              color="disabled"
              fontSize="small"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Sub Articles */}
      {showSubNews && news.sub_articles.length && (
        <ul className="ml-10 list-disc px-4 marker:text-blue-500">
          {news.sub_articles.map((subNews) => (
            <SubNews key={subNews.title} subNews={subNews} />
          ))}
        </ul>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between p-4">
        <button className="flex items-center space-x-2">
          <ChromeReaderModeOutlinedIcon color="primary" fontSize="small" />
          <a href={news.link} className="text-sm font-semibold text-blue-600">
            View Full coverage
          </a>
        </button>

        {news.sub_articles.length ? (
          <button onClick={() => setShowSubNews(!showSubNews)}>
            {showSubNews ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownOutlinedIcon />
            )}
          </button>
        ) : null}
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
  setReadingList: PropTypes.func,
  saved: PropTypes.bool,
};

export default NewsCard;
