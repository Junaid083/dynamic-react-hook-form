const Widget = ({ title, description, right, children }) => {
  return (
    <div className="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      {(title || description || right) && (
        <div className="flex  text-center items-center justify-center mb-6">
          <div className="flex flex-col">
            <div className="text-lg text-center font-light text-gray-400">
              {title}
            </div>

            <div className="text-sm font-bold">{description}</div>
          </div>

          {right}
        </div>
      )}

      {children}
    </div>
  );
};

export default Widget;
