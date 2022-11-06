import React from "react";
import Header from "./components/header";
import Config from "./components/config";
import AddEx from "./components/addEx";
import "./global-css.css";
import bgVideo from "./assets/bgVideo.mp4";
import { useState } from "react";

// import gear from "./assets/gear.svg";
function App() {
  let [cur, setCur] = useState(0);
  let [total, setTotal] = useState(0);
  return (
    <div className="mainBody">
      <video src={bgVideo} autoPlay loop muted />
      <div className="mainHeader">
        {" "}
        <div className="bodyFlex">
          <Header a cur={cur} setCur={setCur} total={total} setTotal={setTotal}></Header>
        </div>
      </div>
      <AddEx></AddEx>
      <div className="configBody">
        <Config cur={cur} setCur={setCur} total={total} setTotal={setTotal}></Config>
      </div>
    </div>
  );
}

export default App;
