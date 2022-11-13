import React, {useState} from "react";
import List from "./List";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input type="text" placeholder="Add Items" value={inputList} onChange={itemEvent}/>
          <button onclick={listOfItems}>+</button>
          <ol>
            {/*<li>{inputList}</li>*/}
            {items.map((itemval) => {
              return <List text={itemval}/>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;