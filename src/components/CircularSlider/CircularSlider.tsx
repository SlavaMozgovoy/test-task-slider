import React, { FC, useEffect, useRef, useState } from 'react'

import classes from "./CircularSlider.module.css";
import { DotButton } from '../DotButton/DotButton';
import { degreesToRadians } from '../../Utils/math';
import gsap from 'gsap';
import { ITimeline } from '../../models/ITimelime';
import { TwoColorTitle } from '../TwoColorTitle/TwoColorTitle';


interface CircleSliderProps {
    size: number;
    buttons: ITimeline[];
    curent: number;
    setCurrent: (num: number) => void;
}

export const CircularSlider : FC<CircleSliderProps> = ({size, buttons, curent, setCurrent}) => {

    const sliderRef = useRef<HTMLDivElement>(null);

    const [active, setActive] = useState<ITimeline>(buttons[curent]);

    function rotateSlider(index: number) {
        setCurrent(index);
    }

    useEffect(() => {
    let rotateValue = 360/buttons.length;
        setActive(buttons[curent]);
        gsap.to(sliderRef.current, {rotation: 360 - rotateValue*curent});
    }, [curent])

    return (
        <div className={classes.wrapper}>

            <div 
                className={classes.circle} 
                ref={sliderRef}
                style={{
                    height: `${size}px`
                }}
            >

                {buttons.map((btn, index) =>
                    <div 
                        key={index}
                        style={{
                            left: `${size / 2 * Math.cos(degreesToRadians(360/buttons.length * index -60)) + size / 2}px`,
                            top: `${size / 2 * Math.sin(degreesToRadians(360/buttons.length * index - 60)) + size / 2}px`,
                            
                        }}
                        
                        className={classes.btn_position}
                        onClick={() => rotateSlider(index)}
                    >
                        <DotButton isActive={curent === index} index={index} rotate={360/buttons.length*curent} title={btn.title}/>
                    </div>
                )}

            </div>
            
        </div>
    )
}
