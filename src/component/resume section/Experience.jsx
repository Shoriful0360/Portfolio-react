const Experience = () => {
  return (
    <section id="experience" className="py-12 text-gray-900 dark:text-gray-200 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>

        {/* Training Experience */}
        <div className="mb-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-indigo-600">Full Stack Web Development Course (2024 - 2025)</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Completed a comprehensive web development course from Programming Hero, 
            gaining hands-on experience in building real-world projects.
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 dark:text-gray-300">
            <li>Developed multiple projects including Tourism Website, Task Manager, and Chat App</li>
            <li>Implemented authentication using Firebase and Node.js</li>
            <li>Designed responsive UI with React, TailwindCSS, DaisyUI, and Meraki UI</li>
          </ul>
        </div>

        {/* Personal Projects */}
        <div className="mb-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-indigo-600">Personal Projects (2024 - Present)</h3>
          <ul className="list-disc list-inside mt-3 text-gray-700 dark:text-gray-300">
            <li><span className="font-bold">AI Job Portal Website:</span> Created jobseeker profiles, authentication, and job listings with MongoDB backend.</li>
            <li><span className="font-bold">Messenger-style Chat App:</span> Developed real-time private messaging system with Socket.IO and Express.</li>
            <li><span className="font-bold">Artifact Odyssey:</span> Built a historical artifact tracker website using React and Firebase.</li>
          </ul>
        </div>

        {/* Academic Project */}
        <div className="mb-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-indigo-600">Academic Project</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Developed a BBA-related business data analysis project using sampling and 
            statistical tools, applying research and analytical skills to real-world 
            business cases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
