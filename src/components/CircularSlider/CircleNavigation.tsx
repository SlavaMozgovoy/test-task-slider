import React, { FC } from 'react'


import classes from './CircleNavigation.module.css'

interface CircleNavigationProps {
    current: number;
    setCurrent: (value: number) => void;
    total: number;
}


export const CircleNavigation : FC<CircleNavigationProps> = ({current, setCurrent, total}) => {
    var btnArray = [...Array(total)].map((item, index) => index);
  return (
    <div className={classes.wrapper}>
        {btnArray.map((item, index) =>
            <div 
                key={index}
                className={index === current ? [classes.navigationDot, classes.active].join(" ") : classes.navigationDot}
                onClick={() => setCurrent(index)}
            >
                
            </div>
        )}
    </div>
  )
}
