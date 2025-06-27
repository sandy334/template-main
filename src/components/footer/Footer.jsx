import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-8 bg-indigo-50 dark:bg-gray-900 border-t border-indigo-200 dark:border-gray-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Company
            </h3>
            <div className="space-y-2">
              <Link
                to="/about"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Resources
            </h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
              >
                Documentation
              </a>
              <a
                href="#"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
              >
                Blog
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Connect
            </h3>
            <div className="space-y-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {currentYear} NovaSpace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
