import { useState } from "react";
// import counter from './assets/react.svg'
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const Increase = () => {
    setCounter(counter + 1);
  };
  const Decrease = () => {
    setCounter(counter - 1);
  };

  if (counter < 0) {
    console.log(`counter is negative`);
    setCounter(0);
  }
  return (
    <>
      <img id="log-" src="counter.png" alt="tati" />
      <h1>First React Project</h1>
      <h2>Counter</h2>
      {counter}
      <br />
      <br />
      <button onClick={Increase}>Increase value</button>
      <br />
      <br />
      <button onClick={Decrease}>Decrease value</button>
    </>
  );
}

export default App;
