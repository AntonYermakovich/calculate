import { useState } from "react";
import "./App.scss";

function App() {
  const [display, setDisplay] = useState<number | string>(0);
  const [num1, setNum1] = useState<number | null>(null);
  const [operator, setOperator] = useState<string>("");

  const clickHandler = (value: string) => {
    if(value === '.') return setDisplay('0.')
    if(value === 'ac'.toUpperCase()) return allReset()
    if(value === 'c'.toUpperCase()) return removeLastValue()

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      setOperator(value);
      setDisplay("");
      setNum1(+display);
      return;
    }

    if (value === "=" && !!operator) {
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
      setNum1(null);
      return;
    }

    setDisplay((prev) => (prev ? prev + value : value));
  };

  const removeLastValue = () => {
    if(display.toString().length === 1) return setDisplay(0)
    return setDisplay(display.toString().slice(0, -1))
  }

  const allReset = () => {
    setDisplay(0);
    setOperator("");
    setNum1(null);
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
