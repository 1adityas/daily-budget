import React from "react";
import Header from "./components/header";
import "./global-css.css";
import bgVideo from "./assets/bgVideo.mp4";
function App() {
  return (
    <div className="mainBody">
      <video src={bgVideo} autoPlay loop muted></video>
      <div className="mainHeader">
        {" "}
        <div className="bodyFlex">
          <Header></Header>
        </div>
      </div>
    </div>
  );
}

export default App;
