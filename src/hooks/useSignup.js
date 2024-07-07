import { useDispatch, useSelector } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "./../redux/Slice/userSlice";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const useSignup = () => {
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.user);

  const signup = async (name, userName, email, password) => {
    dispatch(loginStart());
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_KEY}/signup`,
        { name, userName, email, password }
      );
      if (response && response.data && response.data.token) {
        const token = response.data.token;
        const userData = jwtDecode(token);
        dispatch(loginSuccess(userData));
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "Login failed";
      console.error("Login failed: ", errorMessage);
      dispatch(loginFailure(errorMessage));
    }
  };

  return {
    user,
    isLoading,
    error,
    signup,
  };
};
