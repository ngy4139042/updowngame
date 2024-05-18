import "./Board.css";
import Result from "./Result";
import Updown from "./Updown";
import Temp from "./Temp";

function Board({ selected, temp, updown }) {
  return (
    <div className="board">
      <Result>{selected}</Result>
      <div className="details">
        <Updown updown={updown}></Updown>
        <Temp temp={temp}></Temp>
      </div>
    </div>
  );
}

export default Board;
