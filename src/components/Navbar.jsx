import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import clsx from "clsx";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("DarkTheme") !== null) {
      setDarkTheme(JSON.parse(window.localStorage.getItem("DarkTheme")));
    }
  }, []);

  useEffect(() => {
    if (darkTheme === true) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }

    window.localStorage.setItem("DarkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <nav className="border-b border-white dark:border-black">
      <div className="h-[65px] w-[90%] mx-auto flex items-center justify-between">
        <Link className="text-2xl font-medium  heading" to="/">
          Ai <span className="dark:text-teal-500 text-cyan">Spotlights</span>
        </Link>

        {/* navlinks */}
        <div
          className={clsx(
            "flex flex-col md:flex-row md:justify-between gap-5 p-[5%] md:p-0 shadow-md md:shadow-none absolute md:static left-0 w-full md:w-auto duration-500 md:duration-0 ease-linear",
            isOpen
              ? "top-[10vh] z-50 bg-cyprus/90 dark:bg-white"
              : "-top-[100vh]"
          )}
        >
          <Link onClick={() => setIsOpen(false)} to="/">
            Home
          </Link>
          <Link to="/blogs" onClick={() => setIsOpen(false)} >
            Blogs
          </Link>
          {user && (
            <Link onClick={() => setIsOpen(false)} to="/dashboard">
              Dashboard
            </Link>
          )}
          <Link onClick={() => setIsOpen(false)} to="/deals">
            Deals
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/contact">
            Contact
          </Link>


          <div className="md:hidden">
            <GoogleLogin />
          </div>
        </div>

        <div className="flex justify-between items-center gap-x-5">
          {/* theme switch */}
          <button onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? (
              <MdDarkMode className="h-6 w-6" />
            ) : (
              <MdLightMode className="h-6 w-6" />
            )}
          </button>

          {/* toggle nav */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden text-2xl"
          >
            {isOpen ? <IoClose /> : <FiMenu />}
          </button>

          {/* social login */}
          <div className="hidden md:flex">
            <GoogleLogin />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
