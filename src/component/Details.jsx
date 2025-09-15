import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import Slide from "./Slide";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";


const Details = () => {
const {id}=useParams()
  const [details,setDetails]=useState()
useEffect(()=>{
fetch('/detail.json')
.then(res=>res.json())
.then(data=>setDetails(data))
},[])

const isExist=details?.find(item=>item.id ===parseInt(id))
const {carouselImages,
  description,
  short_description,
  title,
  tools,
  liveLink,problemsFaced,github

}=isExist || {}


console.log(problemsFaced)

    return (
      <div className="bg-[#ECF0F3] px-4 mt-10 relative rounded-lg md:px-10 md:py-10 shadow-2xl ">
          <Link to={'/'}> 
           <div className="absolute top-2 z-10 right-2 text-4xl">
          <ImCancelCircle />
          </div></Link>
          <div  className=" lg:grid gap-10 lg:grid-cols-2 mt-10" >
      
          {/* carousel */}
        <div data-aos="fade-up" data-aos-duration="2000"  className="w-full ">
          <Slide carouselImages={carouselImages}></Slide>

        </div>
        {/*right content */}
        <div data-aos="fade-down"    data-aos-duration="2000" className="flex-1  font-serif space-y-4 relative">
  <h1 className="text-5xl font-bold">    {title}</h1>
  <p className="font-serif text-xl mt-5">{short_description}</p>
  <h1 className="text-2xl font-bold underline">Tools :</h1>
  <ul className="ml-5 text-xl font-semibold ">
    {tools?.map((tool,idx)=> <li key={idx} className="list-decimal">{tool}</li>)}
   
  </ul>
  <h1 className="text-2xl font-bold underline">Problem Face :</h1>
<p>{problemsFaced?.map((pr,idx)=><li key={idx}>{pr}</li>)}</p>

  {/* view button */}

 <div className=" mt-5">
  <Link to={liveLink}>  <button className="btn bg-pri text-white ">View Website</button></Link>
 <Link to={github}>   <button className="btn bg-pri text-white ">Github Link</button></Link>
  </div>
  {/* view button */}


        </div>
        </div>
      </div>
    );
};

export default Details;