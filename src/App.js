/** @format */

import "./App.css";
import { useState } from "react";

function App() {
  const [display, setdisplay] = useState("0");

  const changeDisplay = (e) => {
    const current = e.target.value;

    if (display === "0" && current === "0") return;
    if (display.length === 1 && "123456789".includes(current))
      setdisplay(current);
    if (display.length > 1 && "0123456789".includes(current))
      setdisplay(display + current);
    if ("123456789".includes(display) && "1234567890".includes(current))
      setdisplay(display + current);
    if (current === "." && !display.includes("."))
      setdisplay(display + current);
    if (
      current === "." &&
      display?.match(/[012345678.9]+/g)?.length > display?.match(/[.]/g)?.length
    )
      setdisplay(display + current);
    if (display.length >= 1 && "+-*/".includes(current))
      setdisplay(display + current);
    if (current === "=")
      setdisplay(
        eval(
          display?.match(/[+-/*/]{0,1}[-]?[0123456789.]+?/g).join("")
        ).toString()
      );
  };

  return (
    <div className='App'>
      <div id='main'>
        <button type='button' id='equals' value='=' onClick={changeDisplay}>
          =
        </button>
        <button type='button' id='zero' value='0' onClick={changeDisplay}>
          0
        </button>
        <button type='button' id='one' value='1' onClick={changeDisplay}>
          1
        </button>
        <button type='button' id='two' value='2' onClick={changeDisplay}>
          2
        </button>
        <button type='button' id='three' value='3' onClick={changeDisplay}>
          3
        </button>
        <button type='button' id='four' value='4' onClick={changeDisplay}>
          4
        </button>
        <button type='button' id='five' value='5' onClick={changeDisplay}>
          5
        </button>
        <button type='button' id='six' value='6' onClick={changeDisplay}>
          6
        </button>
        <button type='button' id='seven' value='7' onClick={changeDisplay}>
          7
        </button>
        <button type='button' id='eight' value='8' onClick={changeDisplay}>
          8
        </button>
        <button type='button' id='nine' value='9' onClick={changeDisplay}>
          9
        </button>
        <button type='button' id='add' value='+' onClick={changeDisplay}>
          +
        </button>
        <button type='button' id='subtract' value='-' onClick={changeDisplay}>
          -
        </button>
        <button type='button' id='multiply' value='*' onClick={changeDisplay}>
          *
        </button>
        <button type='button' id='divide' value='/' onClick={changeDisplay}>
          /
        </button>
        <button type='button' id='decimal' value='.' onClick={changeDisplay}>
          .
        </button>
        <button type='button' id='clear' onClick={() => setdisplay("0")}>
          ac
        </button>
        <div type='number' id='display'>
          {display}
        </div>
      </div>
    </div>
  );
}

export default App;
