import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaGithub, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import img from '../assets/shoriful.png';

const Bubble = ({ size, left, duration, delay, color }) => (
  <div
    className="absolute rounded-full opacity-30"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      left: `${left}%`,
      backgroundColor: color,
      animation: `floatBubble ${duration}s ease-in-out ${delay}s infinite`,
    }}
  ></div>
);

const Home = () => {
  // subtle bubbles
  const bubbles = Array.from({ length: 15 }).map(() => ({
    size: Math.random() * 25 + 10,
    left: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    color: "rgba(108, 122, 137, 0.15)",
  }));

  return (
    <div className=" overflow-hidden bg-[#ECF0F3] dark:bg-gray-900 transition-colors duration-500 flex justify-around ">
      <div>
        {/* Floating Bubbles */}
      {bubbles.map((b, idx) => (
        <Bubble key={idx} {...b} />
      ))}

      

      {/* Hero Content */}
      <div className="z-10 flex flex-col lg:flex-row-reverse  px-5 lg:px-20 gap-10 text-center lg:text-left">
        {/* Image */}
        <div className="lg:ml-28" data-aos="fade-up" data-aos-duration="1000">
          <img
            src={img}
            alt="Shoriful"
            className="w-80 h-80 rounded-full  shadow-2xl mx-auto lg:mx-0 object-cover"
          />
        </div>

        {/* Content */}
        <div
          className="flex-1 space-y-5 text-gray-800 dark:text-gray-200"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <p className="text-2xl tracking-[4px] uppercase">Welcome to my world</p>
          <h1 className="md:text-5xl text-3xl font-bold">
            Hi, I'm <span className="text-pri">Shoriful Islam</span>
          </h1>
          <h1 className="md:text-5xl text-3xl font-bold">
            <span className="text-pri">a </span>
            <span className="font-bold">
              <Typewriter
                words={["Developer", "Full Stack Developer", "Front End Developer"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="font-serif font-medium max-w-xl text-gray-600 dark:text-gray-400">
            I use animation as a third dimension to simplify experiences and guide every interaction.
          </p>

          {/* Social Links & Skills */}
          <div className="flex flex-col md:flex-row justify-between mt-10 gap-6">
            {/* Social */}
            <div className="space-y-4 text-xl font-medium">
              <h3 className="uppercase">Find me</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <Link to="https://www.facebook.com/profile.php?id=100020907764467">
                  <div className="w-16 h-16 flex justify-center items-center text-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white transition-all duration-300">
                    <FaFacebook />
                  </div>
                </Link>
                <Link to="https://github.com/Shoriful0360?tab=repositories">
                  <div className="w-16 h-16 flex justify-center items-center text-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white transition-all duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link to="mailto:shorifulbba0360.com?subject=Hello&body=How%20are%20you%3F">
                  <div className="w-16 h-16 flex justify-center items-center text-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white transition-all duration-300">
                    <TfiEmail />
                  </div>
                </Link>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4 text-xl font-medium">
              <h3 className="uppercase">Best Skills</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <div className="w-16 h-16 flex justify-center items-center text-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white transition-all duration-300">
                  <BiLogoTailwindCss className="text-[#2FC8FF]" />
                </div>
                <div className="w-16 h-16 flex justify-center items-center text-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white transition-all duration-300">
                  <RiJavascriptFill />
                </div>
                <div className="w-16 h-16 flex justify-center items-center text-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white transition-all duration-300">
                  <FaReact className="text-[#58C4DC] animate-spin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
