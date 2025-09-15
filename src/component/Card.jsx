

const Card = ({img,title,description}) => {
    return (
       
      <div className="card  bg-base-100 group  hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white group-hover:*:transition-all text-gray-600 font-serif font-medium  shadow-2xl">
  <figure className="px-10 pt-10 group-hover:translate-y-2 group-hover:animate-bounce transition-all ">
    <img
      src={img}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body relative  items-center  text-center">
    <h2 className="card-title text-2xl">{title}</h2>
    <p className="">{description}</p>
 
  </div>
</div>
    
    );
};

export default Card;