import Cards from "./components/Cards";
import TimerProvider,{Timer} from "./components/Timer";
import React,{ useState } from "react";
import { generateCards } from "./utils/Cards";

function App() {
  const [cards, setCards] = useState(generateCards(36));
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60); // 10 minutes timer
  const cardTime = new Date(); 
  cardTime.setSeconds(cardTime.getSeconds()+ 1);

  return (
    <div className="App">
      <TimerProvider expiryTimestamp={time}>
        <h1>initial app</h1>
        <Timer/>
        <Cards cardList = {cards} expiryTimestamp = {cardTime} size={4}/>
      </TimerProvider>
    </div>
  );
}

export default App;
