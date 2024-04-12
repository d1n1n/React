import React, { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState('');
    

    useEffect(() => {
        loadTime();
        const intervalId = setInterval(loadTime, 1000);

        return () => {
            clearInterval(intervalId); 
        };
    }, []);

    const loadTime = () => {
        const url = 'http://worldtimeapi.org/api/timezone/Europe/Kyiv';
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                const currentTime = new Date(data.utc_datetime).toLocaleTimeString('en-US', { hour12: false });
                setTime(currentTime);
            })
            
    }

   

    return (
        <div className="clock-container">
            <div className="time-display">
                {time}
            </div>
            
        </div>
    )
}
