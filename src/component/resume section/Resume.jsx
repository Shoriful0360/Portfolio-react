import { useState } from "react";
import Education from "./Education";
import Professional from "./Professional";
import Experience from "./Experience";


const Resume = () => {
    const [visible,setVisible]=useState("education")
    return (
        <div id="resume" className="mt-4">
           <h3 className="text-red-600 text-center">1+ Years of experiences</h3> 
           <h1 className="text-4xl font-serif font-extrabold text-center mt-4">My Resume</h1>
           {/* parents div */}
         <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 my-10">
  {/* Education Button */}
  <button
    onClick={() => setVisible("education")}
    className={`${visible === "education"
        ? "bg-indigo-600 text-white shadow-2xl"
        : "bg-white text-indigo-600 border border-indigo-600"
      } px-4 py-3 rounded-xl uppercase font-bold text-2xl transition-all duration-300 w-full sm:w-auto`}
  >
    Education
  </button>

  {/* Professional Button */}
  <button
    onClick={() => setVisible("professional")}
    className={`${visible === "professional"
        ? "bg-indigo-600 text-white shadow-2xl"
        : "bg-white text-indigo-600 border border-indigo-600"
      } px-4 py-3 rounded-xl uppercase font-bold text-2xl transition-all duration-300 w-full sm:w-auto`}
  >
    Professional
  </button>

  {/* Experience Button */}
  <button
    onClick={() => setVisible("experience")}
    className={`${visible === "experience"
        ? "bg-indigo-600 text-white shadow-2xl"
        : "bg-white text-indigo-600 border border-indigo-600"
      } px-4 py-3 rounded-xl uppercase font-bold text-2xl transition-all duration-300 w-full sm:w-auto`}
  >
    Experience
  </button>
</div>

           {/* show my resume content */}
           {
            visible==="education"&&<Education/>
           }
           {
            visible==="professional"&&<Professional/>
           }
           {
            visible==="experience"&&<Experience/>
           }
        </div>
    );
};

export default Resume;