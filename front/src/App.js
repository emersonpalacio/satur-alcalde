import "./App.css";
import Navbar from "./components/Navbar";
const image = require("./image/satur.jpg");

function App() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", padding: "50px", color: "#287233" }}>
        <img src={image}></img>
      </h1>
    </div>
  );
}

export default App;
