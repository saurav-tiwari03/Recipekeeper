import { useState } from "react"
import {FaEdit} from 'react-icons/fa'
import { CgCloseR } from "react-icons/cg";
import { useSelector } from "react-redux";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";
import toast from 'react-hot-toast'
import { PiSpinnerGapLight } from "react-icons/pi";


export default function Modal() {
  const {user} = useSelector((state) => state.user)
  const [showModal,setShowModal] = useState(false);
  const [name,setName] = useState(user.name)
  const [userName,setUserName] = useState(user.userName)
  const [bio,setBio] = useState(user.bio)
  const {updateProfile,loading} = useUpdateProfile()
  const toggleModal = () => {
    setShowModal(!showModal);
  }
  const submitHandler = async(e) => {
    e.preventDefault();
    console.log({name,userName,bio})
    try {
      await updateProfile(name, userName, bio)
      toast.success('Profile updated successfully')
      toggleModal();
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
      <div className="edit-container">
        <button className="text-xl edit-icon " onClick={toggleModal}> <FaEdit /></button>
        <p className="edit-profile absolute bg-white p-1 rounded-lg">Edit Profile</p>
      </div>
      {
        showModal && <div className="fixed top-0 left-0 flex flex-col items-center justify-center h-screen w-screen ">
          <div className="bg-[#946043] p-12 rounded-md relative w-[400px]">
            <h3 className="text-2xl text-white mb-8 font-Anton uppercase">Update Profile</h3>
            <button className='text-white text-xl text-end w-full flex justify-end absolute top-2 right-2' onClick={toggleModal} ><CgCloseR/></button>
            <form className="flex flex-col gap-4" onSubmit={submitHandler} >
              <input  className="py-3 border-2 border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              <input className="py-3 border-2 border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500" type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
              <textarea className="py-3 border-2 border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500" type="text" value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
              <button className="bg-[#eddd9f] rounded-xl h-[50px] w-[100px] font-semibold  flex items-center justify-center"
              >{loading ? < PiSpinnerGapLight className='animate-spin'/>  : 'Update Profile'}</button>
            </form>
          </div>
        </div>
      }
    </div>
  )
}
