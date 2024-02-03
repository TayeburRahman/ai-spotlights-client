import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ToolsCard from "../components/ToolsCard";
import Categories from "../components/Categories";
import { baseUrl } from "../config/Url";

const Category = () => {
  let { category } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["approvedTools"],
    queryFn: () =>
      axios
        .get(`${baseUrl}/api/v1/tools/approved-tools`)
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

  const categoryTools = data.filter(
    (tool) => tool.category === category.replace(/-/g, " ")
  );
  console.log(categoryTools.length);

  return (
    <section className="wrapper my-10">
      <Categories />
      {categoryTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {categoryTools.map((item, index) => (
            <ToolsCard key={index} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-190px)]">
          Oops! There is no data available at the moment.
        </div>
      )}
    </section>
  );
};

export default Category;
