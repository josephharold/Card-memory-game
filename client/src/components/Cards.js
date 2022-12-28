import Card from "./Card"
import {useState, useEffect} from 'react';
import { cardList as list } from "../api/cardList";
const Cards = ({size})=>{
	const [cardSet, setCardSet] = useState(list);
	const [openCards, setOpenCards] = useState([]);
	const [score, setScore] = useState(0);
	const onCardClick = (name, index)=>{
		// if opencards less 1, then add opencards to stack
		if(openCards.length < 1){
			let temp = [...openCards]
			temp.push({name: name, index: index});
			setOpenCards(temp);
		}
		// if opencards stack is equal to two then, check if the cards in the stack match
		else if(openCards.length==1){
			let temp = [...openCards]
			temp.push({name: name, index: index});
			setOpenCards(temp);
			// if they match then update they opencards in the cardlist to 'paired'
			if(checkCards() ===true){
				// todo update cardlist
			}
			// else if they don't match, then close 
			else{
				// todo if they don't match then close
			}
		}
	}
	
	useEffect(() => {
		console.log(cardSet)
		if(openCards.length==2){
			if(JSON.stringify(openCards[0].name)===JSON.stringify(openCards[1].name)){
				let temp = [...cardSet];	
				let index1 = temp.findIndex((e)=>{ return e.name === openCards[0].name && e.index === openCards[0].index});	
				let index2 = temp.findIndex((e)=>{ return e.name === openCards[0].name && e.index === openCards[1].index});	
				temp[index1].isPaired = true;
				temp[index2].isPaired = true;
				setCardSet(temp);
			}	
			else{
			}
			setOpenCards([]);
		}else{
			console.log('opencards !== 2');
		}
	}, [openCards]);

	const checkScore = (list)=>{
		const result = list.filter((e)=>{return e.isPaired===true}).length;
		return result
	}

	useEffect(() => {
		setScore(checkScore(cardSet));	
	}, [cardSet]);

	// const filterCardSet = (name, index)=>{
	// 	// let temp = [...cardSet];
	// }
	const checkCards = ()=>{
		if(JSON.stringify(openCards[0]) === JSON.stringify(openCards[1])){
			return true	
		}else{
			return false
		}
	}
	useEffect(() => {
		setCardSet(list.map((element)=>{
			return element
		}));
	}, []);
	return(
		<>
			<span>{score}</span>
			<div className={`grid grid-cols-3 grid-rows-3 gap-5`}>
				{cardSet.map((e)=>{
					let datetime = new Date();
					datetime.setSeconds(datetime.getSeconds + 2);
					return(
						<Card
							index={e.index}		
							name={e.name}
							image={e.image}
							isPaired={e.isPaired}
							isDisabled={e.isDisabled}
							onClick={()=>{
								onCardClick(e.name, e.index)
							}}
							expiryTimestamp={datetime}
						/>
					)
				})}
			</div>
		</>
	)
}

export default Cards;