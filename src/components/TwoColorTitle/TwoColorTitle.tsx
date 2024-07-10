import React, { FC, useEffect, useRef, useState } from 'react'
import classes from './TwoColorTitle.module.css';
import useAnimatedNumber from '../../hooks/useAnimatedNumber';

interface TwoColorTitle {
    firstPart: number;
    secondPart: number;
}


export const TwoColorTitle : FC<TwoColorTitle> = ({firstPart, secondPart}) => {

  const val1 = useAnimatedNumber(firstPart, 10);
  const val2 = useAnimatedNumber(secondPart, 10);

  return (
    <h1 className={classes.title}>
        <span className={classes.firstPart}>
            {val1}
        </span>
        {" "}
        <span className={classes.secondPart}>
            {val2}
        </span>
    </h1>
  )
}
