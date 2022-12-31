import shuffle from "./Shuffle"
import { v4 as uuidv4 } from 'uuid';
const cardClasses = [
	{
		name: 'class1',
		image: 'class1'
	},
	{
		name: 'class2',
		image: 'class2'
	},
	{
		name: 'class3',
		image: 'class3'
	},
	{
		name: 'class4',
		image: 'class4'
	},
	{
		name: 'class5',
		image: 'class5'
	},
] 

const generateCards = (size)=>{
	// size must be an even number
	let array = [];
	let count = 0;
	let temp;
	let temp1;
	for(let i=0; i<size/2; i++){
		if(count === cardClasses.length){
			count = 0;
		}
		temp = {...cardClasses[count]} 
		temp.isOpen = false
		temp.isPaired = false
		temp.isDisabled = false
		temp1 = {...temp}	
		temp.index = uuidv4();
		temp1.index = uuidv4();
		array.push(temp1);
		array.push(temp);
		count++;
	}
	return shuffle(array);
}

export {generateCards};