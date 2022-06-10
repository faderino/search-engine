import PropTypes from "prop-types";

const NormalCard = ({ result }) => {
  return (
    <div className="mb-8 max-w-xl">
      <div className="group">
        <a className="block cursor-pointer text-sm" href={result.link}>
          {Object.keys(result.cite).length
            ? result.cite.domain?.split(" ›")[0]
            : result.link.split("?")[0]}
          <span className="text-gray-500">{result.cite.span}</span>
        </a>
        <a
          className="text-xl font-medium text-blue-700 decoration-2 visited:text-purple-600 group-hover:underline"
          href={result.link}
        >
          {result.title}
        </a>
      </div>
      <p className="text-sm line-clamp-2">
        {result.description || result.title}
      </p>
    </div>
  );
};

NormalCard.propTypes = {
  result: PropTypes.object,
};

export default NormalCard;
