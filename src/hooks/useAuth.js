import { useSelector, useDispatch } from "react-redux";
import { login, logout, register, setAuthUser } from "../features/auth/authSlice";

export function useAuth() {
  const dispatch = useDispatch();
  const { user, isAuthenticated, status, error } = useSelector((state) => state.auth);

  const loginUser = (credentials) => dispatch(login(credentials));
  const registerUser = (form) => dispatch(register(form));
  const logoutUser = () => dispatch(logout());
  const setUser = (user) => dispatch(setAuthUser(user));

  return {
    user,
    isAuthenticated,
    status,
    error,
    loginUser,
    registerUser,
    logoutUser,
    setUser,
  };
}