import { useTimerContext } from "./Timer";
import { useGameContext } from "../App";
const Grid = ({onClick, children, size})=>{	
	const {
		isRunning, 
	} = useTimerContext();
	const {isFinished, score} = useGameContext();
	let colsTemplate;  
	switch(size){
		case 2:
			colsTemplate = 'grid-cols-2';	
			break;
		case 4:
			colsTemplate = 'grid-cols-4';	
			break;
		case 6:
			colsTemplate = 'grid-cols-6';	
			break;
		case 8:
			colsTemplate = 'grid-cols-8';	
			break;
		case 10:
			colsTemplate = 'grid-cols-10';	
			break;
	}
	let blur = isRunning === true ? '': 'blur-md';
	let pointerEvent = isFinished === true  ? 'pointer-events-none': '';
	let hidden = isRunning === true ? 'hidden': '';
	return(
		<>
		<div onClick = {()=>{onClick()}} className="relative w-full h-full">
			<div className={`${hidden} absolute flex flex-column justify-center items-center w-full h-full z-20`}>
				<span>
					{isFinished === true ? `Congrats!!!! Your score is ${score.toString()}` : 'click to start/resume'}
				</span>
			</div>
			<div className={`z-10 absolute w-full grid gap-4 ${colsTemplate} ${pointerEvent} ${blur}`}>
				{children}
			</div>

		</div>
		</>
	)
}

const Modal = ()=>{
	
}
export {Grid};