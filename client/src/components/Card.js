import { useEffect, useState } from "react";
const Card = (props)=>{
	const flipCardOpen = props.isOpen === true ? 'flip-card-open' : '';
	return(
		<div>
			<button 
				onClick = {()=>{props.onClick()}} 
				className={`flip-card ${flipCardOpen}`}
			>
				<div className="flip-card-inner w-32 h-32 relative">
					<div className="flip-card-front border border-slate-500 rounded-lg bg-slate-200 w-full h-full absolute">
						front
					</div>
					<div className="flip-card-back border border-slate-500 rounded-lg bg-red-200 w-full h-full absolute">
						{props.name}
						{props.image}
					</div>
				</div>
			</button>
		</div>
	)
}
export default Card;