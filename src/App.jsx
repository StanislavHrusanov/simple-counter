import { useEffect, useState } from "react";
import { useSpring } from "framer-motion";
import styles from "./App.module.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [displayedCounter, setDisplayeCounter] = useState(0);
  const [input, setInput] = useState("");
  const [isAnimated, setIsAnimated] = useState(false);

  const springCount = useSpring(displayedCounter, {
    bounce: 0,
    duration: 1000,
  });

  springCount.on("change", (value) => {
    setDisplayeCounter(Math.round(value));
  });

  useEffect(() => {
    springCount.set(counter);
  }, [springCount, counter]);

  function incrementHandler() {
    setCounter((state) => state + 1);
    setIsAnimated(false);
  }

  function decrementHandler() {
    if (counter > 0) {
      setCounter((state) => state - 1);
    }
    setIsAnimated(false);
  }

  function resetHandler() {
    setCounter(0);
    setIsAnimated(false);
  }

  function setCounterHandler(number) {
    const numberToSet = Number(number);

    if (numberToSet >= 0) {
      setCounter(numberToSet);
      setInput("");
      setIsAnimated(true);
    } else {
      window.alert("Counter must be a positive number!");
      setInput("");
      return;
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.counter}>
        <p>
          Counter:
          <span>{isAnimated ? displayedCounter : counter}</span>
        </p>
      </div>
      <div className={styles.buttons}>
        <button onClick={decrementHandler} disabled={counter <= 0}>
          -
        </button>
        <button onClick={incrementHandler}>+</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <div className={styles["input-container"]}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={() => setCounterHandler(input)}>Set</button>
      </div>
    </main>
  );
}

export default App;
