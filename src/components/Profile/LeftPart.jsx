import { useParams } from 'react-router-dom';
import profileImg from './../../assets/noProfileImg.png'
import { FaEdit } from "react-icons/fa";
import { useGetUserByParams } from './../../hooks/useGetUserByParams';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { CgCloseR } from "react-icons/cg";
import {useUpdateProfilePic} from './../../hooks/useUpdateProfilePic'
import { useSelector } from 'react-redux';


export default function LeftPart() {
  const {user} = useSelector((state) => state.user )
  const { userName } = useParams();
  const { getUserByParams } = useGetUserByParams();
  const [userSearch, setUserSearch] = useState(''); 
  
  const checkUser = user.userName == userSearch.userName

  const imageUrl = userSearch || false

  const userDataHandler = async () => {

    try {
      const fetchedUser = await getUserByParams(userName);
      if (fetchedUser) {
        setUserSearch(fetchedUser);
      } else {
        toast.error('User not found');
      }
    } catch (error) {
      toast.error('Error fetching user data');
      console.error(error);
    }
  }

  useEffect(() => {
    userDataHandler();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <div className='flex relative flex-col'>
        <div className='bg-[#d4caa5] blur-md h-[340px] w-[360px] -z-1'></div>
        <div className=''>
          {
            imageUrl !== undefined ?
            (
              <div className='flex flex-col'>
                <img className='absolute left-0 top-0 rounded-full h-[325px] w-[325px]'src={userSearch.imageUrl}/>
                {checkUser && <PicUpdateModal/>}
              </div>) :
            (
              <div className='flex flex-col'>
                <img className='absolute left-0 top-0 rounded-full h-[325px] w-[325px]' src={profileImg} />
                {checkUser && <PicUpdateModal/>}
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}


const PicUpdateModal = () => {
  const [picUpdateStatus, setPicUpdateStatus] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const { updateProfilePic } = useUpdateProfilePic();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (selectedFile) {
      const previewUrl = URL.createObjectURL(selectedFile);
      setFilePreview(previewUrl);

      return () => {
        URL.revokeObjectURL(previewUrl);
      };
    }
  }, [selectedFile]);

  const fileChangeHandler = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    } else {
      toast.error("No files found in the input event");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (selectedFile) {
      updateProfilePic(user.userName, selectedFile);
    } else {
      toast.error("No file selected");
    }
  };

  return (
    <div>
      <div className='flex flex-col'>
        <button
          className='text-3xl text-center flex justify-center text-[#54301a]'
          onClick={() => setPicUpdateStatus(!picUpdateStatus)}
        >
          <FaEdit />
        </button>
      </div>
      {picUpdateStatus && (
        <div className='fixed top-0 left-0 flex flex-col justify-center h-screen w-screen'>
          <div className='bg-[#946043] p-12 rounded-md relative w-[350px] h-[400px] ml-4'>
            <h3 className='text-2xl text-white mb-8 font-Anton uppercase'>Change Profile Picture</h3>
            <button
              className='text-white text-xl text-end w-full flex justify-end absolute top-2 right-2'
              onClick={() => setPicUpdateStatus(!picUpdateStatus)}>
              <CgCloseR />
            </button>
            <form onSubmit={submitHandler}>
              <input type="file" onChange={fileChangeHandler} />
              <button
                type="submit"
                className='mt-4 bg-white text-[#946043] px-4 py-2 rounded-md font-semibold'
              >
                Upload
              </button>
            </form>
            <div className='flex items-center justify-center mt-4'>
              {filePreview && <img className=' w-[100px] h-[100px]' src={filePreview}  alt='Preview' />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

