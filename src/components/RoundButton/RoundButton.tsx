import React, { FC } from 'react'

import classes from "./RoundButton.module.css"


interface RoundButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}


export const RoundButton : FC<RoundButtonProps> = ({children, onClick}) => {
  return (
    <button className={classes.button} onClick={onClick}>
        {children}
    </button>
  )
}
