import Card from "./Card"
import {useState, useEffect} from 'react';
import { useTimer } from "react-timer-hook";
import { Grid } from "./Grid";
import { useTimerContext } from "./Timer";
import { useGameContext } from "../App";
const Cards = ({expiryTimestamp, cardList, size})=>{
	const [cardSet, setCardSet] = useState(cardList);
	const [pair, setPair] = useState([]);
	const { restart, } = useTimer(
		{
			expiryTimestamp,
			autoStart :false,
			onExpire: ()=>{
				closeCards();
			}
		}
	)
	const {
		isRunning: gameIsRunning,
		resume: resumeGame,
	} = useTimerContext();

	const {isFinished, setIsFinished, setScore} = useGameContext();

	const closeCards = (index)=>{
		let temp = [...cardSet];
		temp = temp.map((e)=>{ 
			if(e.isPaired === false){
				e.isOpen = false
				return e
			}else{
				return e
			}
		})	
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
	const restartCard = ()=>{
		 const time = new Date();
		 time.setSeconds(time.getSeconds() + 1);
		 restart(time)
	}
	const handleCards = ()=>{
		if(!gameIsRunning){
			if(!isFinished){
				resumeGame();
			}
		}
	}
	useEffect(() => {
		restartCard();
		// if pair has two cards, then compare the two cards
		if(pair.length ===2){
			// if they match, udpate the cardSet
			if(JSON.stringify(pair[0].name) === JSON.stringify(pair[1].name)){
				let cardset_ = [...cardSet]
				let index1 = cardset_.findIndex((e)=>{return e.name === pair[0].name && e.index === pair[0].index});
				let index2 = cardset_.findIndex((e)=>{return e.name === pair[1].name && e.index === pair[1].index});
				cardset_[index1].isPaired = true; 
				cardset_[index2].isPaired = true; 
				setScore(prev=> prev+1);
				setCardSet(cardset_);
			}else{
				// if they don't match dont udpate
			}
		}
	}, [pair]);
	return(
		<>
			<div className="">
				<Grid onClick={()=>{handleCards()}} size={size}>
					{cardSet.map((element, index)=>{
						return(
							<Card
								onClick={()=>{
									onCardClick(element, index)
								}}
								isOpen = {element.isOpen}
								name = {element.name}
								// key={element.index}
								image={element.image}
							/>
						)
					})}
				</Grid>
			</div>
		</>
	)
}

export default Cards;