import React, { useState } from "react";

function ListItem(props) {
  const [click, setClick] = useState(false);

  function handelClick() {
    setClick((prev) => {
      return !prev;
    });
  }

  return (
    <div>
      <li
        onClick={() => {
          handelClick();
          setTimeout(() => {
            props.onChecked(props.id);
          }, 1000);
        }}
        style={{ textDecoration: click ? "line-through" : "none" }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ListItem;
