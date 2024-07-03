import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure, logout } from './../redux/Slice/userSlice';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

export const useLogin = () => {
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.user);

  const login = async (email, password) => {
    dispatch(loginStart());
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_KEY}/login`, { email, password });
      if (response && response.data && response.data.token) {
        const token = response.data.token;
        const userData = jwtDecode(token);
        dispatch(loginSuccess(userData));
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || "Login failed";
      console.error("Login failed: ", errorMessage);
      dispatch(loginFailure(errorMessage));
    }
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    user,
    isLoading,
    error,
    login,
    logout: logoutUser,
  };
};
