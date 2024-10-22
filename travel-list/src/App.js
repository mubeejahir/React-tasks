import React, { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import List from "./list";
import Stats from "./stats";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NestedExample from "./nestedExample/nestedExample";
import Profile from "./nestedExample/profile";
import Login from "./nestedExample/login";
import Nav from "./nav";
import Product from "./product";
import ProductList from "./productList";


const App = () => {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "are you sure you want to delete all items"
    );

    if (confirmed) setItems([]);
  };


  return (
    <div>
      
      {/* <CountdownTimer/> */}
     {/* <BrowserRouter>
    
      <Nav/>
        <Routes>
          <Route path='logo' element={<Logo />}></Route> 
          <Route
            path="form"
            element={<Form onAddItems={handleAddItems} />}
          ></Route>

          <Route
            path="list"
            element={
              <List
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handleClearList}
              />
            }
          ></Route>
          <Route path="stats" element={<Stats items={items} />}></Route>
           <Route path='/nested-example' element={<NestedExample/>}>
            <Route path='profile' element={<Profile/>}/>
            <Route path='login' element={<Login/>}/>
          </Route>
          <Route path='*' element={<Stats items={items} />}></Route> 
          <Route path='product' element={<Product/>}/>
          <Route path='product/:id' element={<Logo/>}/>

         </Routes>
      </BrowserRouter>  */}
      
      <Logo />
      <Form onAddItems={handleAddItems} />
      <List
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handleClearList}
              />
      <Stats items={items} />

    </div>
  );
};

export default App;
