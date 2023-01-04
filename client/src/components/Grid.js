import { useTimerContext } from "./Timer";
import { useGameContext } from "../App";
const Grid = ({onClick, children, size})=>{	
	const {
		isRunning, 
	} = useTimerContext();
	const {isFinished,} = useGameContext();
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
	return(
		<>
			<div onClick = {()=>{onClick()}}className={`grid gap-4 ${colsTemplate} ${pointerEvent} ${blur}`}>
				{children}
			</div>
		</>
	)
}

export {Grid};