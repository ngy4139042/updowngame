import "./Pane.css";

function Pane({ hidden, zindex }) {
  return (
    <div className={`pane ${hidden} ${zindex}`}>
      <div className="pane1"></div>
      <div className="pane2"></div>
      <div className="pane3"></div>
      <div className="pane4"></div>
    </div>
  );
}

export default Pane;
