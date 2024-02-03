import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import UsersTable from "../components/UsersTable";
import { baseUrl } from "../config/Url";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["manageUsers"],
    queryFn: () => axiosSecure.get(`${baseUrl}/users`).then((res) => res.data),
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

  const handleMakeAdmin = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will grant admin privileges to the user. Do you want to proceed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, make admin",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.patch(`/users/make-admin/${id}`);
          if (response.status === 200) {
            refetch();
            Swal.fire({
              title: "Admin Privileges Granted!",
              text: "The user has been successfully granted admin privileges.",
              icon: "success",
            });
          } else {
            Swal.fire(
              "Error",
              "Failed to grant admin privileges to the user. Please try again.",
              "error"
            );
          }
        } catch (error) {
          Swal.fire(
            "Error",
            "An error occurred while granting admin privileges to the user. Please try again.",
            "error"
          );
        }
      }
    });
  };

  const handleMakeUser = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will remove admin privileges from the user. Do you want to proceed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove admin privileges",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.patch(`/users/remove-admin/${id}`);
          if (response.status === 200) {
            refetch();
            Swal.fire({
              title: "Admin Privileges Removed!",
              text: "The user's admin privileges have been successfully removed.",
              icon: "success",
            });
          } else {
            Swal.fire(
              "Error",
              "Failed to remove admin privileges from the user. Please try again.",
              "error"
            );
          }
        } catch (error) {
          Swal.fire(
            "Error",
            "An error occurred while removing admin privileges from the user. Please try again.",
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
            <th>User Name</th>
            <th>Users Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="my-5">
          {data.map((item, index) => (
            <UsersTable
              key={item?._id}
              item={item}
              index={index}
              handleMakeAdmin={handleMakeAdmin}
              handleMakeUser={handleMakeUser}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ManageUsers;
