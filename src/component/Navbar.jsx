import { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const links = [
    { name: "Home", to: "#home" },
    { name: "Feature", to: "#feature" },
    { name: "Portfolio", to: "#portfolio" },
    { name: "Resume", to: "#resume" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map(link => document.querySelector(link.to));
      sections.forEach(sec => {
        if (sec) {
          const top = sec.offsetTop - 100;
          const bottom = top + sec.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(`#${sec.id}`);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply dark mode to root html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300 
      ${scrolled ? "backdrop-blur-md shadow-lg" : "bg-transparent"}
      ${darkMode ? "bg-gray-900/90" : "bg-white/70"}`}
    >
      {/* Desktop */}
      <div className="hidden lg:flex justify-between items-center">
        <div className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
          Shoriful
        </div>
        <ul className="flex space-x-6">
          {links.map(link => (
            <li key={link.name}>
              <NavHashLink
                smooth
                to={link.to}
                className={`uppercase text-lg font-medium transition-colors duration-300 ${
                  activeSection === link.to
                    ? "text-red-500 font-bold underline underline-offset-4"
                    : darkMode
                    ? "text-gray-200 hover:text-red-400"
                    : "text-gray-800 hover:text-red-400"
                }`}
              >
                {link.name}
              </NavHashLink>
            </li>
          ))}
        </ul>

      <div>
           {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`mr-4 px-3 py-1 rounded-md border text-sm transition-colors duration-300 ${
            darkMode ? "bg-white text-gray-800" : "bg-gray-800 text-white"
          }`}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        {/* Resume button */}
        <a
          href="https://drive.google.com/file/d/1oCH5YXUfu4jZjrcpQrV7Zura9Jt5Fyp7/view?usp=sharing"
          download
          className="px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition-transform duration-300"
        >
          Resume
        </a>
      </div>

       
      </div>

      {/* Mobile: Logo + Resume + Hamburger + Dark Mode */}
      <div className="flex lg:hidden justify-between items-center">
        <div className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
          Shoriful
        </div>
        <a
          href="https://drive.google.com/file/d/1oCH5YXUfu4jZjrcpQrV7Zura9Jt5Fyp7/view?usp=sharing"
          download
          className="px-3 py-1 rounded-md font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm"
        >
          Resume
        </a>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-2xl font-bold focus:outline-none ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-2 py-1 rounded-md border text-xs transition-colors duration-300 ${
              darkMode ? "bg-white text-gray-800" : "bg-gray-800 text-white"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul
          className={`lg:hidden flex flex-col mt-3 space-y-2 text-center ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {links.map(link => (
            <li key={link.name}>
              <NavHashLink
                smooth
                to={link.to}
                className={`uppercase text-lg font-medium transition-colors duration-300 ${
                  activeSection === link.to
                    ? "text-red-500 font-bold underline underline-offset-4"
                    : darkMode
                    ? "hover:text-red-400 text-gray-200"
                    : "hover:text-red-400 text-gray-800"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavHashLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
