import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ToolsCard from "./ToolsCard";
import { baseUrl } from "../config/Url";

const Tools = ({title}) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["approvedTools"],
    queryFn: () =>
      axios
        .get(`${baseUrl}/api/v1/tools/approved-tools`)
        // .get("https://ai-spotlight-server.vercel.app/api/v1/tools/approved-tools")
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
    <section className="wrapper my-10">
      <h2 className="text-xl font-medium brightness-90 mb-5 text-center">
         {title}
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <ToolsCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Tools;
