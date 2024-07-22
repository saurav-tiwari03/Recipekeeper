import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useState, useRef } from "react";
import { IoIosClose } from "react-icons/io";
import toast from "react-hot-toast";

export default function Main() {
  const user = useSelector((state) => state.user);
  console.log(user);
  const [tags, setTags] = useState([]);
  const tagsInputRef = useRef(null);

  const tagRemoveHandler = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);
  };

  const addTagHandler = () => {
    if(tags.length > 2) {
      toast.error('Only 3 tags are allowed')
      return;
    }
    const newTag = tagsInputRef.current.value;
    if (newTag) {
      try {
        setTags([...tags, newTag]);
        tagsInputRef.current.value = '';
      } catch (error) {
        console.log(error);
      }
    }
  };

  const preventEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const submitHandler = (e) => {
    try {
      e.preventDefault(); 
      console.log('Form submitted');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-start justify-center">
        <form className="flex items-start justify-center flex-col border-2 border-black p-4 gap-4" onSubmit={submitHandler}>
          <div className="flex items-center relative">
            <input id="titleInput" className="input-title border-2 border-[#d1c79f] h-[50px] w-[250px] pl-2 outline-none rounded placeholder:text-[#744225]" type="text" placeholder="" onKeyPress={preventEnter} />
            <label htmlFor="titleInput" className="label-line text-[#d1c79f]">Title</label>
          </div>
          <div className="flex items-center relative">
            <input id="descriptionInput" className="input-title border-2 border-[#d1c79f] h-[50px] w-[250px] pl-2 outline-none rounded placeholder:text-[#744225]" type="text" placeholder="" onKeyPress={preventEnter} />
            <label htmlFor="descriptionInput" className="label-line text-[#d1c79f]">Description</label>
          </div>
          <div>
            <div className="flex items-center relative">
              <input ref={tagsInputRef} id="tagsInput" className="input-title border-2 border-[#d1c79f] h-[50px] w-[250px] pl-2 outline-none rounded placeholder:text-[#744225]" type="text" placeholder="" onKeyPress={preventEnter} />
              <label htmlFor="tagsInput" className="label-line text-[#d1c79f]">Tags</label>
              <button type="button" onClick={addTagHandler}>Enter</button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <div key={index} className="flex items-center p-2 bg-[#744225] rounded-md text-[#d1c79f] font-Poppins">
                {tag}
                <button onClick={() => tagRemoveHandler(tag)} className="ml-2 text-[#d1c79f]">
                  <IoIosClose />
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center relative">
            <input id="nameInput" className="input-title border-2 border-[#d1c79f] h-[50px] w-[250px] pl-2 outline-none rounded placeholder:text-[#744225]" type="text" placeholder="" onKeyPress={preventEnter} />
            <label htmlFor="nameInput" className="label-line text-[#d1c79f]">Enter your name</label>
          </div>
          <input type="file" />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
