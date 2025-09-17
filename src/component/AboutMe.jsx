

const AboutMe = () => {
    return (
       <div id="feature" className="font-serif px-6 md:px-12 lg:px-20 py-12 space-y-8 text-center ">
  {/* Title */}
  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
    About Me
  </h1>

  {/* Description */}
  <p
    data-aos="fade-up"
    data-aos-duration="2000"
    className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg"
  >
    I'm a passionate web developer who loves building clean, modern, and
    user-friendly websites. My focus is on delivering real value to end
    users through responsive design and scalable solutions. Many clients
    have achieved exceptional results working with me. I always ensure
    projects are delivered on time, within budget, and meet client
    requirements.
  </p>

  {/* Info Grid */}
  <div
    data-aos="fade-up"
    data-aos-duration="1500"
    className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4"
  >
    {/* Card Item */}
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <p className="font-bold text-gray-500">Name</p>
      <h1 className="text-xl font-semibold text-gray-800 mt-1">
        Md. Shoriful
      </h1>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <p className="font-bold text-gray-500">Email</p>
      <h1 className="text-xl font-semibold text-gray-800 mt-1 break-words">
        shorifulbba0360@gmail.com
      </h1>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <p className="font-bold text-gray-500">Date of Birth</p>
      <h1 className="text-xl font-semibold text-gray-800 mt-1">
        May 19, 1999
      </h1>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <p className="font-bold text-gray-500">From</p>
      <h1 className="text-xl font-semibold text-gray-800 mt-1">
        Rangpur, Bangladesh
      </h1>
    </div>
  </div>
</div>

    );
};

export default AboutMe;