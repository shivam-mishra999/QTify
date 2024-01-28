import React, {useEffect} from 'react';
import styles from "./Carousel.module.css";
// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

const Controls = ({data}) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0);
    },[data]);
    return <></>
}

export default function Carousel({ data, renderComponent }) {
    
  return (
    <div className={styles.wrapper}>
        <Swiper
            // install Swiper modules
            style={{padding:"0px 20px"}}
            initialState={0}
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={"auto"}
            allowTouchMove
            >
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                <Controls data={data} />
                {data.map((ele)=>(
                    <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
                ))}
        </Swiper>
      
    </div>
  )
}
