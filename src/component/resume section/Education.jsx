

const Education = () => {
    return (
     <div className='md:flex justify-between pb-10 gap-10'>
           <div data-aos="zoom-in-down"    data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  className='flex-1 w-full'>
            <p className='text-red-600'>2006-2025</p>
            <h1 className='text-2xl font-bold '>Education Quality</h1>
          <div className="relative border-l-4 font-serif mt-10 group  hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] *:hover:text-white border-gray-300 pl-6 md:px-10 py-4 bg-white shadow-md rounded-lg ">
        <h3 className="text-xl font-semibold">Bachelor of Business Administration (BBA)</h3>
        <p className="text-gray-600">Bonarpara Govt. Colleage & Univercity(2019-2025)</p>
        <div className="divider"></div>
        <p className="mt-2 text-gray-700">The Bachelor of Business Administration (BBA) program provides a strong foundation in business management, finance, marketing, and leadership skills.
It equips students with practical knowledge, analytical abilities, and real-world problem-solving techniques essential for the corporate world.
</p>
       
          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
           
          </span>
       
      </div>
    
          </div>
            {/* job experience */}
            <div data-aos="zoom-out-down"    data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"   className='w-full flex-1'>
            <p className='text-red-600'>2024-2025</p>
            <h1 className='text-2xl font-bold '>Job Experince</h1>
          <div className="relative border-l-4 md:px-10 font-serif mt-10 group  hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] *:hover:text-white border-gray-300 pl-6 py-4 bg-white shadow-md rounded-lg ">
        <h3 className="text-xl font-semibold">Web Developer</h3>
        <p className="text-gray-600">Programming Hero(2024-2025)</p>
        <div className="divider"></div>
        <p className="mt-2 text-gray-700">Programming Hero is an interactive learning platform that makes coding fun and engaging for beginners.
It offers hands-on projects, gamified lessons, and real-world coding challenges to help learners build practical skills.
With expert guidance and a supportive community, Programming Hero empowers aspiring developers to kickstart their tech careers. 🚀
</p>
       
          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
           
          </span>
       
      </div>
    
          </div>
     </div>
    );
};

export default Education;