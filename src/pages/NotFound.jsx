import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg ">
          <div className="mb-5 text-6xl font-bold">Oops!</div>
          <h1 className="mb-5 text-5xl font-bold">404 - Page Not Found</h1>
          <p className="mb-5">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="btn btn-primary btn-lg bg-teal-400 hover:bg-teal-200 hover:text-teal-800"
          >
            <FaHome className="inline-block mr-2" />
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
