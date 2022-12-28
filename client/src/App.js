import Cards from "./components/Cards";
import Timer from "./components/Timer";
import { useState } from "react";
function App() {
  const [cardList, setCardList] = useState([
    {
      name: 'image1',
      image: 'image1'
    },
    {
      name: 'image1',
      image: 'image1'
    },
    {
      name: 'image2',
      image: 'image2'
    },
    {
      name: 'image3',
      image: 'image3'
    },
    {
      name: 'image4',
      image: 'image4'
    },
    {
      name: 'image5',
      image: 'image5'
    },
    {
      name: 'image6',
      image: 'image6'
    },
    {
      name: 'image7',
      image: 'image7'
    },
    {
      name: 'image8',
      image: 'image8'
    },
  ]);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60); // 10 minutes timer
  return (
    <div className="App">
      <h1>initial app</h1>
      <Timer expiryTimestamp={time}/>
      <Cards list={cardList} size={3}/>
    </div>
  );
}

export default App;
