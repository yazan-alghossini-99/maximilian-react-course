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
  const [error, setError] = useState(null);

  useDocumentTitle('React Learning Project');

  useEffect(() => {
    fetchUserData()
      .then(setUser)
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="app-container">
      <h1>React Learning Project</h1>
      {error ? <p style={{color: 'red'}}>{error}</p> : <UserCard user={user} />}
      <CounterDisplay count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div style={{ marginTop: '20px' }}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type something..." />
        <p>You typed: {inputValue}</p>
      </div>
    </div>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import ExpensiveList from './components/ExpensiveList';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [items, setItems] = useState(['banana', 'apple', 'cherry']);

  return (
    <div className={pp theme-}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
      <ExpensiveList items={items} />
    </div>
  );
}

export default App;
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <header>
          <h1>React Learning Project</h1>
          <ThemeToggle />
        </header>
        <main>
          <Home />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="app">
          <header>
            <h1>React Learning Project</h1>
            <ThemeToggle />
          </header>
          <main>
            <Home />
          </main>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
import { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';

const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="app">
          <header>
            <h1>React Learning Project</h1>
            <ThemeToggle />
          </header>
          <main>
            <Suspense fallback={<div>Loading Dashboard...</div>}>
              <Home />
              <Dashboard />
            </Suspense>
          </main>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
