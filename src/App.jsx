import { useEffect, useState,useCallback } from "react"

import Fature from "./component/Fature"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Portfolio from "./component/Portfolio"
import AboutMe from "./component/AboutMe"
import Resume from "./component/resume section/Resume"
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim";
function App() {
  const [details,setDetails]=useState()
  const [ init, setInit ] = useState(false);
useEffect(()=>{
fetch('/detail.json')
.then(res=>res.json())
.then(data=>setDetails(data))
},[])



// this should be run only once per application lifetime
useEffect(() => {
    initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        await loadSlim(engine);
        //await loadBasic(engine);
    }).then(() => {
        setInit(true);
    });
}, []);

const particlesLoaded = (container) => {
    console.log(container);
};

  return (
 
    <div>
      
      <header>
        <Navbar></Navbar>
        <div className="divider"></div>
        <main className="pt-32">
          <Home></Home>

    <div className="divider"></div>
    <AboutMe></AboutMe>

          <div className="divider"></div>
          <Fature></Fature>
          <div className="divider mt-10"></div> 
    
          <Portfolio details={details}></Portfolio>
          <div className="divider mt-10"></div> 
    
      <Resume></Resume>

   
    
        </main>
      </header>
    </div>
  )
}

export default App
