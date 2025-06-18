// eslint-disable-next-line @typescript-eslint/naming-convention
const NoDataComponent = ({ message = "No data available." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-gray-600">
      <svg
        className="w-16 h-16 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2a10 10 0 1 1-10 10A10 10 0 0 1 12 2Zm0 18a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm-1-10h2v6h-2Zm0-3h2v2h-2Z" />
      </svg>
      <h2 className="text-lg font-semibold mt-2">{message}</h2>
    </div>
  );
};

export default NoDataComponent;