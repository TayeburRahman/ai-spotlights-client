import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import ReactQuill from "react-quill";
import Swal from "sweetalert2";
import Button from "../components/Button";
import "react-quill/dist/quill.snow.css";
import { baseUrl } from "../config/Url";

const UpdateBlog = () => {
  const blogDetails = useLoaderData();

  const {
    _id,
    title,
    subtitle,
    description,
    tags,
    toolsImage,
    ratings,
    websiteLink,
    facebookLink,
    discordLink,
    twitterLink,
    linkedinLink,
    videoReviewLink,
    youtubeLink,
  } = blogDetails.data;

  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setValue,
  } = useForm();

  useEffect(() => {
    register("description", {
      required: description.length >= 50 ? false : true,
      minLength: 50,
    });
  }, [register]);

  const onSubmit = async (data) => {
    try {
      const response = await axiosSecure.put(`${baseUrl}/api/v1/blogs/${_id}`, data);
      if (response.status === 200) {
        navigate("/blogs");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your blog has been successfully updated.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire(
          "Error",
          "An error occurred while updating the blog. Please try again.",
          "error"
        );
      }
    } catch (error) {
      Swal.fire(
        "Error",
        "An error occurred while updating the blog. Please try again.",
        "error"
      );
    }
  };

  return (
    <main className="flex items-center justify-center py-10">
      <div className="shadow-xl rounded p-10 md:w-[70%]">
        <h1 className="text-2xl mb-5 text-center font-bold">
          Update Your Tool
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Tools Title:</label>
            <input
              type="text"
              defaultValue={title}
              {...register("title", {
                required: title.length > 0 ? false : true,
              })}
              className="bg-cyprus/90  dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
            />
            {errors.title && (
              <p className="text-red-500 text-xs italic">Title is required.</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Subtitle:</label>
            <input
              type="text"
              defaultValue={subtitle}
              {...register("subtitle", {
                required: subtitle.length > 0 ? false : true,
              })}
              className="bg-cyprus/90  dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
            />
            {errors.subtitle && (
              <p className="text-red-500 text-xs italic">
                Subtitle is required.
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Description:</label>
            <ReactQuill
              theme="snow"
              defaultValue={description}
              onChange={(data) => {
                setValue("description", data);
                if (description.length >= 50 || data.length >= 50) {
                  clearErrors("description");
                }
              }}
              className="shadow rounded w-full appearance-none focus:outline-none min-h-[200px]"
              placeholder="Enter your description.."
            />
            {errors.description && (
              <p className="text-red-500 text-xs italic">
                Description must be at least 50 characters.
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Tags:</label>
            <input
              type="text"
              defaultValue={tags}
              {...register("tags", {
                required: tags.length > 0 ? false : true,
              })}
              className="bg-cyprus/90  dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
            />
            {errors.tags && (
              <p className="text-red-500 text-xs italic">Tags is required.</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Image URL:</label>
            <input
              type="text"
              defaultValue={toolsImage}
              className="bg-cyprus/90  dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              {...register("toolsImage", { required: true })}
            />
            {errors.toolsImage && (
              <p className="text-red-500 text-xs italic">
                Image URL is required.
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Website Link:
            </label>
            <input
              type="text"
              defaultValue={websiteLink}
              className="bg-cyprus/90  dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              {...register("websiteLink", { required: true })}
            />
            {errors.websiteLink && (
              <p className="text-red-500 text-xs italic">
                Website Link is required.
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Video Review Link:
            </label>
            <input
              type="text"
              defaultValue={videoReviewLink}
              className="bg-cyprus/90 dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              placeholder="Paste the embed URL here"
              {...register("videoReviewLink")}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              YouTube Link:
            </label>
            <input
              type="text"
              defaultValue={youtubeLink}
              className="bg-cyprus/90  dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              {...register("youtubeLink")}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Facebook Link:
            </label>
            <input
              type="text"
              defaultValue={facebookLink}
              className="bg-cyprus/90 dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              {...register("facebookLink")}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Discord Link:
            </label>
            <input
              type="text"
              defaultValue={discordLink}
              className="bg-cyprus/90 dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              {...register("discordLink")}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              LinkedIn Link:
            </label>
            <input
              type="text"
              defaultValue={linkedinLink}
              className="bg-cyprus/90 dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              {...register("linkedinLink")}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Twitter Link:
            </label>
            <input
              type="text"
              defaultValue={twitterLink}
              className="bg-cyprus/90 dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              {...register("twitterLink")}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Ratings:</label>
            <input
              type="number"
              defaultValue={ratings}
              className="bg-cyprus/90  dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              {...register("ratings", { valueAsNumber: true, min: 0 })}
            />
            {errors.ratings && (
              <p className="text-red-500 text-xs italic">
                Ratings is required.
              </p>
            )}
          </div>

          <Button size="full">Update</Button>
        </form>
      </div>
    </main>
  );
};

export default UpdateBlog;
