import {useTimer} from 'react-timer-hook';
import { createContext, useContext } from 'react';
import { useGameContext } from '../App';
const TimerContext = createContext();

const useTimerContext = ()=>{
	const {
		isRunning, 
		start, 
		pause, 
		resume, 
		restartHandler, 
		seconds, 
		minutes
	} = useContext(TimerContext);
	return {
		isRunning, 
		start, 
		pause, 
		resume, 
		restart: restartHandler, 
		seconds, 
		minutes
	};
}
const TimerProvider = ({onExpire, expiryTimestamp, children})=>{
	const {
		seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
	} = useTimer(
		{
			expiryTimestamp,
			autoStart :false,
			onExpire: ()=> onExpire(),
		}
	)
	const restartHandler = ()=>{
		 const time = new Date();
		 time.setSeconds(time.getSeconds() + 60);
		 restart(time)
	}
	return(
		<TimerContext.Provider value={{isRunning, pause, start, resume, restartHandler, seconds}}>
			{children}
		</TimerContext.Provider>
	)
}

const Timer = ()=>{
	const {
		isRunning, 
		start, 
		pause, 
		resume, 
		restart, 
		seconds, 
		minutes
	}  = useTimerContext();
	const {isFinished} =  useGameContext();	
	let icon;
	if(isRunning === true){
		icon = 'pause'		
	}else if(isRunning ===false){
		if(isFinished === true){
			icon = 'restart';
		}else{
			icon = 'resume'
		}
	}


	const handleTimerControls = ()=>{
		if(isRunning === true){
			pause();
		}else if(isRunning ===false){
			if(isFinished === true){
				restart();
			}else{
				resume();
			}
		}
	}
	return(
		<>
			<div className=''>
				time: {seconds}	
			</div>
			<div className=''>
				<button onClick={()=>{handleTimerControls()}} className="w-max px-2 text-cyan-900 bg-white rounded-sm sm:rounded-md">{icon}</button>
			</div>
		</>

	)
}
export default TimerProvider;
export {Timer, useTimerContext};