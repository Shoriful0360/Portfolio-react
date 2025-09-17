import { BiLogoTailwindCss } from "react-icons/bi";
import { FaFacebook, FaGithub, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import img from "../assets/shoriful.png";

const Home = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center px-5 lg:px-20">
      <div className="lg:flex gap-10 flex-row-reverse items-center justify-between w-full max-w-7xl">
        
        {/* Image Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="flex-1 flex justify-center"
        >
          <img
            src={img}
            alt="profile"
            className="w-60 h-60 md:w-80 md:h-80 rounded-full shadow-2xl object-center border-4 border-gradient-to-r from-[#8766BA] to-[#DE647F]"
          />
        </div>

        {/* Content Section */}
        <div
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="2000"
          className="flex-1 text-center md:text-left mt-10 md:mt-0 space-y-6"
        >
          <p className="text-lg md:text-2xl tracking-[4px] uppercase">
            Welcome to my world
          </p>

          <h1 className="text-2xl md:text-5xl font-bold">
            Hi, I'm <span className="text-pri">Shoriful Islam</span>
          </h1>

          <h1 className="text-2xl md:text-5xl font-bold">
            <span className="text-pri">a</span>{" "}
            <span className="text-black font-bold">
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

          <p className="text-gray-600 font-serif font-medium max-w-xl mx-auto md:mx-0">
            I use animation as a third dimension by which to simplify experiences
            and guide through each and every interaction. I’m not adding motion
            just to spruce things up, but doing it in ways that add real value.
          </p>

          {/* Social + Skills Section */}
          <div className="flex flex-col md:flex-row justify-between gap-10 mt-10">
            
            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="uppercase text-lg font-semibold">Find with me</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <Link to="https://www.facebook.com/profile.php?id=100020907764467">
                  <div className="w-16 h-16 border-2 flex justify-center items-center text-3xl shadow-xl rounded-lg hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white transition duration-300">
                    <FaFacebook />
                  </div>
                </Link>
                <Link to="https://github.com/Shoriful0360?tab=repositories">
                  <div className="w-16 h-16 border-2 flex justify-center items-center text-3xl shadow-xl rounded-lg hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white transition duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link to="mailto:shorifulbba0360.com?subject=Hello&body=How%20are%20you%3F">
                  <div className="w-16 h-16 border-2 flex justify-center items-center text-3xl shadow-xl rounded-lg hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white transition duration-300">
                    <TfiEmail />
                  </div>
                </Link>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="uppercase text-lg font-semibold">Best skill on</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <div className="w-16 h-16 border-2 flex justify-center items-center text-3xl shadow-xl rounded-lg hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white transition duration-300">
                  <BiLogoTailwindCss className="text-[#2FC8FF]" />
                </div>
                <div className="w-16 h-16 border-2 flex justify-center items-center text-3xl shadow-xl rounded-lg hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white transition duration-300">
                  <RiJavascriptFill className="text-yellow-500" />
                </div>
                <div className="w-16 h-16 border-2 flex justify-center items-center text-3xl shadow-xl rounded-lg hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white transition duration-300">
                  <FaReact className="text-[#58C4DC] animate-spin-slow" />
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
