import { Link } from "react-router-dom";
import Button, { buttonVariants } from "./Button";

const BlogsTable = ({ item, index, handleDeleteBlogs }) => {
  return (
    <tr className="text-left">
      <td>{index + 1}</td>
      <td className="flex items-center gap-4">
        <img
          className="rounded-full h-10 w-10 object-cover"
          src={item?.toolsImage}
          alt={item?.title}
        />
        <strong className="capitalize">{item?.title}</strong>
      </td>

      <td>
        <Link
          to={`/update/${item?.title.replace(/\s+/g, "-")}`}
          className={buttonVariants({ size: "small" })}
        >
          Update
        </Link>
      </td>

      <td>
        <Button
          onClick={() => handleDeleteBlogs(item?._id)}
          size="small"
          colors="transparent"
        >
          Delete
        </Button>
      </td>

      <td>
        <Link
          to={`/${item?.title.replace(/\s+/g, "-")}`}
          className={buttonVariants({ colors: "transparent", size: "small" })}
        >
          Details
        </Link>
      </td>
    </tr>
  );
};

export default BlogsTable;
