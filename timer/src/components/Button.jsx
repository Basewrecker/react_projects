const Button = ({isRunning, onToggle, onReset}) => {
    return (
        
        <>
        <button onClick = {onToggle} className = "mt-5 bg-green-500 px-4 py-2 rounded-lg hover:-translate-y-1 transition-all duration-200 text-white font-semibold hover:cursor-pointer" id = "start-btn">
            {isRunning ? 'Pause' : 'Start'} 
        </button>
        <button onClick = {onReset} className = "ml-10 bg-red-400 px-4 py-2 rounded-lg text-white font-semibold hover:-translate-y-1 transition-all duration-200 hover:cursor-pointer">
            Reset
        </button>
    
       </>
    );
}

export default Button;