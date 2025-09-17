import { Link } from "react-router-dom";
import 'aos/dist/aos.css'; 

const PortfolioCard = ({ detail }) => {
  const { overview, title, images, id, tags, live, github_client} = detail || {};

  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="card bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden"
    >
      {/* Image Section */}
      <figure className="overflow-hidden">
        {images?.slice(0, 1).map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={title}
            className="h-72 w-full object-cover transition-transform duration-500 hover:scale-110"
          />
        ))}
      </figure>

      {/* Content Section */}
      <div className="card-body space-y-3">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
          {overview}
        </p>

        {/* Tags/Tech Stack */}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="badge badge-outline border-blue-400 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-lg text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="card-actions  justify-end gap-2 mt-4">
          <Link to={`/details/${id}`}>
            <button className="btn btn-sm btn-primary">Details</button>
          </Link>
          {live && (
            <a href={live} target="_blank" rel="noreferrer">
              <button className="btn btn-sm btn-secondary">Live Demo</button>
            </a>
          )}
          {github_client && (
            <a href={github_client} target="_blank" rel="noreferrer">
              <button className="btn btn-sm btn-outline">GitHub</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
