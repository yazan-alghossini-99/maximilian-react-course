import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [user] = useLocalStorage('user', null);
    const navigate = useNavigate();

    useEffect(() => {
      if (!user) {
        navigate('/login');
      }
    }, [user, navigate]);

    if (!user) return <div>Redirecting to login...</div>;
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
