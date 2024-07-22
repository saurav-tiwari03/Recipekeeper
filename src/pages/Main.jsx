import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useState, useRef, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import toast from "react-hot-toast";
import recipe from './../assets/Recipe book-rafiki.svg'
import basket from './../assets/fruitbasket.svg'

export default function Main() {
  const user = useSelector((state) => state.user);
  console.log(user.name);
  const [tags, setTags] = useState([]);
  const tagsInputRef = useRef(null);

  const tagRemoveHandler = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);
  };

  const addTagHandler = () => {
    const newTag = tagsInputRef.current.value;
    if(tags.length > 2) {
      toast.error('Only 3 tags are allowed')
      return;
    }
    if(newTag === "") {
      toast.error('Tag field is empty')
      return;
    }
    const existingTag = tags.find((tag) => tag.toLowerCase() === newTag.toLowerCase());
    if(existingTag){
      toast.error('Tag already exists')
      return;
    }
    if (newTag) {
      const length = newTag.length
      if(length > 6){
        toast.error('Tag size should not exceed 6 characters')
        return;
      }
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
  <div className="">
    <Navbar />
    <div className="flex justify-center">
      <h1 className="font-Anton text-4xl text-[#744225]">Add Recipe</h1>
    </div>
    <div className="flex items-end justify-center">
      <div className="flex items-end relative">
        <img src={recipe} alt="Recipe Book" className="h-[500px] w-[500px] mx-auto drop-shadow-md relative -bottom-10 " />
      </div>
      <div className="flex border-2 border-[#ffc100] p-3 bg-[#ffe080] rounded">
        <form className="flex items-start justify-center flex-col border-2 border-[#ffc100] p-4 gap-4 bg-[#fff] rounded" onSubmit={submitHandler}>
          <div className="flex items-center relative">
            <input id="titleInput" className="input-title border-2 border-[#d1c79f] h-[50px] w-[335px] pl-2 outline-none rounded placeholder:text-[#744225]" type="text" placeholder="" onKeyPress={preventEnter} />
            <label htmlFor="titleInput" className="label-line text-[#d1c79f]">Title</label>
          </div>
          <div className="flex items-center relative">
            <input id="descriptionInput" className="input-title border-2 border-[#d1c79f] h-[50px] w-[335px] pl-2 outline-none rounded placeholder:text-[#744225]" type="text" placeholder="" onKeyPress={preventEnter} />
            <label htmlFor="descriptionInput" className="label-line text-[#d1c79f]">Description</label>
          </div>
          <div>
            <div className="flex items-center relative gap-4">
              <input ref={tagsInputRef} id="tagsInput" className="input-title border-2 border-[#d1c79f] h-[50px] w-[250px] pl-2 outline-none rounded placeholder:text-[#744225]" type="text" placeholder="" />
              <label htmlFor="tagsInput" className="label-line text-[#d1c79f]">Tags</label>
              <button className="border-[2px] border-[#ffc100] text-[#744225] font-mulish hover:bg-[#ffc100] hover:text-white duration-300  py-2 px-4 rounded" type="button" onClick={addTagHandler}>Enter</button>
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
          <div>
            <Ingredients />
          </div>
          {/* <div className="flex items-center relative">
            <input id="nameInput" className="input-title border-2 border-[#d1c79f] h-[50px] w-[250px] pl-2 outline-none rounded placeholder:text-[#744225]" type="text" placeholder="" onKeyPress={preventEnter} />
            <label htmlFor="nameInput" className="label-line text-[#d1c79f]">Enter your name</label>
          </div> */}
          <input type="file" />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>

    </div>
  </div>
  );
}
function Ingredients() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [ingredients, setIngredients] = useState([{}]);
  const itemInputRef = useRef(null);
  const amountInputRef = useRef(null);

  const ingredient = {
    item:null,amount:null
  }
  console.log(ingredient)
  useEffect(() => {
    if (open) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const addIngredientHandler = () => {
    const item = itemInputRef.current.value;
    const amount = amountInputRef.current.value;
    if (item && amount) {
      setIngredients([...ingredients, { item, amount }]);
      itemInputRef.current.value = '';
      amountInputRef.current.value = '';
    }
  };

  return (
    <div className="">
      {showModal && (
        <div
          className={`fixed top-0 left-0 flex flex-col items-center justify-center h-screen w-screen bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`bg-[#fff] relative p-4 rounded-md w-[400px] transition-transform duration-300 ${open ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 '} h-[50vh] w-[80vw] md:w-[70vw]`}>
            <button
              onClick={() => setOpen(!open)}
              className="absolute top-1 right-1 text-6xl">
              <IoIosClose />
            </button>

            <div className="">
              <div className="flex items-center justify-center ">
                <div className="flex items-center relative">
                  <input
                    id="titleInput"
                    className="input-title border-2 border-[#d1c79f] h-[50px] w-[335px] pl-2 outline-none rounded placeholder:text-[#744225]"
                    type="text"
                    placeholder=""
                    ref={itemInputRef}
                  />
                  <label htmlFor="titleInput" className="label-line text-[#d1c79f]">
                    Ingredient
                  </label>
                </div>
                <div className="flex items-center relative">
                  <input
                    id="itemInput"
                    className="input-title border-2 border-[#d1c79f] h-[50px] w-[100px] pl-2 outline-none rounded placeholder:text-[#744225]"
                    type="text"
                    placeholder=""
                    ref={amountInputRef}
                  />
                  <label htmlFor="amountInput" className="label-line text-[#d1c79f]">
                    Amount
                  </label>
                </div>
                {/*Ingredients set */}
                <div>
                  <button className="" onClick={addIngredientHandler}>Add</button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="text-[#744225] text-lg flex gap-2">
                    {
                      ingredient.item && ingredient.amount && (
                        <div className="flex gap-4 itemc justify-center" key={index}>
                          <p>{ingredient.item}</p>
                          <p>{ingredient.amount}</p>
                          <button><IoIosClose /></button>
                        </div>
                      )
                    }
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0">
              <img className="h-[100px] drop-shadow-lg" src={basket} alt="" />
            </div>
            <div className="absolute bottom-0 right-0">
              <button className="bg-[#744225] py-2 px-4 rounded m-2 text-white">Submit</button>
            </div>
          </div>
        </div>
      )}
      {!open && (
        <button onClick={() => setOpen(!open)} className="mt-4">
          Add ingredients
        </button>
      )}
    </div>
  );
}


