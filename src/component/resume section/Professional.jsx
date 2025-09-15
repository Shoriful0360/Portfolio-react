

const Professional = () => {
    return (
        <div className="flex gap-10 justify-between">
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="font-serif w-full">
            <p className="text-2xl font-bold ">Features</p>
            <h1 className="text-xl font-bold underline">Design Skill</h1>
           <div>
           <label>
            <div className="mt-4">
<p className="flex justify-between uppercase"><span>Figma</span> <span>95%</span></p>

          
            </div>
           <progress className="progress  text-red-500 " value={95} max="100"></progress>
           </label>
           <label>
            <div>
<p className="flex justify-between uppercase"><span>Design</span> <span>90%</span></p>

          
            </div>
           <progress className="progress  text-red-500 " value={90} max="100"></progress>
           </label>
           </div>
        </div>
        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="font-serif w-full">
            <p className="text-2xl font-bold ">Features:</p>
            <h1 className="text-xl font-bold underline">Development Skill</h1>
           <div>
           <label>
            <div className="mt-4">
<p className="flex justify-between uppercase"><span>HTML</span> <span>100%</span></p>

          
            </div>
           <progress className="progress  text-red-500 " value={100} max="100"></progress>
           </label>
           <label>
            <div>
<p className="flex justify-between uppercase"><span>CSS</span> <span>95%</span></p>

          
            </div>
           <progress className="progress  text-red-500 " value={95} max="100"></progress>
           </label>
           <label>
            <div>
<p className="flex justify-between uppercase"><span>Javascript</span> <span>70%</span></p>

          
            </div>
           <progress className="progress  text-red-500 " value={70} max="100"></progress>
           </label>
           </div>
        </div>
        </div>
    );
};

export default Professional;