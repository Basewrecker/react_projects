import {useState, useRef} from 'react';


const App = () => {
    const timerRef = useRef(null);
    
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
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
            const startBtn = document.getElementById('start-btn');
            startBtn.innerHTML = 'Start'
        }
    }
    
    
    return (
        
    <div className = "max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
        <h2 className = "text-4xl font-semibold mt-4">
            Timer: {time}
        </h2>
        <button onClick = {toggleTimer} className = "mt-5 bg-green-500 px-4 py-2 rounded-lg hover:-translate-y-1 transition-all duration-200 text-white font-semibold hover:cursor-pointer" id = "start-btn">
            {isRunning ? 'Pause' : 'Start'} 
        </button>
        <button onClick = {resetTimer} className = "ml-10 bg-red-400 px-4 py-2 rounded-lg text-white font-semibold hover:-translate-y-1 transition-all duration-200 hover:cursor-pointer">
            Reset
        </button>
    </div>
    
    )
}
            
export default App;