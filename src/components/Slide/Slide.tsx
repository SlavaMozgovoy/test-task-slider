


import React, { FC } from 'react'

import classes from './Slide.module.css'


interface SlideProps {
    title: string | number;
    text: string;
}

export const Slide : FC<SlideProps> = ({title, text}) => {
  return (
    <div className={classes.slide}>

        <h3 className={classes.title}>{title}</h3>

        <p className={classes.text}>{text}</p>

    </div>
  )
}


