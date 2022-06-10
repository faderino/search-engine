import PropTypes from "prop-types";

const SubNews = ({ subNews }) => {
  return (
    <li className="group relative mb-1">
      <a
        href={subNews.url}
        target="_blank"
        rel="noreferrer"
        className="absolute top-0 left-0 right-0 bottom-0"
      >
        {" "}
      </a>
      <h1 className="mb-1 text-sm font-semibold leading-5 group-hover:underline">
        <a href={subNews.url} target="_blank" rel="noreferrer" className=" ">
          {subNews.title}
        </a>
      </h1>
      <div className="flex items-center">
        <span className="text-xs text-gray-500">{subNews.publisher}</span>
      </div>
    </li>
  );
};

SubNews.propTypes = {
  subNews: PropTypes.object,
};

export default SubNews;
