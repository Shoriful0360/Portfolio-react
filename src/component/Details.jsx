import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Slide from "./Slide";
import { ImCancelCircle } from "react-icons/im";
import ProjectDetails from "../page/ProjectDetails";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/Project.json")
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((err) => console.error("Failed to fetch projects:", err));
  }, []);

  const project = details?.find((item) => item.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-800 dark:text-white">
        Loading or Project not found...
      </div>
    );
  }

  return (
    <div className="bg-[#ECF0F3] dark:bg-gray-900 px-4 md:px-10 py-10 relative rounded-lg shadow-2xl mt-10 transition-colors duration-300">
      {/* Close button */}
      <Link to="/">
        <div className="absolute top-4 right-4 z-10 text-4xl text-gray-800 dark:text-white hover:text-red-500 transition-colors duration-300">
          <ImCancelCircle />
        </div>
      </Link>

      {/* Carousel */}
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="w-full mb-8 rounded-lg overflow-hidden"
      >
        <Slide carouselImages={project.images} />
      </div>

      {/* Project Details */}
      <div>
        <ProjectDetails project={project} />
      </div>
    </div>
  );
};

export default Details;
