import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";

function Form() {
  return <></>;
}

function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [listOfItems, setListOfItems] = useState([]);

  const updateItems = (newItem, newAmount) => {
    setName(newItem);
    setCount(newAmount);
    setName("");
    setCount(0);
  };

  useEffect(() => {
    setListOfItems([{ itemName: name, amount: count }]);
  }, [name, count]);

  return (
    <div className="container">
      <h1 className="travel-list">✈️ Far Away 🌍</h1>
      <p className="form-header">
        Form: What do you need for your trip. # + name + add
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateItems(name, count);
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Amount"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value, 10))}
        />
        <button type="submit">Submit</button>
      </form>
      <p>
        Item, Item, Item... CheckMark it(Cross it off) , X it off. sort by,clear
        all
      </p>
      <p>You have xxx items,, you packed xx%</p>
      <ul>
        {listOfItems.map((item, index) => (
          <li key={index}>{`${item.itemName}: ${item.amount}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

/*

<Logo />
<Form />
<PackingList />
-> <Item />
<Stats>
*/
