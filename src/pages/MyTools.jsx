import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import MyToolsCard from "../components/MyToolsCard";
import { baseUrl } from "../config/Url";

const MyTools = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["myTools"],
    queryFn: () =>
      axiosSecure
        .get(`${baseUrl}/api/v1/tools/my-tools?email=${user?.email}`)
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

  if (!data || data.length === 0)
    return (
      <div className="flex items-center justify-center min-h-screen">
        You have not added any tools yet.
      </div>
    );

  return (
    <main className="min-h-[calc(100vh-66px)]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 p-5">
        {data.map((item) => (
          <MyToolsCard key={item._id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default MyTools;
