import React, { EventHandler, useEffect, useState } from "react";




export function useResize() : number {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = (event: any) => {
          setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      return width;
}