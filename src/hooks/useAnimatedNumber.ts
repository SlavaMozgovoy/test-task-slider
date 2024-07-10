import { useEffect, useState } from "react";







export default function useAnimatedNumber (newValue : number, time: number) : number {

    const [currentValue, setCurrentValue] = useState(newValue);

    useEffect(() => {
        let direction = Math.sign(newValue - currentValue);
        currentValue !== newValue && setTimeout(setCurrentValue, time, currentValue + direction);
    }, [newValue, currentValue])
    
    return currentValue;
}