import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import Slide from "./Slide";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import ProjectDetails from "../page/ProjectDetails";


const Details = () => {
const {id}=useParams()
  const [details,setDetails]=useState()
useEffect(()=>{
fetch('/Project.json')
.then(res=>res.json())
.then(data=>setDetails(data))
},[])

console.log(details)
const isExist=details?.find(item=>item.id ===parseInt(id))





    return (
      <div className="bg-[#ECF0F3] px-4 mt-10 relative rounded-lg md:px-10 md:py-10 shadow-2xl ">
          <Link to={'/'}> 
           <div className="absolute top-2 z-10 right-2 text-4xl">
          <ImCancelCircle />
          </div></Link>
          <div  className=" mt-10" >
      
          {/* carousel */}
        <div data-aos="fade-up" data-aos-duration="2000"  className="w-full ">
          <Slide carouselImages={isExist?.images}></Slide>

        </div>
        {/*right content */}
        <ProjectDetails project={isExist}/>
       
        </div>
      </div>
    );
};

export default Details;