import { useState } from "react";
const Grid = (props)=>{
	let classname;  
	switch(props.size){
		case 2:
			classname = 'grid-cols-2';	
			break;
		case 4:
			classname = 'grid-cols-4';	
			break;
		case 6:
			classname = 'grid-cols-6';	
			break;
		case 8:
			classname = 'grid-cols-8';	
			break;
		case 10:
			classname = 'grid-cols-10';	
			break;
	}
	return(
		<div className={`grid ${classname} gap-4`}>
			{props.children}
		</div>
	)
}

export {Grid};