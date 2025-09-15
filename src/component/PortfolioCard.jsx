import { Link } from "react-router-dom";
import {  } from "react-router-hash-link";
import 'aos/dist/aos.css'; 

const PortfolioCard = ({detail}) => {
  const {img,title,id,description}=detail || {}


    return (
      
           <div  data-aos="fade-up"  data-aos-easing="ease-out-cubic"
           data-aos-duration="2000" className="card bg-base-100 space-y-2 mb-4 shadow-2xl">
  <figure>
    <img
      src={img}
      alt="Shoes" 
      className="h-72 w-full"/>
  </figure>
  <div className="card-body space-y-2 ">
    <h2 className="card-title flex-grow">{title}</h2>
    <p >{description.substring(0,70)}...</p>
    <div className="card-actions justify-end">
     <Link to={`/details/${id}`}> <button className="btn btn-primary">view Details</button></Link>
    </div>
  </div>
</div> 
     
    );
};

export default PortfolioCard;