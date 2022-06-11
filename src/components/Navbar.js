import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";

const Navbar = ({ children }) => {
  const { pathname } = useLocation();

  const links = [
    {
      name: "Search",
      path: "/",
    },
    {
      name: "Images",
      path: "/images",
    },
    {
      name: "News",
      path: "/news",
    },
    {
      name: "Reading List",
      path: "/reading-list",
    },
  ];

  return (
    <header className="p-[6px]">
      <nav className="flex items-center justify-end">
        <ul className="mr-4 flex items-center space-x-4">
          {links.map(({ name, path }) => (
            <li
              key={name}
              className={`text-sm hover:underline ${
                pathname === path ? "font-semibold underline" : ""
              }`}
            >
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <div className="hidden h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-100 sm:block">
            <ViewComfyIcon color="action" />
          </div>

          {children}
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
