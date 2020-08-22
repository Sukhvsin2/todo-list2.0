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

  function clearList() {
    setList([]);
  }

  function ClearBtn() {
    if (listItems.length !== 0) {
      return (
        <div className="clear">
          <button onClick={clearList} className="btn">
            Clear List
          </button>
          <br />
          <small>click the item to delete from list!</small>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div>
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
      <ClearBtn />
    </div>
  );
}

export default App;
