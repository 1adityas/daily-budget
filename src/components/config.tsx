import React, { useEffect, useState } from "react";
import "../global-css.css";

function ConfigOptions(props: any) {
  return <></>;
}

function Config(prop: any) {
  const [enable, setEnable] = useState(false);

  // console.log(prop);
  return (
    <div>
      {/* its not center the gear */}
      <div className="divCenter">
        <img
          id="gearImg"
          onClick={() => {
            setEnable(() => (enable === true ? false : true));
          }}
          src={require("../assets/gear.png")}
        />
        {/* <ConfigOptions></ConfigOptions> */}

        
      </div>
    </div>
  );
}

export default Config;
