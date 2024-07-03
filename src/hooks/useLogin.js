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
      const response = await axios.post('http://localhost:4000/api/v1/login', { email, password });
      const token = response.data.token;
      const userData = jwtDecode(token);
      dispatch(loginSuccess(userData));
    } catch (err) {
      console.error("Login failed: ", err.response.data.message);
      dispatch(loginFailure( err.response.data.message));
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
