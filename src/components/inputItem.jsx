import React, { useState } from "react";

export default function InputList(props) {
  const [item, setItem] = useState("");
  const [isEmpty, setEmpty] = useState(false);
  function update(event) {
    const newValue = event.target.value;
    setItem(newValue);
    setEmpty(false);
  }

  return (
    <div className="form">
      <input
        className={isEmpty ? "red" : ""}
        id="inp"
        placeholder={isEmpty ? "enter some text!" : ""}
        onChange={update}
        type="text"
        value={item}
      />
      <button
        onClick={() => {
          if (item !== "") {
            props.onAdd(item);
            setItem("");
          } else {
            setEmpty(true);
          }
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
