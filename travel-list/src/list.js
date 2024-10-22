import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

// const InitialItems = [
//   { id: 1, description: "passport", quantity: 10, packed: false },
//   { id: 2, description: "charger", quantity: 1, packed: true },
//   { id: 3, description: "clothes", quantity: 12, packed: false },
//   { id: 4, description: "socks", quantity: 5, packed: true },
// ];

const List = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

      // let params = useParams();
      // console.log(params)

      // let [searchParams] = useSearchParams();
      // console.log("search", searchParams.get('id'),searchParams.get('id'));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      {/* {params.id} */}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
      </div>

      <button onClick={onClearList}>Clear List</button>
    </div>
  );
};

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
};

export default List;
