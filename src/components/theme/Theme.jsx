import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon } from "lucide-react";
import { toggleTheme } from "../../redux/slices/themeSlice";

const Theme = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
      ) : (
        <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
      )}
    </button>
  );
};

export default Theme;
