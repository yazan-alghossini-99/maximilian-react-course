import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Learning Project</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
import { useState } from 'react';
import './App.css';
import CounterDisplay from './components/CounterDisplay';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1>React Learning Project</h1>
      <CounterDisplay count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
import { useState } from 'react';
import './App.css';
import CounterDisplay from './components/CounterDisplay';

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="app-container">
      <h1>React Learning Project</h1>
      <CounterDisplay count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div style={{ marginTop: '20px' }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Type something..."
        />
        <p>You typed: {inputValue}</p>
      </div>
    </div>
  );
}

export default App;
import { useState, useEffect } from 'react';
import './App.css';
import CounterDisplay from './components/CounterDisplay';
import UserCard from './components/UserCard';
import useDocumentTitle from './hooks/useDocumentTitle';
import { fetchUserData } from './services/api';

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [user, setUser] = useState(null);

  useDocumentTitle('React Learning Project');

  useEffect(() => {
    fetchUserData().then(setUser);
  }, []);

  return (
    <div className="app-container">
      <h1>React Learning Project</h1>
      <UserCard user={user} />
      <CounterDisplay count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div style={{ marginTop: '20px' }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Type something..."
        />
        <p>You typed: {inputValue}</p>
      </div>
    </div>
  );
}

export default App;
