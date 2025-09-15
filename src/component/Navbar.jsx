import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: "Home", to: "#home" },
    { name: "Feature", to: "#feature" },
    { name: "Portfolio", to: "#portfolio" },
    { name: "Resume", to: "#Resume" }
  ];

  const renderLink = (link) => {
    const isActive = location.hash === link.to; // check if current hash matches
    return (
      <li key={link.name}>
        <NavHashLink
          smooth
          to={link.to}
          className={`uppercase text-xl px-2 py-1 transition-colors duration-300 ${
            isActive ? "text-red-500 font-bold underline underline-offset-4 un" : "text-gray-800 hover:text-red-400"
          }`}
        >
          {link.name}
        </NavHashLink>
      </li>
    );
  };

  return (
    <div id="navbar" className="fixed z-10 left-0 right-0 backdrop-blur-md px-3">
      <div className="navbar flex justify-between items-center py-2">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://i.ibb.co/BsBy9gr/502e5265-f4e9-403f-b2c6-129ecf002eec.jpg"
            alt=""
            className="w-16 h-16 rounded-full object-cover object-center"
          />
          <span className="text-2xl font-bold hidden md:block">Shoriful</span>
        </div>

        {/* Links */}
        <ul className="hidden lg:flex space-x-7">
          {links.map(renderLink)}
        </ul>

        {/* Download Resume */}
        <a
          download="My_Resume.pdf"
          href="https://drive.google.com/file/d/1oCH5YXUfu4jZjrcpQrV7Zura9Jt5Fyp7/view?usp=sharing"
          className="md:text-xl hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white hover:animate-bounce shadow-2xl py-2 md:px-4 px-2 rounded-md text-pri font-semibold uppercase"
        >
          Download Resume
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden mt-3">
        <ul className="menu menu-compact space-y-2">
          {links.map(renderLink)}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
