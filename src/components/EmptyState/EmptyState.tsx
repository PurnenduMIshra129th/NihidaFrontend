import { useNavigate } from "react-router";

import { IEmptyStateProps } from "../../types/component/component.types";
import Button from "../Button/Button";
// eslint-disable-next-line @typescript-eslint/naming-convention
const EmptyState = (props: IEmptyStateProps) => {
  const { routingPath , buttonText ='Create New' } = props;
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
      <div className="text-center max-w-md">
        <svg
          className="w-20 h-20 mx-auto text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2a10 10 0 1 1-10 10A10 10 0 0 1 12 2Zm0 18a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm-1-10h2v6h-2Zm0-3h2v2h-2Z" />
        </svg>
        <h1 className="text-2xl font-semibold mt-4">No Data Available</h1>
        <p className="text-gray-500 mt-2">
          We couldn't find any data. Try refreshing or check back later.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Button
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            name="Refresh Page"
            onClick={() => window.location.reload()}
          />

          <Button
            className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            name="Go Back"
            onClick={() => navigate(-1)}
          />
          {routingPath && (
            <Button
              className="px-6 py-2 bg-lime-500 text-white rounded"
              name={buttonText}
              onClick={() => navigate(routingPath)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
