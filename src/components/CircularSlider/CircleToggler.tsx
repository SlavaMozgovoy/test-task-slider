import React, { FC } from 'react'

import classes from './CircleToggler.module.css';
import { RoundButton } from '../RoundButton/RoundButton';
import leftArrow from '../../assets/icons/leftArrow.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';


interface CircleTogglerProps {
  current: number;
  setCurrent: (num: number) => void;
  total: number;
}

export const CircleToggler : FC<CircleTogglerProps> = ({current, setCurrent, total}) => {

  function next() {
    if(current === total - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1)
    }
  }
  function prev() {
    if(current === 0) {
      setCurrent(total - 1);
    } else {
      setCurrent(current - 1)
    }
  }

  
  return (
    <div className={classes.circleToggler}>
        <div>
            <span>0{current + 1}</span>/<span>0{total}</span>
        </div>
        <div className={classes.circleToggler_buttons}>
            <RoundButton onClick={prev}><img src={leftArrow} /></RoundButton>
            <RoundButton onClick={next}><img src={rightArrow} /></RoundButton>
        </div>
    </div>
  )
}
