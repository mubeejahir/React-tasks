import React, { useState } from "react";

const Form = ({onAddItems}) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  


  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(event);
    if(!description)return;

    const newItem={description, quantity, packed:false, id:Date.now()}
    //console.log(newItem)
    
    onAddItems(newItem); // get the state from the form input

    setDescription('');//set to initial state
    setQuantity(1);

  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want for the trip?</h3>
      <select value={quantity} onChange={(e)=> {
        //console.log(e.target.value);
        setQuantity(Number(e.target.value))}}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => {
          //console.log(e.target.value)
          setDescription(e.target.value)
        }
        }
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
