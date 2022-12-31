import Card from "./Card"
import {useState, useEffect} from 'react';
import { useTimer } from "react-timer-hook";
import shuffle from "../utils/Shuffle";
const Cards = ({expiryTimestamp, cardList})=>{
	const [cardSet, setCardSet] = useState(cardList);
	const [pair, setPair] = useState([]);
	const [score, setScore] = useState(0);
	const {start, pause, resume, restart} = useTimer(
		{
			expiryTimestamp,
			autoStart :false,
			onExpire: ()=>{
				closeCards();
			}
		}
	)

	const closeCards = (index)=>{
		let temp = [...cardSet];
		// console.log(temp);
		temp = temp.map((e)=>{ 
			if(e.isPaired === false){
				e.isOpen = false
				return e
			}else{
				return e
			}
		})	
		console.log('closed')
		setCardSet(temp);
	}

	const onCardClick = (element, index)=>{
		let cardset_ = [...cardSet];
		let pair_ = [...pair];
		if(pair.length === 2){
			closeCards(index);
			pair_.length = 0;	
		}
		cardset_[index].isOpen = true;
		pair_.push(cardset_[index]);

		setCardSet(cardset_);
		setPair(pair_);
	}	
	const restartHandler = ()=>{
		 const time = new Date();
		 time.setSeconds(time.getSeconds() + 1);
		 restart(time)
	}
	useEffect(() => {
		restartHandler();
		// if pair has two cards, then compare the two cards
		if(pair.length ===2){
			// if they match, udpate the cardSet
			if(JSON.stringify(pair[0].name) === JSON.stringify(pair[1].name)){
				let cardset_ = [...cardSet]
				let index1 = cardset_.findIndex((e)=>{return e.name === pair[0].name && e.index === pair[0].index});
				let index2 = cardset_.findIndex((e)=>{return e.name === pair[1].name && e.index === pair[1].index});
				cardset_[index1].isPaired = true; 
				cardset_[index2].isPaired = true; 
				setCardSet(cardset_);
				setScore(prev=>prev + 1)
				console.log('setcardset:',cardset_);	
			}else{
				// if they don't match dont udpate
				console.log('isNotMatch');
			}
		}
	}, [pair]);
	return(
		<>
			<div>score: {score}</div>
			<div className={`grid grid-cols-3 grid-rows-3 gap-5`}>
				{cardSet.map((element, index)=>{
					return(
						<Card
							onClick={()=>{
								onCardClick(element, index)
							}}
							isOpen = {element.isOpen}
							name = {element.name}
						/>
					)
				})}
			</div>
		</>
	)
}

export default Cards;