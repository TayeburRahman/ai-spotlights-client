import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import ToolsTable from "../components/ToolsTable";
import { baseUrl } from "../config/Url";

const ManageTools = () => {
  const [axiosSecure] = useAxiosSecure();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["manageTools"],
    queryFn: () => axiosSecure.get(`${baseUrl}/api/v1/tools`).then((res) => res.data),
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

  const handleApproveTools = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will approve the tool. Do you want to proceed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, approve it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.patch(
            `${baseUrl}/api/v1/tools/approve-tools/${id}`
          );
          if (response.status === 200) {
            refetch();
            Swal.fire({
              title: "Approved!",
              text: "The tool has been successfully approved.",
              icon: "success",
            });
          } else {
            Swal.fire(
              "Error",
              "Failed to approve the tool. Please try again.",
              "error"
            );
          }
        } catch (error) {
          Swal.fire(
            "Error",
            "An error occurred while approving the tool. Please try again.",
            "error"
          );
        }
      }
    });
  };

  const handleDenyTools = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will deny the tool. Do you want to proceed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, deny it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.patch(`${baseUrl}/api/v1/tools/deny-tools/${id}`);
          if (response.status === 200) {
            refetch();
            Swal.fire({
              title: "Denied!",
              text: "The tool has been successfully denied.",
              icon: "success",
            });
          } else {
            Swal.fire(
              "Error",
              "Failed to deny the tool. Please try again.",
              "error"
            );
          }
        } catch (error) {
          Swal.fire(
            "Error",
            "An error occurred while denying the tool. Please try again.",
            "error"
          );
        }
      }
    });
  };

  const handleVerifyTools = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will verify the tool. Do you want to proceed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, verify it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.patch(`${baseUrl}/api/v1/tools/verify-tools/${id}`);
          if (response.status === 200) {
            refetch();
            Swal.fire({
              title: "Verified!",
              text: "The tool has been successfully verified.",
              icon: "success",
            });
          } else {
            Swal.fire(
              "Error",
              "Failed to verify the tool. Please try again.",
              "error"
            );
          }
        } catch (error) {
          Swal.fire(
            "Error",
            "An error occurred while verifying the tool. Please try again.",
            "error"
          );
        }
      }
    });
  };

  const handleUnverifyTools = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will unverify the tool. Do you want to proceed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, unverify it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.patch(
            `${baseUrl}/api/v1/tools/unverify-tools/${id}`
          );
          if (response.status === 200) {
            refetch();
            Swal.fire({
              title: "Unverified!",
              text: "The tool has been successfully unverified.",
              icon: "success",
            });
          } else {
            Swal.fire(
              "Error",
              "Failed to unverify the tool. Please try again.",
              "error"
            );
          }
        } catch (error) {
          Swal.fire(
            "Error",
            "An error occurred while unverifying the tool. Please try again.",
            "error"
          );
        }
      }
    });
  };

  const handleFeatureTools = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will feature the tool. Do you want to proceed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, feature it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.patch(
            `${baseUrl}/api/v1/tools/feature-tools/${id}`
          );
          if (response.status === 200) {
            refetch();
            Swal.fire({
              title: "Featured!",
              text: "The tool has been successfully featured.",
              icon: "success",
            });
          } else {
            Swal.fire(
              "Error",
              "Failed to feature the tool. Please try again.",
              "error"
            );
          }
        } catch (error) {
          Swal.fire(
            "Error",
            "An error occurred while featuring the tool. Please try again.",
            "error"
          );
        }
      }
    });
  };

  const handleUnfeatureTools = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will unfeature the tool. Do you want to proceed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, unfeature it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.patch(
            `${baseUrl}/api/v1/tools/unfeature-tools/${id}`
          );
          if (response.status === 200) {
            refetch();
            Swal.fire({
              title: "Unfeatured!",
              text: "The tool has been successfully unfeatured.",
              icon: "success",
            });
          } else {
            Swal.fire(
              "Error",
              "Failed to unfeature the tool. Please try again.",
              "error"
            );
          }
        } catch (error) {
          Swal.fire(
            "Error",
            "An error occurred while unfeaturing the tool. Please try again.",
            "error"
          );
        }
      }
    });
  };

  return (
    <main className="min-h-[calc(100vh-66px)] overflow-x-scroll">
      <table className="w-full">
        <thead>
          <tr className="text-left shadow-lg rounded">
            <th>Id</th>
            <th>Tools Title</th>
            <th>A. Status</th>
            <th>V. Status</th>
            <th>A. Action</th>
            <th>V. Action</th>
            <th>Featured</th>
            <th>Update</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody className="my-5">
          {data.map((item, index) => (
            <ToolsTable
              key={item?._id}
              item={item}
              index={index}
              handleApproveTools={handleApproveTools}
              handleDenyTools={handleDenyTools}
              handleVerifyTools={handleVerifyTools}
              handleUnverifyTools={handleUnverifyTools}
              handleFeatureTools={handleFeatureTools}
              handleUnfeatureTools={handleUnfeatureTools}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ManageTools;
