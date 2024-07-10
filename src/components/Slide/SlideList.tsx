
import React, { FC } from 'react'
import { ISlide } from '../../models/ITimelime'
import { SwiperSlide } from 'swiper/react';
import { Slide } from './Slide';

interface SlideListProps {
    slides: ISlide[];
}


// export const SlideList : FC<SlideListProps> = ({slides}) => {
//   return (
//         {
//             slides.map((slide, index) =>
//                 <SwiperSlide key={index}>
//                     <Slide title={slide.title} text={slide.text}/>
//                 </SwiperSlide>
//             )
//         }
//   )
// }
