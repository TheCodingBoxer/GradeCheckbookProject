import ReactDOM from "react-dom";

export default function withOverlay(Component) {
  return ReactDOM.createPortal(
    <div id="overlay">
      <div id="overlay-container">{Component}</div>
    </div>,
    document.getElementById("root-overlay")
  );
}
