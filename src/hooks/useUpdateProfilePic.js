import axios from 'axios';
import toast from 'react-hot-toast';

export const useUpdateProfilePic = () => {
  const updateProfilePic = async (userName, file) => {
    try {
      const formData = new FormData();
      formData.append('userName', userName);
      formData.append('profilePic', file);

      const response = await axios.post(`${import.meta.env.VITE_API_KEY}/user/profileUpload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      toast.success('Profile picture changed successfully')
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      toast.error('Unable to update change picture:' );
    }
  };

  return { updateProfilePic };
};
