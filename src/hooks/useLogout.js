import { useDispatch } from "react-redux";
import {logout} from './../redux/Slice/userSlice'
import toast from "react-hot-toast";

export const useLogout = () => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
    localStorage.removeItem('user');
    toast.success('User logged out')
  }
  return {logout:logoutUser};
}