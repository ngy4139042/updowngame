import "./Updown.css";

function Updown({ updown }) {
  function returnUpdown() {
    const isReseted = updown == "-";
    const updownValue = isReseted ? updown : `${updown}!`;
    return updownValue;
  }

  return <div className="updown">{returnUpdown()}</div>;
}

export default Updown;
