import "./Buttons.css";

function Buttons({ onMouseDown, onMouseUp, classlist }) {
  const buttonArray = [];
  function returnEachButton() {
    for (let i = 0; i < 100; i++) {
      const button = (
        <div
          key={i}
          className={`${classlist}`}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        >
          {i}
        </div>
      );
      buttonArray.push(button);
    }
    return <div className="buttons">{buttonArray}</div>;
  }

  return returnEachButton();
}

export default Buttons;
