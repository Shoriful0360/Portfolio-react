import { GraduationCap, Briefcase } from "lucide-react";

const Education = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-12   font-serif">
      <div className="md:flex justify-between gap-12">
        {/* Education Section */}
        <div
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="flex-1 w-full"
        >
          <p className="text-red-600 text-sm uppercase tracking-widest">
            2006 - 2025
          </p>
          <h1 className="text-2xl md:text-3xl dark:text-white font-extrabold mb-6">
            Education Quality
          </h1>

          <div className="relative border-l-4 border-gray-200 pl-6">
            {/* Timeline Item */}
            <div className="relative bg-white shadow-md rounded-2xl p-6 mb-8 hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] group transition">
              <span className="absolute -left-[22px] top-6 flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full shadow-md">
                <GraduationCap size={18} />
              </span>
              <h3 className="text-xl font-semibold group-hover:text-white">
                Bachelor of Business Administration (BBA)
              </h3>
              <p className="text-gray-600 group-hover:text-gray-100">
                Bonarpara Govt. College & University (2019 - 2025)
              </p>
              <div className="border-t border-gray-200 my-4 group-hover:border-gray-300"></div>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-100">
                The BBA program provides a strong foundation in business
                management, finance, marketing, and leadership. It equips
                students with practical knowledge, analytical abilities, and
                real-world problem-solving skills essential for the corporate
                world.
              </p>
            </div>
          </div>
        </div>

        {/* Job Experience Section */}
        <div
          data-aos="zoom-out-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="flex-1 w-full mt-12 md:mt-0"
        >
          <p className="text-red-600 text-sm uppercase tracking-widest">
            2024 - 2025
          </p>
          <h1 className="text-2xl md:text-3xl font-extrabold dark:text-white mb-6">
            Job Experience
          </h1>

          <div className="relative border-l-4 border-gray-200 pl-6">
            {/* Timeline Item */}
            <div className="relative bg-white shadow-md rounded-2xl p-6 hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] group transition">
              <span className="absolute -left-[22px] top-6 flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full shadow-md">
                <Briefcase size={18} />
              </span>
              <h3 className="text-xl font-semibold group-hover:text-white">
                Web Developer
              </h3>
              <p className="text-gray-600 group-hover:text-gray-100">
                Programming Hero (2024 - 2025)
              </p>
              <div className="border-t border-gray-200 my-4 group-hover:border-gray-300"></div>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-100">
                Programming Hero is an interactive platform that makes coding
                fun and engaging. It offers hands-on projects, gamified lessons,
                and real-world challenges to build practical skills. With expert
                guidance and a strong community, it empowers learners to start
                their tech careers 🚀.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
