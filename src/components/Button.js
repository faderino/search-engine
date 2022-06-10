import PropTypes from "prop-types";

const Button = ({ onClick, type, children }) => {
  return (
    <button
      onClick={onClick}
      className="rounded bg-gray-50 px-4 py-2 text-sm text-gray-700 outline-1 outline-gray-300 hover:shadow-md hover:outline"
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
