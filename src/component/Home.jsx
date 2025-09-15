import { BiLogoTailwindCss } from "react-icons/bi";
import { FaFacebook, FaGithub, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import img from '../assets/Adobe Express - file.png'
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Home = () => {
    const [ init, setInit ] = useState(false);

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
        <div id="home">
                
          
        <div className="lg:flex gap-5 flex-row-reverse items-center justify-between space-y-4">
{/* image */}
<div data-aos="fade-up"  data-aos-delay="50"  data-aos-duration="1000" className="flex-1 relative mt-0  ">
    <img src={img} alt="" className="w-80 h-80 rounded-full shadow-2xl object-center" />
</div>

{/* content */}
<div data-aos="fade-down"  data-aos-delay="50"  data-aos-duration="2000" className="flex-1 md:px-20 md:mt-20 px-5 ">
<div className="space-y-5">
<p className="text-2xl tracking-[4px] uppercase">welcome to my world</p>
<h1 className="md:text-5xl  text-2xl font-bold">Hi, I'm <span className="text-pri">Shoriful Islam</span></h1>
<h1 className="md:text-5xl text-2xl font-bold">
   <span className="text-pri"> a </span>{''}
<span style={{ color: 'black', fontWeight: 'bold' }}>

<Typewriter
words={['Developer', 'Full Stack Developer', 'Font End Developer']}
loop={Infinity}
cursor
cursorStyle='_'
typeSpeed={70}
deleteSpeed={50}
delaySpeed={1000}

/>
</span> 
</h1>
<p className="text-gray-600 font-serif font-medium">I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
</div>
{/* social link and skill */}
<div className="md:flex justify-between">
<div className="mt-12 space-y-4 text-xl font-medium">
<h3 className="uppercase ">find with me</h3>
<div className="flex gap-4"> 
{/* social link */}
<Link to={'https://www.facebook.com/profile.php?id=100020907764467'}>
<div className="w-20 border-2 h-20 flex justify-center items-center text-4xl shadow-2xl shrink-0 hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white hover:animate-bounce rounded-lg ">
<FaFacebook /> 
</div>
</Link>
<Link to={'https://github.com/Shoriful0360?tab=repositories'}>
<div className="w-20 border-2 h-20 flex justify-center items-center text-4xl shadow-2xl shrink-0 hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white hover:animate-bounce rounded-lg ">
<FaGithub />
</div>
</Link>
<Link to={'mailto:shorifulbba0360.com?subject=Hello&body=How%20are%20you%3F'}>
<div className="w-20 border-2 h-20 flex justify-center items-center text-4xl shadow-2xl shrink-0 hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white hover:animate-bounce rounded-lg ">
<TfiEmail />
</div>
</Link>
</div>
</div>
{/* skill */}
<div>
<div className="mt-12 space-y-4 text-xl font-medium">
<h3 className="uppercase ">best skill on</h3>
<div className="flex gap-4"> 


<div className="w-20 border-2 h-20 flex justify-center items-center text-4xl shadow-2xl shrink-0 hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white hover:animate-bounce rounded-lg ">
<BiLogoTailwindCss className="text-[#2FC8FF]" />
</div>


<div className="w-20 border-2 h-20 flex justify-center items-center text-4xl shadow-2xl shrink-0 hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white hover:animate-bounce rounded-lg ">
<RiJavascriptFill />

</div>


<div className="w-20 border-2 h-20 flex justify-center items-center text-4xl shadow-2xl shrink-0 hover:bg-gradient-to-r from-[#8766BA] to-[#DE647F] hover:text-white hover:animate-bounce rounded-lg ">
<FaReact className="text-[#58C4DC] animate-spin" />
</div>
</div>
</div>
</div>
</div>
</div> 

</div>
        </div>
    );
};

export default Home;