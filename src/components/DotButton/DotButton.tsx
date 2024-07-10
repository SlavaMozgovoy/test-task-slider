import React, { FC } from 'react'


import classes from './DotButton.module.css'



interface DotButtonProps {
    isActive: boolean;
    index: number;
    rotate: number;
    title: string;
}


export const DotButton : FC<DotButtonProps> = ({isActive, index, rotate, title}) => {


  return (
    <div className={classes.wrapper}
        style={{
            rotate: `${rotate}deg`
        }}
    >
        
        <button className={isActive ? [classes.button, classes.active].join(" ") : classes.button}>
            <span className={classes.button_content}>{index+1}</span>
            <label className={classes.title}>{title}</label>
        </button>

    </div>
  )
}
