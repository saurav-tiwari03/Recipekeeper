import axios from "axios";
import { useState } from "react";

export const useGetUserByParams = () => {
  const [userData, setUserData] = useState({});
  const [userFound,setUserFound] = useState();
  const getUserByParams = async (userName) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_KEY}/user/${userName}`
      );
      // console.log(response.data.user);
      setUserData(response);
      setUserFound(true)
      return response.data.user;
    } catch (error) {
      console.log(error);
      setUserFound(false)
    }
  };
  return { getUserByParams, userData,userFound };
};
