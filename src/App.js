import React from 'react';
import { Cart } from './cart.jsx'
import './App.css';

function App() {

  // const [count, setCount] = React.useState(0)
  // const increment = () => setCount(count + 1)

  const items = [
    { id: 1, name: 'bread', price: 2.25, qty: 2 },
    { id: 2, name: 'jam', price: 3.22, qty: 5 },
    { id: 3, name: 'egg', price: 5.55, qty: 10 }
  ]

  return (
    <div className="">
      {/* <p> {count} </p>
        <button onClick={increment}>click me</button> */}
      <Cart initialItems={items} />
    </div>
  );
}

export default App;
