import axios from 'axios'
export const useUpVote = () => {
  const upvote = async(recipeId,userId) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_KEY}/recipe/upvote`,{recipeId,userId});
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data.error);
    }
  }
  return {upvote}
}