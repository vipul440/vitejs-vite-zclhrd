import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const add = () => {
    if (input.trim() !== '') {
      setItems((prevItems) => {
        return [...prevItems, { text: input, completed: false }];
      });
      setInput('');
    }
  }

  const handleToggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Add item"
        />
        <button onClick={add}>Add</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <span className={item.completed ? 'completed ' : ''}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
