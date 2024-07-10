import React, { FC } from 'react'

import classes from './MainTitle.module.css'

interface MainTitleProps {
    children: React.ReactNode;
}

export const MainTitle : FC<MainTitleProps> = ({children}) => {
  return (
    <h1 className={classes.title}>{children}</h1>
  )
}
