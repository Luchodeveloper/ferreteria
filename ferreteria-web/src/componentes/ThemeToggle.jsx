import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className="w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-300"
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-xs
        ${darkMode ? "translate-x-6 bg-yellow-400" : ""}`}
      >
        {darkMode ? "🌙" : "☀"}
      </div>
    </div>
  );
}