import { useSelector } from 'react-redux';

const useAuth = () => {
  const { user, token } = useSelector((state) => state.auth);
  const isAuthenticated = !!token;
  
  return { user, token, isAuthenticated };
};

export default useAuth;
