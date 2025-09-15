
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slide = ({carouselImages}) => {
   
    return (
        <div >
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          carouselImages?.map((img,idx)=><SwiperSlide key={idx}>

            <img className='w-full h-[600px] rounded-md' src={img} alt="" />
          </SwiperSlide>)

        }
      
      </Swiper>  
        </div>
    );
};

export default Slide;