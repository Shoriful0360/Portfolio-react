import { useState } from "react";
import Education from "./Education";
import Professional from "./Professional";
import Experience from "./Experience";


const Resume = () => {
    const [visible,setVisible]=useState("education")
    return (
       <div id="resume" className="mt-4 px-6 md:px-12 lg:px-20 font-serif">
  <h3 className="text-red-600 text-center">1+ Years of Experience</h3> 
  <h1 className="text-4xl font-extrabold text-center mt-4 dark:text-white">My Resume</h1>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 my-10">
    {["education", "professional", "experience"].map((tab) => (
      <button
        key={tab}
        onClick={() => setVisible(tab)}
        className={`px-4 py-3 rounded-xl uppercase font-bold text-2xl w-full sm:w-auto transition-all duration-300
          ${visible === tab 
            ? "bg-indigo-600 text-white shadow-2xl hover:bg-indigo-700"
            : "bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-gray-700"
          }`}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </div>

  {/* Tab Content */}
  <div className="mt-6">
    {visible === "education" && <Education />}
    {visible === "professional" && <Professional />}
    {visible === "experience" && <Experience />}
  </div>
</div>

    );
};

export default Resume;