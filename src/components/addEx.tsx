import { HtmlHTMLAttributes, useRef } from "react";

export default function AddEx() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="exCard">
      <label>
        <input className="addExText" ref={inputRef}></input>
        <button id="add" onClick={(e) => {console.log(inputRef.current?.value)}}>add</button>
      </label>
    </div>
  );
}
