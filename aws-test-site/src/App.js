import React, { useState, useEffect } from "react";
import axios from "axios";

export default App = () => {

  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const response = await axios.get(`https://n1xi8ip60h.execute-api.us-east-2.amazonaws.com/dev`);
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  const listItems = items.map((item) => <li key={item.name}>{item.name}</li>);

  return (
    <>
      <h1>Welcome to React {value} App!</h1>
      <p>Hard to get more minimal than this React app.</p>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <ul>
        {listItems}
      </ul>
    </>
  );
}
