import { useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MicIcon from "@mui/icons-material/Mic";

import logo from "../assets/googlelogo.png";
import avatar from "../assets/avatar.png";
import Avatar from "../components/Avatar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex h-screen flex-col">
      <Navbar>
        <Avatar width={32} src={avatar} />
      </Navbar>

      {/* Body */}
      <div className="grow">
        {/* Big Logo */}
        <div className="relative mx-auto mt-[198px] w-fit">
          <img src={logo} alt="logo" />
          <span className="absolute right-1 bottom-0 text-base text-blue-700">
            {pathname.substring(1)}
          </span>
        </div>

        {/* Search Section */}
        <div className="p-5">
          <form className="mx-auto max-w-xl">
            {/* Searchbar */}
            <SearchBar>
              {pathname === "/images" && (
                <CameraAltIcon className="cursor-pointer" color="action" />
              )}
              <MicIcon className="cursor-pointer" color="primary" />
              {pathname !== "/" && (
                <SearchIcon className="cursor-pointer" color="primary" />
              )}
            </SearchBar>

            {/* Buttons */}
            {pathname === "/" && (
              <div className="flex justify-center space-x-3">
                <Button type="submit">Google Search</Button>
                <Button type="button">I'm Feeling Lucky</Button>
              </div>
            )}
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
