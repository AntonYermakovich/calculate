import { useState } from "react";
import "./App.scss";

function App() {
  const [display, setDisplay] = useState<number | string>(0);
  const [num1, setNum1] = useState<number | null>(null);
  // const [num2, setNum2] = useState<number | null>(null);
  const [operator, setOperator] = useState<string>("");

  const clickHandler = (symbol: string) => {
    // if(!num1)

    if (symbol === "+" || symbol === "-" || symbol === "*" || symbol === "/") {
      setOperator(symbol);
      setDisplay("");
      setNum1(+display);
      return;
    }

    if (symbol === "=" && !!operator) {
      if (!num1 || !display) return;

      switch (operator) {
        case "+":
          setDisplay(num1 + +display);
          break;
        case "-":
          setDisplay(num1 - +display);
          break;
        case "*":
          setDisplay(num1 * +display);
          break;
        case "/":
          setDisplay(num1 / +display);
          break;
      }

      setOperator("");
      setNum1(null)
      return;
    }

    setDisplay((prev) => (prev ? prev + symbol : symbol));
  };

  return (
    <>
      <div className="calculate">
        <div className="calculate__display">{display}</div>
        <div className="calculate__keywords">
          <div className="calculate__key">
            <button onClick={() => clickHandler("AC")} className="all-clear">
              AC
            </button>
            <button onClick={() => clickHandler("C")} className="clear">
              C
            </button>
            <button onClick={() => clickHandler("/")} className="operator">
              /
            </button>
          </div>
          <div className="calculate__key">
            <button onClick={() => clickHandler("7")}>7</button>
            <button onClick={() => clickHandler("8")}>8</button>
            <button onClick={() => clickHandler("9")}>9</button>
            <button onClick={() => clickHandler("*")} className="operator">
              *
            </button>
          </div>
          <div className="calculate__key">
            <button onClick={() => clickHandler("4")}>4</button>
            <button onClick={() => clickHandler("5")}>5</button>
            <button onClick={() => clickHandler("6")}>6</button>
            <button onClick={() => clickHandler("-")} className="operator">
              -
            </button>
          </div>
          <div className="calculate__key">
            <button onClick={() => clickHandler("1")}>1</button>
            <button onClick={() => clickHandler("2")}>2</button>
            <button onClick={() => clickHandler("3")}>3</button>
            <button onClick={() => clickHandler("+")} className="operator">
              +
            </button>
          </div>

          <div className="calculate__key">
            <button onClick={() => clickHandler("0")}>0</button>
            <button onClick={() => clickHandler(".")}>.</button>
            <button onClick={() => clickHandler("=")} className="equal">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
