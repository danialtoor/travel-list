import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, count);
    // Clear the input fields after submitting
    setName("");
    setCount(0);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value, 10))}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const [items, setItems] = useState([]);

  const updateItems = (newItem, newAmount) => {
    setItems([...items, { itemName: newItem, amount: newAmount }]);
  };

  return (
    <div className="container">
      <h1 className="travel-list">✈️ Far Away 🌍</h1>
      <p className="form-header">
        Form: What do you need for your trip. # + name + add
      </p>
      <Form onSubmit={updateItems} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{`${item.itemName}: ${item.amount}`}</li>
        ))}
      </ul>
      <p>
        Item, Item, Item... CheckMark it(Cross it off), X it off. sort by, clear
        all
      </p>
      <p>You have {items.length} items, you packed xx%</p>
    </div>
  );
}

export default App;
