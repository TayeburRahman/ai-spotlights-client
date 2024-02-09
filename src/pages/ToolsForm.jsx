import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import categories from "../../public/category.json";
import Button from "../components/Button";
import { baseUrl } from "../config/Url";
import useAdmin from "../hooks/useAdmin";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../providers/AuthProvider";

import Select from 'react-select';
import makeAnimated from 'react-select/animated';


import React from 'react';

const animatedComponents = makeAnimated();

const ToolsForm = () => {
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');

  const [axiosSecure] = useAxiosSecure();
  const [isAdmin] = useAdmin();
  const { user } = useContext(AuthContext);
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
      const response = await axiosSecure.post(`${baseUrl}/api/v1/tools`, data);
      reset();
      if (response.status === 200) {
        {
          isAdmin
            ? navigate("/dashboard/manage-tools")
            : navigate("/dashboard/my-tools");
        }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your tool has been successfully added.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire(
          "Error",
          "An error occurred while adding the tool. Please try again.",
          "error"
        );
      }
    } catch (error) {
      Swal.fire(
        "Error",
        "An error occurred while adding the tool. Please try again.",
        "error"
      );
    }
  };

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <main className="flex items-center justify-center py-10">
      <div className="shadow-xl rounded p-10 md:w-[70%]">
        <h1 className="text-2xl mb-5 text-center font-bold">Add a New Tool</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">User Name:</label>
              <input
                type="text"
                className="bg-cyprus/90  dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
                defaultValue={user?.displayName}
                readOnly
                {...register("userName", { required: true })}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                User Email:
              </label>
              <input
                type="text"
                className="bg-cyprus/90  dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
                defaultValue={user?.email}
                readOnly
                {...register("userEmail", { required: true })}
              />
            </div>
          </div>

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

          {/* Meta informations */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Meta Titile:</label>
            <input
              type="text"
              {...register("metaTitle", { required: true })}
              className="bg-cyprus/90  dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)}
            />
            {errors.metaTitle && (
              <p className="text-red-500 text-xs italic">
                Meta Titile is required.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Meta Description:</label>
            <input
              type="text"
              {...register("metaDescription", { required: true })}
              className="bg-cyprus/90  dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
            />
            {errors.metaDescription && (
              <p className="text-red-500 text-xs italic">
                Meta Description is required.
              </p>
            )}
          </div>
          {/* Meta informations */}

          {/* <Helmet>
            <title>Ai-Spotlight {metaTitle}</title>
            <meta name="description" content={metaDescription} />
          </Helmet> */}


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
            <label className="block text-sm font-bold mb-2">Category:</label>
            <select
              className="bg-cyprus/90 dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              {...register("category", { required: true })}
            >
              <option value="" disabled selected>
                Select a category
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category} className="capitalize">
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-xs italic">
                Category is required.
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Tags:</label>
            {/* <input
              type="text"
              {...register("tags", { required: true })}
              className="bg-cyprus/90  dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
            /> */}

            <Select
              {...register("tags", { required: true })}
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={[options[4], options[5]]}
              isMulti
              options={options}
            />


            {errors.tags && (
              <p className="text-red-500 text-xs italic">Tags is required.</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Logo URL:</label>
            <input
              type="text"
              className="bg-cyprus/90  dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              {...register("toolsLogo", { required: true })}
            />
            {errors.toolsLogo && (
              <p className="text-red-500 text-xs italic">
                Logo URL is required.
              </p>
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
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Favourite:</label>
            <input
              type="number"
              defaultValue="0"
              className="bg-cyprus/90  dark:bg-white shadow rounded py-2 px-4 w-full appearance-none focus:outline-none"
              {...register("favourite", { valueAsNumber: true, min: 0 })}
            />
            {errors.favourite && (
              <p className="text-red-500 text-xs italic">
                Favourite is required.
              </p>
            )}
          </div>

          <Button size="full">Submit</Button>
        </form>
      </div>
    </main>
  );
};

export default ToolsForm;
