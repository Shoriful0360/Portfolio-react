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
 
 <div className="px-5 font-serif bg-[#ECF0F3] dark:bg-gray-900 transition-colors duration-500">
  <header>
    {/* Navbar */}
    <Navbar />

    <div className="divider"></div>
<main className="pt-32">
  <Home />
  <div className="my-10 border-t-2 border-gray-300 dark:border-gray-600"></div>

  <AboutMe />
  <div className="my-10 border-t-2 border-gray-300 dark:border-gray-600"></div>

  <Fature />
  <div className="my-10 border-t-2 border-gray-300 dark:border-gray-600"></div>

  <Portfolio details={details} />
  <div className="my-10 border-t-2 border-gray-300 dark:border-gray-600"></div>

  <Resume />
</main>

  </header>
</div>

  )
}

export default App
