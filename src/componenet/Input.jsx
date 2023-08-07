import React from "react";

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

export default Input;
