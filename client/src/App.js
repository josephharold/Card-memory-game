import Cards from "./components/Cards";
import Timer from "./components/Timer";
import { useEffect, useState } from "react";
import { cardList } from "./api/cardList";
import shuffle from "./utils/Shuffle";
function App() {
  const [cards, setCards] = useState(shuffle(cardList));
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60); // 10 minutes timer
  const cardTime = new Date(); 
  cardTime.setSeconds(cardTime.getSeconds()+ 1);
  // useEffect(()=>{
  //   const cards_ = shuffle(cardList);	
	// 	setCards(cards_);
  // },[])
  return (
    <div className="App">
      <h1>initial app</h1>
      <Timer expiryTimestamp={time}/>
      <Cards cardList = {cards} expiryTimestamp = {cardTime}size={3}/>
    </div>
  );
}

export default App;
