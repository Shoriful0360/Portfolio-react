import { Paintbrush, Code, Database } from "lucide-react";
import { useEffect, useState } from "react";

const SkillBar = ({ name, value, color }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      start += 1;
      if (start >= value) {
        clearInterval(timer);
      }
      setPercent(start);
    }, 20);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <p className="flex justify-between uppercase text-sm font-semibold mb-2">
        <span>{name}</span> <span>{percent}%</span>
      </p>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full ${color} transition-all duration-500`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

const Professional = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 font-serif dark:bg-gray-900">
  <div className="grid md:grid-cols-3 gap-12">
    
    {/* Design Skills */}
    <div data-aos="fade-down" data-aos-duration="1500">
      <div className="flex items-center gap-3 mb-3">
        <Paintbrush className="text-red-500" size={28} />
        <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">Features</p>
      </div>
      <h1 className="text-xl font-bold underline mb-6 text-gray-800 dark:text-gray-200">Design Skills</h1>

      <div className="space-y-6">
        <SkillBar name="Figma" value={95} color="bg-gradient-to-r from-pink-400 to-pink-600" />
        <SkillBar name="UI Design" value={90} color="bg-gradient-to-r from-purple-400 to-purple-600" />
        <SkillBar name="Pixso" value={85} color="bg-gradient-to-r from-indigo-400 to-indigo-600" />
      </div>
    </div>

    {/* Frontend Development */}
    <div data-aos="fade-up" data-aos-duration="1500">
      <div className="flex items-center gap-3 mb-3">
        <Code className="text-red-500" size={28} />
        <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">Features</p>
      </div>
      <h1 className="text-xl font-bold underline mb-6 text-gray-800 dark:text-gray-200">Frontend Development</h1>

      <div className="space-y-6">
        <SkillBar name="HTML" value={100} color="bg-gradient-to-r from-green-400 to-green-600" />
        <SkillBar name="CSS" value={95} color="bg-gradient-to-r from-blue-400 to-blue-600" />
        <SkillBar name="JavaScript" value={85} color="bg-gradient-to-r from-yellow-400 to-yellow-600" />
        <SkillBar name="React" value={90} color="bg-gradient-to-r from-cyan-400 to-cyan-600" />
        <SkillBar name="Next.js" value={40} color="bg-gradient-to-r from-gray-600 to-black" />
        <SkillBar name="Redux" value={50} color="bg-gradient-to-r from-purple-500 to-purple-700" />
      </div>
    </div>

    {/* Backend & Tools */}
    <div data-aos="fade-down" data-aos-duration="1500">
      <div className="flex items-center gap-3 mb-3">
        <Database className="text-red-500" size={28} />
        <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">Features</p>
      </div>
      <h1 className="text-xl font-bold underline mb-6 text-gray-800 dark:text-gray-200">Backend & Tools</h1>

      <div className="space-y-6">
        <SkillBar name="Node.js" value={80} color="bg-gradient-to-r from-green-600 to-green-800" />
        <SkillBar name="Express.js" value={75} color="bg-gradient-to-r from-gray-500 to-gray-700" />
        <SkillBar name="Firebase" value={85} color="bg-gradient-to-r from-yellow-500 to-orange-600" />
        <SkillBar name="MongoDB" value={80} color="bg-gradient-to-r from-emerald-400 to-emerald-700" />
      </div>
    </div>
  </div>
</section>

  );
};

export default Professional;
