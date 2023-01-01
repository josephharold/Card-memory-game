import Cards from "./components/Cards";
import Timer from "./components/Timer";
import { useState } from "react";
import { generateCards } from "./utils/Cards";
function App() {
  const [cards, setCards] = useState(generateCards(36));
  const [size, setSize] = useState(0);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60); // 10 minutes timer
  const cardTime = new Date(); 
  cardTime.setSeconds(cardTime.getSeconds()+ 1);

  return (
    <div className="App">
      <h1>initial app</h1>
      <Timer expiryTimestamp={time}/>
      <Cards cardList = {cards} expiryTimestamp = {cardTime} size={4}/>
    </div>
  );
}

export default App;
