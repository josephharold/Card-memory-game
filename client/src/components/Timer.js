import {useTimer} from 'react-timer-hook';
import { createContext, useContext } from 'react';
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
	return(
		<>
			<div className=''>isRunning: {isRunning.toString()}</div>
			<div className=''>seconds : {seconds}</div>
			<div className=''>
				<button onClick={()=>{pause()}} className="w-32 border border-slate-500 rounded-lg">pause</button>
				<button onClick={()=>{restart()}} className="w-32 border border-slate-500 rounded-lg">restart</button>
			</div>
		</>

	)
}
export default TimerProvider;
export {Timer, useTimerContext};