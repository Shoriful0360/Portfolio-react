const skills = [
  { name: "React", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Next.js", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { name: "Redux", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
  { name: "JavaScript", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "TailwindCSS", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png" },
  { name: "GitHub", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
  { name: "Vercel", img: "https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/180x180.png" },
];

export default function Fature() {
  return (
   <div className="dark:bg-gray-900 mt-20 flex flex-col items-center justify-center px-6  relative overflow-hidden">
  {/* Floating Background Bubbles */}
  {Array.from({ length: 10 }).map((_, i) => (
    <div
      key={i}
      className="absolute rounded-full opacity-20 animate-float"
      style={{
        width: `${Math.random() * 30 + 10}px`,
        height: `${Math.random() * 30 + 10}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        backgroundColor: `rgba(99, 102, 241, 0.2)`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    ></div>
  ))}

  {/* Section Title */}
  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-12 text-center">
    My <span className="text-indigo-600 dark:text-white">Experience</span>
  </h2>

  {/* Skills Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-6xl z-10 relative">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center p-6 rounded-2xl 
                   bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 
                   shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 
                   group relative overflow-hidden"
      >
        {/* Floating Glow Effect */}
        <div className="absolute w-24 h-24 bg-indigo-400 opacity-10 rounded-full -top-4 -left-4 blur-3xl group-hover:opacity-30 transition-opacity duration-300"></div>

        <img src={skill.img} alt={skill.name} className="w-16 h-16 mb-4" />
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{skill.name}</p>
      </div>
    ))}
  </div>
</div>

  );
}
