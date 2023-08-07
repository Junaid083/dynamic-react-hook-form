import React from "react";
import Widget from "./Widget";
import { useForm, Controller } from "react-hook-form";
import Input from "./Input";
const Form = ({ dynamicForm, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Error = ({ children }) => <p style={{ color: "red" }}>{children}</p>;
  return (
    <Widget title="React Hook Form" description={<span></span>}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(dynamicForm).map((e) => {
          const { rules, defaultValue, label, type, options } = dynamicForm[e];

          if (Array.isArray(dynamicForm[e])) {
            return (
              <section key={e}>
                {dynamicForm[e].map((item, index) => {
                  const { label, type, defaultValue, rules } = item;
                  const fieldName = `${e}[${index}].${label}`;

                  return (
                    <div key={fieldName}>
                      <label>{label}</label>
                      <Controller
                        name={fieldName}
                        control={control}
                        rules={rules}
                        defaultValue={defaultValue}
                        render={({ field }) => (
                          <div>
                            <Input type={type} {...field} {...item} />
                            {errors[e] && <Error>This field is required</Error>}
                          </div>
                        )}
                      />
                    </div>
                  );
                })}
              </section>
            );
          }

          // For non-array fields
          return (
            <section key={e}>
              <label>{label}</label>
              <Controller
                name={e}
                control={control}
                rules={rules}
                defaultValue={defaultValue}
                render={({ field }) => (
                  <div>
                    {type === "dropdown" ? (
                      <select
                        className={`block w-full h-8 mb-4 border-gray-300 text-white dark:bg-gray-800 dark:border-gray-700 form-select focus:ring-blue-500 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md`}
                        {...field}
                      >
                        {options.map((option) => (
                          <option className="px-2" key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <>
                        <Input
                          type={type}
                          options={options}
                          {...field}
                          {...dynamicForm[e]}
                        />
                        {errors[e] && <Error>This field is required</Error>}
                      </>
                    )}
                  </div>
                )}
              />
            </section>
          );
        })}

        <button
          type="submit"
          className="inline-flex justify-center px-3 py-2 ml-3 text-sm font-medium text-white bg-blue-500 border border-transparent shadow-sm rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </Widget>
  );
};

export default Form;
