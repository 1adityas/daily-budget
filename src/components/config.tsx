import React, { useEffect, useState } from "react";
import "../global-css.css";
import "./configModal";
import ConfigModal from "./configModal";

function Config(prop: any) {
  const [enable, setEnable] = useState(false);


  return (
    <div>
      {/* its not center the gear */}
      <div className="divCenter">
        <div className="divFlx">
        <ConfigModal show={enable} />

          <img
            id="gearImg"
            onClick={() => {
              setEnable(() => (enable === true ? false : true));
            }}
            src={require("../assets/gear.png")}/>
        </div>
        </div>
    </div>
  );
}

export default Config;
