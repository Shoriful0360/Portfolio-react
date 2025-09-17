
import { useEffect, useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
// const project = {
//   title: "Bolaka Restaurant",
//   images: [
//     "https://i.ibb.co/XYZ/banner1.png",
//     "https://i.ibb.co/XYZ/banner2.png",
//     "https://i.ibb.co/XYZ/banner3.png",
//   ],
//   overview:
//     "Bolaka Restaurant is a modern food ordering platform where users can browse menu, book tables, and leave reviews.",
//   features: [
//     "Dynamic food menu with categories",
//     "Add to cart & order system",
//     "Table booking with live status",
//     "User authentication & profile dashboard",
//   ],
//   tech: ["React", "Tailwind", "DaisyUI", "Firebase", "Express.js", "MongoDB"],
//   contributions: [
//     "Implemented authentication system",
//     "Created profile dashboard",
//     "Worked on Redux for state management",
//   ],
//   challenges: [
//     {
//       challenge: "Managing real-time table booking updates",
//       solution:
//         "Integrated Socket.io for live update system, ensuring users see instant changes.",
//     },
//     {
//       challenge: "Authentication & secure routes",
//       solution:
//         "Used Firebase Authentication and JWT-based route protection for better security.",
//     },
//   ],
//   live: "https://bolaka-restaurant.vercel.app",
//   github: "https://github.com/yourname/bolaka-restaurant",
// };



const ProjectDetails = ({project}) => {
  const{title,tech,overview,live,images,github_server,github_client,
features,challenges,contributions}=project || {}


    return (
     
     <div className="max-w-7xl mx-auto p-6">


      {/* Title */}
      <h1 className="text-3xl font-bold text-center my-6">{title}</h1>

      {/* Overview */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-700">{overview}</p>
      </section>

      {/* Features */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {features?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {tech?.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full shadow-md text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Contributions */}
      {contributions && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">My Contributions</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {contributions.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Challenges & Solutions */}
      {challenges && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-red-500">
            Challenges & Solutions (Bonus)
          </h2>
          {challenges.map((item, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold">⚡ Challenge: {item.challenge}</p>
              <p className="text-green-600">
                ✅ Solution: {item.solution}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Links */}
      <div className="flex gap-4 mt-6">
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
        >
          <FaGlobe /> Live Site
        </a>
        <a
          href={github_client}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 cursor-pointer bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-black"
        >
          <FaGithub /> GitHub-Client
        </a>
        <a
          href={github_server}
          target="_blank"
          rel="noreferrer"
          className="flex items-center cursor-pointer gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-black"
        >
          <FaGithub /> GitHub-Server
        </a>
      </div>
    </div>
    );
};

export default ProjectDetails;
