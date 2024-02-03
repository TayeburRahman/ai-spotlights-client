import { Link } from "react-router-dom";
import { buttonVariants } from "./Button";
import { MdFavorite } from "react-icons/md";

const BlogsCard = ({ item }) => {
  return (
    <div className="rounded-md bg-cyprus/95 dark:bg-white brightness-110 overflow-hidden shadow-xl">
      <img
        src={item?.toolsImage}
        alt={item?.title}
        className="object-fill cursor-pointer rounded-t-md hover:scale-110 transition-all duration-700 h-[200px] w-full"
      />

      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold hover:text-cyan cursor-pointer line-clamp-1 capitalize">
          {item?.title}
        </h2>

        <p className="line-clamp-2">{item?.subtitle}</p>

        <p
          className="line-clamp-3"
          dangerouslySetInnerHTML={{ __html: item?.description }}
        />

        <div className="flex justify-between">
          <div className="flex justify-between items-center gap-2">
            <MdFavorite className="text-red-500 h-6 w-6 cursor-pointer" />
            {item?.ratings}
          </div>

          <Link
            to={`/${item?.title.replace(/\s+/g, "-")}`}
            className={buttonVariants({ colors: "transparent", size: "small" })}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
