import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex items-center gap-0.5 sm:gap-1">
        <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Nova
        </span>
        <span className="text-xl sm:text-2xl font-extrabold text-gray-800 dark:text-white">
          Space
        </span>
      </Link>
    </div>
  );
}
