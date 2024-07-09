/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar";
import LeftPart from "./../components/Profile/LeftPart";
import RightPart from "../components/Profile/RightPart";
import { useParams } from "react-router-dom"
import {useGetUserByParams} from './../hooks/useGetUserByParams'
import UserNotFound from "../components/Profile/UserNotFound";
import { useEffect, useState } from "react";
import ScreenLoading from './../components/ScreenLoading'

export default function Profile() {
  const {userName} = useParams()
  const {getUserByParams,userFound} = useGetUserByParams()
  const [loading,setLoading] = useState(true)

  const userDataHandler = async () => {
    try {
      const fetchedUser = await getUserByParams(userName);
      setLoading(!loading)
    } catch (error) {
      console.error(error);
      setLoading(!loading)
    }
  }
  useEffect(() => {
    userDataHandler()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  // console.log(userFound)
  return (
    <div>
      <Navbar/>
      {loading ? 
      (<div><ScreenLoading /></div>) : (
        <div>
        {
          userFound ?
          (<div className="flex gap-12 mt-12">
            <LeftPart />
            <RightPart />
          </div>) :
          (<UserNotFound />) 
        }
      </div>
      )}
      
      
    </div>
  )
}
