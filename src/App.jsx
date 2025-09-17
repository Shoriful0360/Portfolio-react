import { useEffect, useState,useCallback } from "react"

import Fature from "./component/Fature"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Portfolio from "./component/Portfolio"
import AboutMe from "./component/AboutMe"
import Resume from "./component/resume section/Resume"

function App() {
  const [details,setDetails]=useState()

useEffect(()=>{
fetch('/Project.json')
.then(res=>res.json())
.then(data=>setDetails(data))
},[])






  return (
 
    <div className="px-5">
      
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
