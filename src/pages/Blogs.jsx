import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BlogsCard from "../components/BlogsCard";
import { baseUrl } from "../config/Url";

const Blogs = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["featuredTools"],
    queryFn: () =>
      axios
        // .get("https://ai-spotlight-server.vercel.app/api/v1/blogs/")
        .get(`${baseUrl}/api/v1/blogs/`)
        .then((res) => res.data),
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error: {error.message}
      </div>
    );

  return (
    <main className="wrapper my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item) => (
          <BlogsCard key={item?._id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Blogs;
