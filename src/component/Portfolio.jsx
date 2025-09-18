import PortfolioCard from "./PortfolioCard";

const Portfolio = ({ details }) => {
  return (
    <div
      id="portfolio"
      className="mt-20 font-serif px-6 md:px-12 lg:px-20  dark:bg-gray-900 dark:text-white"
    >
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <p className="text-pri tracking-[8px] font-medium uppercase">
          Visit My Portfolio
        </p>
        <h1 className="text-5xl font-bold uppercase">My Portfolio</h1>
      </div>

      {/* Portfolio Grid */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {details?.map((detail) => (
          <PortfolioCard key={detail.id} detail={detail} />
        ))}
      </div>

      {/* Optional Background Particles/Bubbles */}
      <div className="absolute inset-0 -z-10">
        <div className="w-2 h-2 bg-pri rounded-full animate-bounce-slow opacity-20 absolute top-10 left-20"></div>
        <div className="w-3 h-3 bg-pri rounded-full animate-bounce-slow opacity-20 absolute top-80 right-32"></div>
        <div className="w-1.5 h-1.5 bg-pri rounded-full animate-bounce-slow opacity-20 absolute top-40 left-60"></div>
        {/* Add more bubbles randomly if needed */}
      </div>
    </div>
  );
};

export default Portfolio;
