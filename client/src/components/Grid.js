import { useState } from "react";
import { useTimerContext } from "./Timer";
const Grid = ({children, size})=>{	
	const {
		isRunning, 
		start, 
		pause, 
		resume, 
		restartHandler, 
		seconds, 
		minutes
	} = useTimerContext();
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
	return(
		<>
			<div className={`grid ${colsTemplate} gap-4 ${blur}`}>
				{children}
			</div>
		</>
	)
}

export {Grid};