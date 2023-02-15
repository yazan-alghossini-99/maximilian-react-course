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
