import { useState } from "react"
import { useGameContext } from "../App";

const Score = ()=>{
	const {score} = useGameContext();
	return(
		<div>
			score: {score}
		</div>
	)
}

export default Score;

