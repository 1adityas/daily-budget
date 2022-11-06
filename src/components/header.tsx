import React from "react";
import "../global-css.css";

function Header(prop: any) {
  // console.log(prop.cur); 
  return (
    <div>
      <div className="headerBoi">
        <h1>₹ {prop.total}</h1>
        <hr></hr>
        <h1>₹ {prop.cur}</h1>
      </div>
    </div>
  );
}

export default Header;
