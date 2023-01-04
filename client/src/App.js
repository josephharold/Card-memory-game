import Cards from "./components/Cards";
import TimerProvider,{Timer} from "./components/Timer";
import Score from './components/Score';
import React,{ useState, useContext, createContext, useEffect } from "react";
import { generateCards } from "./utils/Cards";

const GameContext = createContext();

export const useGameContext = ()=>{
  const {
    cards,
    isFinished,
    setIsFinished,
    score,
    setScore,
  } = useContext(GameContext);
  return {
    cards,
    isFinished,
    setIsFinished,
    score,
    setScore,
  }
}

function App() {
  const [cards, setCards] = useState(generateCards(36));
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0); 

  const time = new Date();
  time.setSeconds(time.getSeconds() + 10); // 10 minutes timer

  const cardTime = new Date(); 
  cardTime.setSeconds(cardTime.getSeconds()+ 1);

  return (
    <div className="App">
      {/* <h1>isRunning: {isRunning.toString()}</h1> */}
      <h1>isFinished: {isFinished.toString()}</h1>
      <h1>initial app</h1>
      <GameContext.Provider value={{
        cards,
        isFinished,
        setIsFinished,
        score,
        setScore,
      }}>
        <TimerProvider onExpire={()=>{setIsFinished(true)}}expiryTimestamp={time}>
          <Score score={score}/>
          <Timer/>
          <Cards cardList = {cards} expiryTimestamp = {cardTime} size={4}/>
        </TimerProvider>
      </GameContext.Provider>
    </div>
  );
}

export default App;
