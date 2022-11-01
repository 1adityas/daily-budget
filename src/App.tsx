import React from "react";
import Header from "./components/header";
import Config from "./components/config";
import "./global-css.css";
import bgVideo from "./assets/bgVideo.mp4";
// import gear from "./assets/gear.svg";
function App() {
  return (
    <div className="mainBody">
      <video src={bgVideo} autoPlay loop muted></video>
      <div className="mainHeader">
        {" "}
        <div className="bodyFlex">
          <Header a></Header>
        </div>
      </div>
      <div className="configBody">
        <Config></Config>
      </div>
    </div>
  );
}

export default App;
