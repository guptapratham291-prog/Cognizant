import React, { useState } from "react";
import "./App.css";
import CurrencyConvertor from "./components/CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  // Increment counter
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement counter
  const decrement = () => {
    setCount(count - 1);
  };

  // Hello Message
  const sayHello = () => {
    alert("Hello! Have a Nice Day.");
  };

  // Multiple methods
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Welcome Message
  const sayWelcome = (msg) => {
    alert(msg);
  };

  // Synthetic Event
  const onPress = (event) => {
    alert("I was clicked");
    console.log(event);
  };

  return (
    <div className="container">
      <h1>Event Examples App</h1>

      <h2>Counter : {count}</h2>

      <button onClick={handleIncrement}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <br />
      <br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br />
      <br />

      <button onClick={onPress}>
        Synthetic Event (OnPress)
      </button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;