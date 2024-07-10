import React, { FC, useState } from 'react'

import classes from "./TimelineSlider.module.css";
import { CircularSlider } from '../CircularSlider/CircularSlider';
import { TwoColorTitle } from '../TwoColorTitle/TwoColorTitle';
import { RoundButton } from '../RoundButton/RoundButton';

import { MainTitle } from '../MainTitle/MainTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { Slide } from '../Slide/Slide';
import rightArrowBlue from '../../assets/icons/rightArrowBlue.svg'
import { CircleToggler } from '../CircularSlider/CircleToggler';
import { ITimeline } from '../../models/ITimelime';
import { CircleNavigation } from '../CircularSlider/CircleNavigation';
import { useResize } from '../../hooks/useResize';



interface TimelineSliderProps {
    items: ITimeline[];
}


export const TimelineSlider : FC<TimelineSliderProps> = ({items}) => {
    
    const [current, setCurrent] = useState<number>(0);
    const windowWidth = useResize();

  return (

    <div className={classes.wrapper}>

        <div className={classes.content}>
            <MainTitle>Исторические даты</MainTitle>


            <div className={[classes.centerPosition, classes.yearTitle].join(" ")} style={{zIndex: "-2"}}>
                <TwoColorTitle firstPart={items[current]?.start} secondPart={items[current]?.end}/>
            </div>
            <div className={[classes.centerPosition, classes.circleSlider].join(" ")}>
                <CircularSlider buttons={items} size={530} curent={current} setCurrent={setCurrent}/>
            </div>

            <div className={classes.mobileLine}></div>

            <div className={classes.bottomRow}>

                <div className={classes.circleControl}>
                    <CircleToggler current={current} setCurrent={setCurrent} total={items.length}/>
                    <CircleNavigation current={current} setCurrent={setCurrent} total={items.length}/>
                </div>
                
                
                <div className={classes.swiperWrapper}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={windowWidth >= 800 ? 3 : 1.6}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.review-swiper-button-next',
                            prevEl: '.review-swiper-button-prev',
                        }}
                        style={{
                            marginLeft: "0",
                        }}
                        slideNextClass={classes.nextSlideMobile}
                    >
                        {
                            items[current]?.slides.map((slide, index) =>
                                <SwiperSlide key={index}>
                                    <Slide title={slide.title} text={slide.text}/>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                    <i className={["review-swiper-button-next", classes.mobileHiden].join(" ")}>
                        <img src={rightArrowBlue}/>
                    </i>
                </div>
            </div>

        </div> 
    </div>
  )
}
