import { Link } from "react-router-dom";
import Button, { buttonVariants } from "./Button";

const MyToolsCard = ({ item }) => {
  return (
    <div className="rounded-md bg-cyprus/95 dark:bg-white brightness-110 overflow-hidden shadow-xl">
      <img
        src={item?.toolsImage}
        alt={item?.title}
        className="object-cover cursor-pointer rounded-t-md hover:scale-110 transition-all duration-700 h-[200px] w-full"
      />

      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="leading-3 text-xl font-semibold hover:text-cyan cursor-pointer">
            {item?.title}
          </h3>

          <Button colors="transparent" size="small" className="capitalize">
            {item?.status}
          </Button>
        </div>

        <p className="line-clamp-2">{item?.subtitle}</p>

        <ul>
          {item?.tags?.map((tag, index) => (
            <li key={index} className="line-clamp-1">
              # {tag}
            </li>
          ))}
        </ul>

        <div className="flex justify-between">
          <Link
            to={`/update-tools/${item?.title.replace(/\s+/g, "-")}`}
            className={buttonVariants({ colors: "transparent", size: "small" })}
          >
            Update
          </Link>

          <Button>Pay Now</Button>
        </div>
      </div>
    </div>
  );
};

export default MyToolsCard;
