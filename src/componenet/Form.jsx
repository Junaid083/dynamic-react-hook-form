import React from "react";
import { useForm, Controller } from "react-hook-form";

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const validationRules = {
    email: {
      required: "Product Name is required",
    },
    Password: {
      required: "Password is required",
    },
    Comments: {
      required: "Comments is required",
    },
  };
  const onSubmit = async (data) => {
    console.log("Data", data);
  };
  return (
    <>
      <h1>Form Here</h1>
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <Controller
          name="Email"
          control={control}
          rules={validationRules.email}
          render={({ field }) => (
            <>
              {/* <Label left="text-left">Email</Label> */}
              <lable left="text-left">Email</lable>

              <input
                placeholder="Email"
                type="email"
                {...field}
                value={field.value || ""}
                className={`form-input block w-full mt-1 mb-2 border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 flex-grow-1 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required </span>
              )}
            </>
          )}
        />
        <Controller
          name="Password"
          control={control}
          rules={validationRules.Password}
          render={({ field }) => (
            <>
              <lable left="text-left">Password</lable>
              <input
                placeholder="Password"
                type="password"
                {...field}
                value={field.value || ""}
                className={`form-input block w-full mt-1 mb-2 border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 flex-grow-1 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md ${
                  errors.Password ? "border-red-500" : ""
                }`}
              />
              {errors.Password && (
                <span className="text-red-500 text-sm">
                  Password is required
                </span>
              )}
            </>
          )}
        />

        <Controller
          name="Comments"
          control={control}
          rules={validationRules.Comments}
          render={({ field }) => (
            <>
              <lable left="text-left">Comments</lable>
              <textarea
                placeholder="Comments"
                // type="text"
                {...field}
                className={`form-input block w-full h-40 mt-1 mb-2 border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 flex-grow-1 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md ${
                  errors.description ? "border-red-500" : ""
                }`}
              />
              {errors.Comments && (
                <span className="text-red-500 text-sm">
                  Comments are required
                </span>
              )}
            </>
          )}
        />

        <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <button
            type="button"
            className="px-8 py-2 text-xs font-bold text-blue-500 dark:text-white uppercase bg-transparent dark:hover:bg-gray-800 border border-blue-500 dark:border-white hover:text-blue-700 dark:hover:text-white hover:border-blue-700 dark:hover:border-white rounded-md"
            // onClick={() => closeModel(false)}
          >
            Cancel
          </button>

          <button
            className="inline-flex justify-center px-3 py-2 ml-3 text-sm font-medium text-white bg-blue-500 border border-transparent shadow-sm rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            // disabled={isLoading}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
