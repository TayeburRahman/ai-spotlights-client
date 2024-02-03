import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import Main from "../layout/Main";
import Home from "../layout/Home";
import Dashboard from "../layout/Dashboard";
import ToolsForm from "../pages/ToolsForm";
import DashboardHome from "../pages/DashboardHome";
import MyTools from "../pages/MyTools";
import ManageTools from "../pages/ManageTools";
import ManageUsers from "../pages/ManageUsers";
import DetailsPage from "../pages/DetailsPage";
import PrivateRoute from "./PrivateRoute";
import UpdateTool from "../pages/UpdateTool";
import BlogsForm from "../pages/BlogsForm";
import Blogs from "../pages/Blogs";
import ManageBlogs from "../pages/ManageBlogs";
import UpdateBlog from "../pages/UpdateBlog";
import ToolsCard from "../components/ToolsCard";
import Category from "../pages/Category";
import Search from "../pages/Search";
import Test from "../pages/Test";
import Deals from "../pages/Deals";
import { baseUrl } from "../config/Url";
import Contact from "../pages/Contact";
import AllCategories from "../pages/AllCategories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/search/:value",
        element: <Search />,
      },
      {
        path: "/ai-tools/:category",
        element: <Category />,
      },
      {
        path: "/ai-tools/all-categories",
        element: <AllCategories />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "deals",
        element: <Deals />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // for blogs
      {
        path: "/:title",
        element: <DetailsPage />,
        loader: ({ params }) =>
          axios.get(
            `${baseUrl}/api/v1/blogs/${params.title}`
          ),
      },
      {
        path: "/update/:title",
        element: <UpdateBlog />,
        loader: ({ params }) =>
          axios.get(
            `${baseUrl}/api/v1/blogs/${params.title}`
          ),
      },
      // for tools
      {
        path: "/tool-details/:title",
        element: <DetailsPage />,
        loader: ({ params }) =>
          axios.get(
            `${baseUrl}/api/v1/tools/${params.title}`
          ),
      },
      {
        path: "/update-tools/:title",
        element: <UpdateTool />,
        loader: ({ params }) =>
          axios.get(
            `${baseUrl}/api/v1/tools/${params.title}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },

      // users route
      {
        path: "submit-tools",
        element: <ToolsForm />,
      },
      {
        path: "my-tools",
        element: <MyTools />,
      },

      // admins route
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "manage-tools",
        element: <ManageTools />,
      },
      {
        path: "manage-blogs",
        element: <ManageBlogs />,
      },
      {
        path: "add-tool",
        element: <ToolsForm />,
      },
      {
        path: "publish-blog",
        element: <BlogsForm />,
      },
    ],
  },
]);

export default router;
