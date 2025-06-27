import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Theme from "../theme/Theme";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle link clicks to close mobile menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Check if page is scrolled for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nav items
  const navItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Pricing", link: "/pricing" },
    {
      title: "Products",
      link: "/products",
      dropdown: [
        { title: "Electronics", link: "/products/electronics" },
        { title: "Clothing", link: "/products/clothing" },
        { title: "Home & Living", link: "/products/home-living" },
      ],
    },
    { title: "Contact", link: "/contact" },
  ];

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 
      ${isScrolled ? "shadow-md py-4" : "py-4"} 
      bg-white dark:bg-gray-900 text-gray-800 dark:text-white`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="flex-grow flex justify-center">
            <DesktopNav
              navItems={navItems}
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
              handleLinkClick={handleLinkClick}
            />
          </div>

          {/* Mobile menu controls */}
          <div className="md:hidden flex items-center space-x-2 sm:space-x-4">
            <Theme />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <MobileNav
        isOpen={isOpen}
        navItems={navItems}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
        handleLinkClick={handleLinkClick}
      />
    </nav>
  );
}
