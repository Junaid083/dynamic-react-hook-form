import React from "react";
import Widget from "./Widget";
import { useForm, Controller } from "react-hook-form";

const Form = () => {
  const { control, handleSubmit } = useForm();
  const dynamicForm = {
    firstName: {
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
      defaultValue: "",
      rules: {
        required: true,
      },
    },
    lastName: {
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
      defaultValue: "",
      rules: {
        required: true,
      },
    },
    gender: {
      label: "Gender",
      type: "radio",
      options: ["Male", "Female"],
      defaultValue: "",
      rules: {
        required: true,
      },
    },
    profession: {
      label: "Profession",
      type: "dropdown",
      options: ["Front-end Developer", "Back-end Developer", "Devops Engineer"],
      defaultValue: "",
      rules: {
        required: true,
      },
    },

    social: [
      {
        label: "Facebook",
        type: "text",
        defaultValue: "",
        rules: {
          required: true,
        },
      },
      {
        label: "Twitter",
        type: "text",
        defaultValue: "",
        rules: {
          required: true,
        },
      },
    ],
    contact: [
      {
        label: "Contact 1",
        type: "number",
        defaultValue: "",
        rules: {
          required: true,
        },
      },
      {
        label: "Contact 2",
        type: "number",
        defaultValue: "",
        rules: {
          required: true,
        },
      },
    ],
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const Input = ({ value, onChange, type, options, ...rest }) => {
    switch (type) {
      case "text":
        return (
          <input
            className={`form-input block w-96 h-10 px-4 mt-1 mb-2 border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 flex-grow-1 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md `}
            type="text"
            value={value}
            onChange={onChange}
            {...rest}
          />
        );
      case "number":
        return (
          <input
            className={`form-input block w-96 h-10 px-4 mt-1 mb-2 border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 flex-grow-1 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md `}
            type="number"
            value={value}
            onChange={onChange}
            {...rest}
          />
        );
      case "radio":
        return options.map((option, index) => (
          <label className="px-2" key={index}>
            <input
              className="w-4 h-4text-blue-600 border-gray-300 form-radio focus:ring-blue-500"
              type="radio"
              value={option}
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
              {...rest}
            />
            {option}
          </label>
        ));
      case "dropdown":
        return (
          <select
            className={`block w-full h-8 mb-4 border-gray-300 text-black dark:bg-gray-800 dark:border-gray-700 form-select focus:ring-blue-500 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            {...rest}
          >
            <option value="">Select an option</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "checkbox":
        return (
          <label>
            <input
              type="checkbox"
              checked={value}
              className="w-4 h-4 mb-4 text-blue-600 border-gray-300 rounded form-checkbox focus:ring-blue-500"
              onChange={(e) => onChange(e.target.checked)}
              {...rest}
            />
            {rest.checkboxLabel}
          </label>
        );
      default:
        return null;
    }
  };

  return (
    <Widget title="React Hook Form" description={<span></span>}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* {formInputs} */}

        {Object.keys(dynamicForm).map((e) => {
          const { rules, defaultValue, label, type, options } = dynamicForm[e];

          if (Array.isArray(dynamicForm[e])) {
            // For array fields like "social" and "contact"
            return (
              <section key={e}>
                {dynamicForm[e].map((item, index) => {
                  const { label, type, defaultValue, rules } = item;
                  const fieldName = `${e}[${index}].${label}`; // Create a field name like "social[0]" or "contact[1]"

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
                      <Input
                        type={type}
                        options={options}
                        {...field}
                        {...dynamicForm[e]}
                      />
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
