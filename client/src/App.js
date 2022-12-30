import Cards from "./components/Cards";
import Timer from "./components/Timer";
import { useState } from "react";
function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60); // 10 minutes timer
  const cardTime = new Date(); 
  cardTime.setSeconds(cardTime.getSeconds()+ 1);
  return (
    <div className="App">
      <h1>initial app</h1>
      <Timer expiryTimestamp={time}/>
      <Cards expiryTimestamp = {cardTime}size={3}/>
    </div>
  );
}

export default App;
