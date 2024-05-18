import "./App.css";
import random from "../random";
import { useState } from "react";
import Buttons from "./Buttons";
import Board from "./Board";
import Pane from "./Pane";

const buttonArray = document.querySelectorAll(".button");
let answer = random();

function App() {
  let [selected, setSelected] = useState("-");
  let [temp, setTemp] = useState(0);
  let [updown, setUpdown] = useState("-");
  let [hidden, setHidden] = useState("hidden");
  let [zindex, setZindex] = useState("zindex");

  function handleButtonMouseDown(e) {
    if (
      !e.target.classList.contains("correct") &&
      !e.target.classList.contains("incorrect")
    ) {
      setSelected(e.target.innerHTML);
      setTemp(temp + 1);
    }
  }

  function handleButtonMouseUp(e) {
    if (
      !e.target.classList.contains("correct") &&
      !e.target.classList.contains("incorrect")
    ) {
      if (answer == selected) {
        setUpdown("Correct");
        e.target.classList.add("correct");
        setTimeout(() => {
          setHidden("");
          setZindex("");
        }, 1000);
      } else {
        answer > selected ? setUpdown("Up") : setUpdown("Down");
        e.target.classList.add("incorrect");
      }
    }
  }

  function handleResetClick() {
    setHidden("hidden");
    setTimeout(() => {
      setZindex("zindex");
    }, 1000);
    resetBoard();
    resetButtons();
  }

  function resetBoard() {
    setTemp(0);
    setSelected("-");
    setUpdown("-");
    answer = random();
  }

  function resetButtons() {
    for (let i = 0; i < buttonArray.length; i++) {
      buttonArray[i].className = "button";
    }
  }

  return (
    <div className="app">
      <div className={`cong ${hidden} ${zindex}`}>
        <div className="cong-text">Congraturation!</div>
        <div className="cong-button" onClick={handleResetClick}>
          again?
        </div>
      </div>
      <Board selected={selected} temp={temp} updown={updown}></Board>
      <Buttons
        onMouseDown={handleButtonMouseDown}
        onMouseUp={handleButtonMouseUp}
      ></Buttons>
      <Pane hidden={hidden} zindex={zindex}></Pane>
    </div>
  );
}

export default App;
