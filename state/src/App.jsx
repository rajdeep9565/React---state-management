import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count,setCount] = useState(0)
  const Change_Count = (value) => {
    setCount(count + value)
  }





  return (
    <div className="App">
      <h1>Counter {count}</h1>
      <button onClick={() => Change_Count(1)}>Add</button>
      <button onClick={() => Change_Count(-1)}>Subtract</button>
      <button onClick={() => Change_Count(count*1)}>Multiply * 2</button>
      <h5>Assignment Done</h5>
      {count % 2 == 0 ? "Even" : "Odd"}
    </div>
  );
}

export default App;
