import Cards from "./components/Cards";
import TimerProvider,{Timer} from "./components/Timer";
import Score from './components/Score';
import React,{ useState, useContext, createContext } from "react";
import { uniqueCards } from "./utils/Cards";
import Header from "./components/Header";
import shuffle from "./utils/Shuffle";
const GameContext = createContext();

export const useGameContext = ()=>{
  const {
    cards,
    isFinished,
    setIsFinished,
    score,
    setScore,
    resetGame
  } = useContext(GameContext);
  return {
    cards,
    isFinished,
    setIsFinished,
    score,
    setScore,
    resetGame
  }
}

function App() {
  const [cards, setCards] = useState(shuffle([...uniqueCards]));
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0); 
  const time = new Date();
  time.setSeconds(time.getSeconds() + 20); // 10 minutes timer

  const cardTime = new Date(); 
  cardTime.setSeconds(cardTime.getSeconds()+ 1);

  const resetGame = ()=>{
    console.log('this is triggered');
    let newCards  = shuffle([...cards]);
    newCards = newCards.map(e=>{
      e.isOpen = false;
      e.isPaired = false;
      e.isDisabled = false;
      return e
    })
    setScore(0);
    setCards(newCards);
  }
  return (
    <div className="App flex flex-col justify-center h-screen w-screen">
      <GameContext.Provider value={{
        cards,
        isFinished,
        setIsFinished,
        score,
        setScore,
        resetGame
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
