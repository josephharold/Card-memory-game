import { useState } from "react";
import {useTimer} from 'react-timer-hook';
const Card = (expiryTimestamp)=>{
	const [isActive, setIsActive] = useState(false);
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
  } = useTimer({ expiryTimestamp, autoStart: false, onExpire: () => setIsActive(false) });

	const restartHandler = ()=>{
		const datetime = new Date();
		datetime.setSeconds(datetime.getSeconds() + 1);
		restart(datetime)
	}
	const openCard = ()=>{
		setIsActive(true);
		restartHandler();	
	}
	const closeCard = ()=>{
		setIsActive(false);
		pause();
	}
	const handleOnClick = ()=>{
		isActive === false ? openCard() : closeCard();
	}
	const flipCardOpen = isActive ? 'flip-card-open' : '';
	console.log(isActive);
	return(
		<div>
			<button onClick = {()=>{handleOnClick()}} className={`flip-card ${flipCardOpen} border border-slate-500`}>
				<div className="flip-card-inner w-32 h-32 relative">
					<div className="flip-card-front bg-slate-200 w-full h-full absolute">
						front
					</div>
					<div className="flip-card-back bg-red-200 w-full h-full absolute">
						back
					</div>
				</div>
			</button>
		</div>
	)
}
export default Card;