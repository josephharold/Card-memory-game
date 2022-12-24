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
			<button onClick = {()=>{handleOnClick()}} className={`flip-card ${flipCardOpen} w-full h-full border border-slate-500`}>
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<h1>isActive: {isActive.toString()}</h1>
					</div>
				</div>
			</button>
		</div>
	)
}
export default Card;