import { useLocation } from "react-router-dom";

import logo from "../assets/googlelogo.png";
import avatar from "../assets/avatar.png";
import Avatar from "../components/Avatar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeSearch from "../containers/HomeSearch";

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
          <HomeSearch />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
