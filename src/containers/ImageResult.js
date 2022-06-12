import { useSearch } from "../hooks/useSearch";
import ImageCard from "../components/ImageCard";
import Loading from "../components/Loading";

const ImageResult = () => {
  const { loading, data } = useSearch("IMAGE_SEARCH");

  if (loading) {
    return <Loading />;
  }
  return (
    <div
      className="-ml-4 grid grid-cols-2 pt-4 pb-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:-ml-40 xl:grid-cols-6"
      data-testid="image-result"
    >
      {data.map(({ image, link }, idx) => (
        <ImageCard key={idx} image={image} link={link} />
      ))}
    </div>
  );
};

export default ImageResult;
