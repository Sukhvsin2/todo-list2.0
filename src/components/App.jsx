import React, { useState } from "react";
import ListItem from "../components/listItem";
import InputList from "../components/inputItem";

function App() {
  const [listItems, setList] = useState([]);

  function add(item) {
    setList((prev) => {
      return [...prev, item];
    });
  }

  function deleteItem(id) {
    setList((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputList onAdd={add} />
      <div>
        <ul>
          {listItems.map((listItem, index) => (
            <ListItem
              key={index}
              id={index}
              text={listItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
