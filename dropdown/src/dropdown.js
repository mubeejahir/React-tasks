// import React from 'react'

// const initialSchema = [
//     {label:"first Name", name: "first_name"},
//     {label:"last Name", name: "last_name"},
//     {label:"age", name: "age"},
//     {label:"gender", name: "gender"},
// ]
// const Dropdown = () => {
//   return (
//     <div>dropdown
//         <select>
//             <option>1</option>
//             <option>2</option>
//             <option>3</option>
//         </select>
//     </div>
//   )
// }

// export default Dropdown
import React, { useState } from 'react';

const DropdownComponent = () => {
  // State to track selected options
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Array of all options
  const allOptions = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
    // Add more options as needed
  ];

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  // Function to filter unselected options
  const filterUnselectedOptions = () => {
    return allOptions.filter((option) => !selectedOptions.includes(option));
  };

  return (
    <div>
      <h2>Dropdown Component</h2>
      <select onChange={(e) => handleOptionSelect(JSON.parse(e.target.value))}>
        {filterUnselectedOptions().map((option) => (
          <option key={option.id} value={JSON.stringify(option)}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;
