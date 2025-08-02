import { useEffect, useState } from "react";


import { Link } from "react-router-dom";
import useonlineStatus from "../../utils/useOnlineStatus";
import { Logo_URL } from "../../utils/constants";

const Header = () => {
  const [button, setButton] = useState("login");
  const onlineStatus = useonlineStatus();

  useEffect(() => {
    console.log("Header button state updated:", button);
  }, [button]);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b">
      <div className="max-w-[1300px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 object-contain"
            src={Logo_URL}
            alt="App Logo"
          />
          <span className="text-2xl font-extrabold text-orange-500 tracking-wide">
            SAMEER-PETER' <span className="text-gray-800">FOOD</span>
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-6 text-[16px] text-gray-700 font-medium">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            Online Status:
            <span
              className={`w-3 h-3 ml-1 rounded-full ${
                onlineStatus ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
          </div>
          <Link
            to="/"
            className="text-gray-700 no-underline hover:text-orange-500 transition"
          >
            Home
          </Link>
          <Link
            to="/CartItems"
            className="text-gray-700 no-underline hover:text-orange-500 transition"
          >
            Cart
          </Link>
          <Link
            to="/About"
            className="text-gray-700 no-underline hover:text-orange-500 transition"
          >
            About
          </Link>
          <Link
            to="/ContactUs"
            className="text-gray-700 no-underline hover:text-orange-500 transition"
          >
            Contact
          </Link>
          <Link
            to="/Grocery"
            className="text-gray-700 no-underline hover:text-orange-500 transition"
          >
            Grocery
          </Link>
        </nav>

        <div>
          <button
            onClick={() => setButton(button === "login" ? "logout" : "login")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-sm transition"
          >
            {button}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;