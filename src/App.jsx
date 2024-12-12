import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [counter, setCounter] = useState(0);

  function incrementHandler() {
    setCounter((state) => state + 1);
  }

  function decrementHandler() {
    setCounter((state) => state - 1);
  }

  function resetHandler() {
    setCounter(0);
  }
  return (
    <main className={styles.main}>
      <div className={styles.counter}>
        <p>
          Counter:<span>{counter}</span>
        </p>
      </div>
      <div className={styles.buttons}>
        <button onClick={decrementHandler}>-</button>
        <button onClick={incrementHandler}>+</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </main>
  );
}

export default App;
