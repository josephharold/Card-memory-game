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
			colsTemplate = 'lg:grid-cols-2';	
			break;
		case 4:
			colsTemplate = 'lg:grid-cols-4';	
			break;
		case 6:
			colsTemplate = 'lg:grid-cols-6';	
			break;
		case 8:
			colsTemplate = 'lg:grid-cols-8';	
			break;
		case 10:
			colsTemplate = 'lg:grid-cols-10';	
			break;
	}
	let blur = isRunning === false ? 'blur-lg': '';
	let pointerEvent = isFinished === true  && isRunning === false? 'pointer-events-none': '';
	let hidden = isRunning === true ? 'hidden': '';
	return(
		<>
		<div onClick = {()=>{onClick()}} className="cursor-pointer relative flex flex-row justify-center">
			<div className={`text-md md:text-xl lg:text-2xl ${hidden} absolute flex flex-column justify-center items-center w-full h-full z-20`}>
				<div>
					{isFinished === true ? `Congrats!!!! Your score is ${score.toString()}` : 'click to start/resume'}
				</div>
			</div>
			<div className={`w-full h-full grid gap-4 inset-0 grid-cols-4 ${colsTemplate} ${blur} ${pointerEvent}`}>
				{children}
			</div>
		</div>
		</>
	)
}
export {Grid};