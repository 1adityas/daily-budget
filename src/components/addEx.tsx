import { HtmlHTMLAttributes, useRef } from "react";
import ReactDOM from 'react-dom';


export default function AddEx() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="exCard">
      <label>
        <input className="addExText" ref={inputRef}></input>
        <button id="add" onClick={(e) => { 
          let tim=new Date().toLocaleTimeString();
          console.log(inputRef.current?.value);
          console.log(tim);
           }}>add</button>
      </label>
    </div>
  );
}
