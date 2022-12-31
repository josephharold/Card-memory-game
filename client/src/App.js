import Cards from "./components/Cards";
import Timer from "./components/Timer";
import { useEffect, useState } from "react";
import { cardList } from "./api/cardList";
import shuffle from "./utils/Shuffle";
import { generateCards } from "./utils/Cards";
function App() {
  const [cards, setCards] = useState(generateCards(10));
  const [size, setSize] = useState(0);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60); // 10 minutes timer
  const cardTime = new Date(); 
  cardTime.setSeconds(cardTime.getSeconds()+ 1);

  return (
    <div className="App">
      <h1>initial app</h1>
      <Timer expiryTimestamp={time}/>
      <Cards cardList = {cards} expiryTimestamp = {cardTime}size={3}/>
    </div>
  );
}

export default App;
