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
    <div className="  dark:bg-gray-900 flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-10">
        My <span className="text-indigo-600">Experience</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <img src={skill.img} alt={skill.name} className="w-16 h-16 mb-4" />
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
