import React, {useState, useEffect} from 'react';
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from '../../../assets/LeftArrow.svg';
import { useSwiper } from 'swiper/react';

export default function CarouselLeftNavigation() {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function(){
            setIsBeginning(swiper.isBeginning);
        })
    }, [])
  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={()=> swiper.slidePrev()} />}
      
    </div>
  )
}
