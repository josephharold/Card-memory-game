import Cards from "./components/Cards";
import Timer from "./components/Timer";
function App() {



  const time = new Date();
  time.setSeconds(time.getSeconds() + 60); // 10 minutes timer
  return (
    <div className="App">
      <h1>initial app</h1>
      <Timer expiryTimestamp={time}/>
      <Cards size={3}/>
    </div>
  );
}

export default App;
