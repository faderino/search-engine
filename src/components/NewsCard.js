import { useState } from "react";
import PropTypes from "prop-types";

import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

import { formatDate } from "../utils/formatDate";
import SubNews from "./SubNews";

const NewsCard = ({ news }) => {
  const [showSubNews, setShowSubNews] = useState(false);

  const trimTitle = (title, source) => {
    return title.replace(` - ${source}`, "");
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
        <div className="flex items-center">
          <span className="text-xs text-gray-500">{news.source.title}</span>
          <span className="mx-2">·</span>
          <span className="mr-2 text-xs text-gray-500">
            {formatDate(news.published)}
          </span>
          <button className="z-50 hidden rounded-full group-hover:block">
            <BookmarkBorderOutlinedIcon color="action" fontSize="small" />
          </button>
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
};

export default NewsCard;
