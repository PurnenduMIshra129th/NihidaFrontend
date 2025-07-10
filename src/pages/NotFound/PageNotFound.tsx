import { Link } from "react-router";

// eslint-disable-next-line @typescript-eslint/naming-convention
const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-300 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</h2>
        <p className="text-gray-500 mt-2">
          The page you’re looking for doesn’t exist or might have been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;