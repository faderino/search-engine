const Avatar = ({ width, src }) => {
  return (
    <div className="cursor-pointer p-1">
      <div className="rounded-full p-1 hover:bg-gray-100">
        <img
          width={width}
          className="rounded-full object-cover"
          src={src}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Avatar;
