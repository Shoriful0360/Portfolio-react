import PortfolioCard from "./PortfolioCard";


const Portfolio = ({details}) => {
    return (
        <div id="portfolio" className="mt-10 font-serif">
           <div className="text-center space-y-3">

           <p className="text-pri tracking-[8px] font-medium uppercase">visit my portfolio</p>
           <h1 className="text-5xl font-bold uppercase">my portfolio</h1>
           </div>
           <div className="mt-10 grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5">
            {
                details?.map(detail=><PortfolioCard key={detail.id} detail={detail}></PortfolioCard>)
            }
            
           </div>
        </div>
    );
};

export default Portfolio;