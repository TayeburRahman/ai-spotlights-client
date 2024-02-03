import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import BlogsTable from "../components/BlogsTable";
import { baseUrl } from "../config/Url";

const ManageBlogs = () => {
  const [axiosSecure] = useAxiosSecure();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["manageBlogs"],
    queryFn: () => axiosSecure.get(`${baseUrl}/api/v1/blogs`).then((res) => res.data),
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

  const handleDeleteBlogs = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will delete the blog. Do you want to proceed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(`${baseUrl}/api/v1/blogs/${id}`);
          if (response.status === 200) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "The blog has been successfully deleted.",
              icon: "success",
            });
          } else {
            Swal.fire(
              "Error",
              "Failed to delete the blog. Please try again.",
              "error"
            );
          }
        } catch (error) {
          Swal.fire(
            "Error",
            "An error occurred while deleting the blog. Please try again.",
            "error"
          );
        }
      }
    });
  };

  return (
    <main className="min-h-[calc(100vh-66px)] overflow-x-scroll lg:overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="text-left shadow-lg rounded">
            <th>Id</th>
            <th>Blogs Title</th>
            <th>Update</th>
            <th>Delete</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody className="my-5">
          {data.map((item, index) => (
            <BlogsTable
              key={item?._id}
              item={item}
              index={index}
              handleDeleteBlogs={handleDeleteBlogs}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ManageBlogs;
