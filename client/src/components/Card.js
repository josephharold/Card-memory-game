import { useEffect, useState } from "react";
const Card = (props)=>{
	const flipCardOpen = props.isOpen === true ? 'flip-card-open' : '';
	return(
		<div className="w-min m-auto">
			<button 
				onClick = {()=>{props.onClick()}} 
				className={`flip-card w-min ${flipCardOpen}`}
			>
				<div className="flip-card-inner w-24 h-24 sm:w-24 sm:h-24 md:w-24 md:h-24 relative">
					<div className="flip-card-front rounded-lg bg-cyan-900 w-full h-full absolute">
					</div>
					<div className="flip-card-back rounded-lg bg-cyan-50 w-full h-full absolute">
						{props.name}
						{props.image}
					</div>
				</div>
			</button>
		</div>
	)
}
export default Card;