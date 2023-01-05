import { useState } from "react"
import { useGameContext } from "../App";

const Score = ()=>{
	const {score} = useGameContext();
	return(
		<div className="">
			<h5 className="">
				score: {score}
			</h5>	
		</div>
	)
}

export default Score;

