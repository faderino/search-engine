import PropTypes from "prop-types";

const ImageCard = ({ link, image }) => {
  const splitTitle = (str) => {
    const [title, link] = str.split("... ");
    return [title + "...", link];
  };

  return (
    <div className="mr-5 mb-5 inline-block">
      <div className="mb-1 h-[180px] cursor-pointer rounded border border-transparent bg-gray-100 hover:border hover:border-gray-200 hover:shadow-lg">
        <a href={link.href} target="_blank" rel="noreferrer">
          <img
            src={image.src}
            alt={image.title}
            className="mx-auto h-full object-contain"
          />
        </a>
      </div>
      <div className="group cursor-pointer">
        <a
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="block text-xs text-gray-700 group-hover:underline"
        >
          {splitTitle(link.title)[0]}
        </a>
        <a
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="block text-[11px] leading-[15px] text-gray-500 group-hover:underline"
        >
          {splitTitle(link.title)[1] ?? splitTitle(link.title)[0]}
        </a>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
};

export default ImageCard;
