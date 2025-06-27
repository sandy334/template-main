import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";

export default function MobileNav({
  isOpen,
  navItems,
  activeDropdown,
  toggleDropdown,
  handleLinkClick,
}) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t mt-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="px-1 sm:px-2 pt-1 pb-2 space-y-0.5 sm:space-y-1">
        {navItems.map((item, index) => (
          <div key={index}>
            {item.dropdown ? (
              <NavDropdown
                item={item}
                index={index}
                activeDropdown={activeDropdown}
                toggleDropdown={toggleDropdown}
                handleLinkClick={handleLinkClick}
                isMobile={true}
              />
            ) : (
              <Link
                to={item.link}
                onClick={handleLinkClick}
                className="block px-2 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
