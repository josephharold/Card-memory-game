import Card from "./Card"
import {useState, useEffect} from 'react';
const Cards = ({size})=>{
	const [cardSet, setCardSet] = useState([]);
	useEffect(() => {
		let cardList = []	
		for(var i=0; i<Math.pow(size, 2); i++){
			cardList.push(
				<Card/>
			)
		}
		setCardSet(cardList);
	}, []);
	return(
		<div className={`grid grid-cols-3 grid-rows-3 gap-5`}>
			{cardSet}	
		</div>
	)
}

export default Cards;