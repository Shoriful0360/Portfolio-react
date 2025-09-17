import { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <nav
      className={`fixed  bg-white/70 top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Desktop */}
      <div className="hidden lg:flex justify-between items-center">
        <div className="text-2xl font-bold">Shoriful</div>
        <ul className="flex space-x-6">
          {links.map(link => (
            <li key={link.name}>
              <NavHashLink
                smooth
                to={link.to}
                className={`uppercase text-lg font-medium transition-colors duration-300 ${
                  activeSection === link.to
                    ? "text-red-500 font-bold underline underline-offset-4"
                    : "text-gray-800 hover:text-red-400"
                }`}
              >
                {link.name}
              </NavHashLink>
            </li>
          ))}
        </ul>
        <a
          href="https://drive.google.com/file/d/1oCH5YXUfu4jZjrcpQrV7Zura9Jt5Fyp7/view?usp=sharing"
          download
          className="px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition-transform duration-300"
        >
          Resume
        </a>
      </div>

      {/* Mobile: Logo + Resume + Hamburger */}
      <div className="flex lg:hidden justify-between items-center">
        <div className="text-2xl font-bold">Shoriful</div>
        <a
          href="https://drive.google.com/file/d/1oCH5YXUfu4jZjrcpQrV7Zura9Jt5Fyp7/view?usp=sharing"
          download
          className="px-3 py-1 rounded-md font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm"
        >
          Resume
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl font-bold focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col mt-3 space-y-2 text-center">
          {links.map(link => (
            <li key={link.name}>
              <NavHashLink
                smooth
                to={link.to}
                className={`uppercase text-lg font-medium transition-colors duration-300 ${
                  activeSection === link.to
                    ? "text-red-500 font-bold underline underline-offset-4"
                    : "text-gray-800 hover:text-red-400"
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
