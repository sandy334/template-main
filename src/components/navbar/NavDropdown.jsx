import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavDropdown({
  item,
  index,
  activeDropdown,
  toggleDropdown,
  handleLinkClick,
  isMobile,
}) {
  return (
    <div>
      <button
        onClick={() => toggleDropdown(index)}
        className={`flex items-center ${
          isMobile
            ? "w-full justify-between px-2 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
            : "px-2 py-1 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
        }`}
      >
        {item.title}
        <ChevronDown size={14} className={isMobile ? "" : "ml-1"} />
      </button>

      {activeDropdown === index && (
        <div
          className={
            isMobile
              ? "pl-3 ml-2 border-l-2 border-gray-200 dark:border-gray-700"
              : "absolute z-10 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 dark:border dark:border-gray-700"
          }
        >
          {item.dropdown.map((dropItem, idx) => (
            <Link
              key={idx}
              to={dropItem.link}
              onClick={() => {
                toggleDropdown(null);
                handleLinkClick();
              }}
              className={
                isMobile
                  ? "block px-2 py-1.5 text-sm rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }
            >
              {dropItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
