

const AboutMe = () => {
    return (
        <div className="font-serif px-4 space-y-4 text-center">
          <h1 className="text-4xl font-bold">About me</h1> 
          <p  data-aos="fade-up-left"  data-aos-duration="2000">I, m a developer with a passion for web develop. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs while working with me. Delivering work within time and budget which meets clients requirements in our mata.</p> 
          <div data-aos="fade-down-right"  data-aos-duration="2000" className=" mt-4 grid md:grid-cols-2 lg:grid-cols-4">
            <div>
                <p className="font-bold">Name</p>
                <h1 className="text-xl font-semibold">Md. Shoriful</h1>
            </div>
            <div>
                <p className="font-bold">Email</p>
                <h1 className="text-xl font-semibold">shorifulbba0360@gmail.com</h1>
            </div>
            <div>
                <p className="font-bold">Date of Birth</p>
                <h1 className="text-xl font-semibold">May 19,1999</h1>
            </div>
            <div>
                <p className="font-bold">From</p>
                <h1 className="text-xl font-semibold">Rangpur ,Bangladesh</h1>
            </div>
          </div>
        </div>
    );
};

export default AboutMe;