import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import Button from "../components/Button";
import "react-quill/dist/quill.snow.css";
import { baseUrl } from "../config/Url";

const BlogsForm = () => {
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm();

  useEffect(() => {
    register("description", { required: true, minLength: 50 });
  }, [register]);

  const descriptionContent = watch("description");

  const onSubmit = async (data) => {
    try {
      const response = await axiosSecure.post(`${baseUrl}/api/v1/blogs`, data);
      reset();
      if (response.status === 200) {
        navigate("/blogs");
        Swal.fire({
          icon: "success",
          title: "Tool added to the blog post!",
          timer: 1500,
        });
      } else {
        Swal.fire(
          "Error",
          "Failed to add tool to the blog post. Please try again.",
          "error"
        );
      }
    } catch (error) {
      Swal.fire(
        "Error",
        "Failed to add tool to the blog post. Please try again.",
        "error"
      );
    }
  };

  return (
    <main className="flex items-center justify-center py-10">
      <div className="shadow-xl rounded p-10 md:w-[70%]">
        <h1 className="text-2xl mb-5 text-center font-bold">
          Publish a New Blog
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Tools Title:</label>
            <input
              type="text"
              className="bg-cyprus/90  dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-red-500 text-xs italic">Title is required.</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Subtitle:</label>
            <input
              type="text"
              {...register("subtitle", { required: true })}
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
              value={descriptionContent}
              onChange={(data) => {
                setValue("description", data);
              }}
              className="shadow rounded w-full appearance-none focus:outline-none min-h-[200px]"
              placeholder="Enter your description.."
            />
            {errors.description && (
              <p className="text-red-500 text-xs italic">
                {descriptionContent && descriptionContent.length > 50
                  ? null
                  : "Description is required and must be at least 50 characters."}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Tags:</label>
            <input
              type="text"
              {...register("tags", { required: true })}
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
              className="bg-cyprus/90 dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              {...register("twitterLink")}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Ratings:</label>
            <input
              type="number"
              defaultValue="4.9"
              className="bg-cyprus/90  dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              {...register("ratings", { valueAsNumber: true, min: 0 })}
            />
            {errors.ratings && (
              <p className="text-red-500 text-xs italic">
                Ratings is required.
              </p>
            )}
          </div>

          <Button size="full">Publish</Button>
        </form>
      </div>
    </main>
  );
};

export default BlogsForm;
