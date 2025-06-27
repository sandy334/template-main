import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";
import Theme from "../theme/Theme";

export default function DesktopNav({
  navItems,
  activeDropdown,
  toggleDropdown,
  handleLinkClick,
}) {
  return (
    <div className="hidden md:flex items-center space-x-6">
      {navItems.map((item, index) => (
        <div key={index} className="relative">
          {item.dropdown ? (
            <NavDropdown
              item={item}
              index={index}
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
              handleLinkClick={handleLinkClick}
              isMobile={false}
            />
          ) : (
            <Link
              to={item.link}
              className="px-2 py-1 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
      <Theme />
    </div>
  );
}
