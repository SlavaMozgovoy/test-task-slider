import React, { useEffect, useState } from 'react'

import { TimelineSlider } from './components/TimelineSlider/TimelineSlider';
import { ITimeline } from './models/ITimelime';
import { isMetaProperty } from 'typescript';


export default function App() {

    //moke data
    const [items, setItems] = useState<ITimeline[]>([
        {title: "Наука", start: 2001, end: 2022, slides: [
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2004, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2002, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2003, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2005, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2006, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
        ]},
        {title: "Кино", start: 1956, end: 2024, slides: [
            {title: 1956, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 1959, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 1965, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 1978, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2000, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2020, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
        ]},
        {title: "Литература", start: 1880, end: 1994, slides: [
            {title: 1890, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 1910, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 1913, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 1940, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 1964, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 1990, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 1994, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
        ]},
        {title: "Театр", start: 1984, end: 2005, slides: [
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
        ]},
        {title: "Наука", start: 1990, end: 2021, slides: [
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
            {title: 2001, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa corrupti nostrum totam"},
        ]},
    ]);


    useEffect(() => {
        //this will be request to Api for timlines and history dates
    }, [])

    
    return (
        <div className='container'>

            <TimelineSlider items={items}/>
            {/* Работают не зависимо друг от друга */}
            <TimelineSlider items={items}/>
        </div>
    )
}
