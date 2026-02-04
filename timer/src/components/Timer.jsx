import {useState, useRef, useEffect} from 'react';
import TimerDisplay from "./TimerDisplay.jsx";
import Button from "./Button.jsx";


const Timer = () => {
    const timerRef = useRef(null);
    
    
    const [time, setTime] = useState(() => {
        return Number(localStorage.getItem('time') || 0)
    });
    const [isRunning, setIsRunning] = useState(false);
    
    useEffect(() => {
        localStorage.setItem('time', time);
    }, [time])
    
    const toggleTimer = () => {
        if (isRunning) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            
        } else {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000)
        }
        
        setIsRunning(!isRunning); 
    }
    
    const resetTimer = () => {
        if (isRunning) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            timerRef.current = null;
            setTime(0);
            localStorage.removeItem('time');
            const startBtn = document.getElementById('start-btn');
            startBtn.innerHTML = 'Start'
        }
    }
    
    
    return (
        
    <div>
        <TimerDisplay time = {time}/>
        <Button isRunning = {isRunning} onToggle = {toggleTimer} onReset = {resetTimer}/>
    </div>
    
    )
}
            
export default Timer;