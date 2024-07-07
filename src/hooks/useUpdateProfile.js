import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../redux/Slice/userSlice"; 
import { useState } from "react";

export const useUpdateProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user); 
  const [loading,setLoading] = useState(false)

  const updateProfileData = async (name, userName, bio) => {
    setLoading(!loading)
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_KEY}/user/updateProfile/${user.id}`, { name, userName, bio });
      console.log(response);
      dispatch(updateUserProfile({ name, userName, bio }));
      setLoading(!loading)
    } catch (error) {
      console.error(error);
      setLoading(!loading)
    }
  };

  return { updateProfile: updateProfileData,loading };
};
