import {useTimer} from 'react-timer-hook';

const Timer = ({expiryTimestamp})=>{
	const {
		seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
	} = useTimer(
		{
			expiryTimestamp,
			autoStart :false,
			onExpire: ()=>{
				console.warn('expire')
			}
		}
	)
	const restartHandler = ()=>{
		 const time = new Date();
		 time.setSeconds(time.getSeconds() + 60);
		 restart(time)
	}
	return(
		<>
		<div className=''>isRunning: {isRunning.toString()}</div>
		<div className=''>seconds : {seconds}</div>
		<div className=''>
			<button onClick={()=>{start()}} className="w-32 border border-slate-500 rounded-lg">start</button>
			<button onClick={()=>{pause()}} className="w-32 border border-slate-500 rounded-lg">pause</button>
			<button onClick={()=>{resume()}} className="w-32 border border-slate-500 rounded-lg">resume</button>
			<button onClick={()=>{restartHandler()}} className="w-32 border border-slate-500 rounded-lg">restart</button>
		</div>
		</>
	)
}

export default Timer;