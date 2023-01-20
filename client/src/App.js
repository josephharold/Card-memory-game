import Cards from "./components/Cards";
import TimerProvider,{Timer} from "./components/Timer";
import Score from './components/Score';
import React,{ useState, useContext, createContext, useEffect } from "react";
import { generateCards } from "./utils/Cards";
import Header from "./components/Header";

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
  const [cards, setCards] = useState(generateCards(16));
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0); 

  const time = new Date();
  time.setSeconds(time.getSeconds() + 10); // 10 minutes timer

  const cardTime = new Date(); 
  cardTime.setSeconds(cardTime.getSeconds()+ 1);

  return (
    <div className="App flex flex-col justify-center h-screen w-screen">
      <GameContext.Provider value={{
        cards,
        isFinished,
        setIsFinished,
        score,
        setScore,
      }}>
        <TimerProvider onExpire={()=>{setIsFinished(true)}}expiryTimestamp={time}>
            <div className="w-max mx-auto text-lg md:text-2xl">Card Memory Game</div>
            <div className="game-container p-5 rounded-lg border-4 border-cyan-900 w-max mx-auto">
              <Header>
                <Score score={score}/>
                <Timer/>
              </Header>
              <Cards cardList = {cards} expiryTimestamp = {cardTime} size={4}/>
            </div>
        </TimerProvider>
      </GameContext.Provider>
    </div>
  );
}

export default App;
