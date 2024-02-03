import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import clsx from "clsx";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
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
    <main>
      {/* navbar */}
      <Helmet>
        <title>Dashboard - Ai Spotlights</title>
      </Helmet>
      <nav className="border-b border-white dark:border-black">
        <div className="h-[65px] w-[95%] mx-auto flex items-center justify-between">
          <Link className="text-2xl font-bold" to="/">
            Ai <span className="text-cyan">Spotlights</span>
          </Link>

          <div className="flex justify-between items-center gap-5">
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

            {/* nav links for mobile */}
            <div
              className={clsx(
                "flex flex-col md:hidden gap-5 p-[5%] shadow-md absolute left-0 w-full duration-500 ease-linear btn-links",
                isOpen
                  ? "top-[10vh] bg-cyprus dark:bg-white z-50"
                  : "-top-[100vh]"
              )}
            >
              {isAdmin ? (
                <>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="/dashboard/manage-users"
                  >
                    Manage Users
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="/dashboard/manage-tools"
                  >
                    Manage Tools
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="/dashboard/manage-blogs"
                  >
                    Manage Blogs
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="/dashboard/add-tool"
                  >
                    Add Tool
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="/dashboard/publish-blog"
                  >
                    Publish Blog
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="/dashboard/submit-tools"
                  >
                    Submit Tools
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="/dashboard/my-tools"
                  >
                    My Tools
                  </Link>
                </>
              )}
              <Link onClick={() => setIsOpen(false)} to="/">
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* drawer style */}
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-10 min-h-[calc(100vh-66px)]">
        {/* drawer left side */}
        <div className="hidden md:col-span-1 lg:col-span-2 md:flex md:flex-col border-r border-white dark:border-black py-5 btn-links">
          {isAdmin ? (
            <>
              <Link to="/dashboard/manage-users">Manage Users</Link>
              <Link to="/dashboard/manage-tools">Manage Tools</Link>
              <Link to="/dashboard/manage-blogs">Manage Blogs</Link>
              <Link to="/dashboard/add-tool">Add Tool</Link>
              <Link to="/dashboard/publish-blog">Publish Blog</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard/submit-tools">Submit Tools</Link>
              <Link to="/dashboard/my-tools">My Tools</Link>
            </>
          )}
          <Link to="/">Home</Link>
        </div>

        {/* drawer right side */}
        <div className="md:col-span-4 lg:col-span-8">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
