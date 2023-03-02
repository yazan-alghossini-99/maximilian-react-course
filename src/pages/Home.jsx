function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

export default Home;
import ComplexCounter from '../components/ComplexCounter';

function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <ComplexCounter />
    </div>
  );
}

export default Home;
import ComplexCounter from '../components/ComplexCounter';
import LoginForm from '../components/LoginForm';

function Home() {
  const handleLogin = (data) => {
    console.log('Login submitted:', data);
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <ComplexCounter />
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}

export default Home;
import { useState } from 'react';
import ComplexCounter from '../components/ComplexCounter';
import LoginForm from '../components/LoginForm';
import HeavyComponent from '../components/HeavyComponent';

function Home() {
  const [count, setCount] = useState(0);
  const handleLogin = (data) => console.log('Login:', data);

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <button onClick={() => setCount(c => c + 1)}>Update Parent State ({count})</button>
      <ComplexCounter />
      <LoginForm onSubmit={handleLogin} />
      <HeavyComponent value={10} />
    </div>
  );
}

export default Home;
import UserListQuery from '../components/UserListQuery';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <UserListQuery />
    </div>
  );
}

export default Home;
