import { useState } from "react";
import {useTimer} from 'react-timer-hook';
const Card = (props)=>{
	const [isActive, setIsActive] = useState(false);
	const [isDisabled, setIsDisabled] = useState(props.isDisabled);
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
  } = useTimer({ expiryTimestamp: props.expiryTimestamp, autoStart: false, onExpire: () => setIsActive(false) });

	const restartHandler = ()=>{
		const datetime = new Date();
		datetime.setSeconds(datetime.getSeconds() + 2);
		restart(datetime)
	}
	const openCard = ()=>{
		setIsActive(true);
		if(props.isPaired === false){
			restartHandler();	
		}
	}
	const closeCard = ()=>{
		if(props.isPaired ===false){
			setIsActive(false);
			pause();
		}else{
			setIsDisabled(true);
		}
	}
	const handleOnClick = ()=>{
		if(props.isDisabled ==false ){
			props.onClick();
			isActive === false ? openCard() : closeCard();
		}
	}
	const flipCardOpen = isActive ? 'flip-card-open' : '';
	return(
		<div>
			<button onClick = {()=>{handleOnClick()}} className={`flip-card ${flipCardOpen} border border-slate-500`}>
				<div className="flip-card-inner w-32 h-32 relative">
					<div className="flip-card-front bg-slate-200 w-full h-full absolute">
						front
					</div>
					<div className="flip-card-back bg-red-200 w-full h-full absolute">
						{props.name}
					</div>
				</div>
			</button>
		</div>
	)
}
export default Card;