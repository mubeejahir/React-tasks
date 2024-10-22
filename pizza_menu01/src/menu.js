import React from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizza_assets/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizza_assets/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizza_assets/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizza_assets/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizza_assets/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizza_assets/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Menu = () => {
  const pizzas = pizzaData
  const pizzanum = pizzas.length;
  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      {pizzanum>0 ? (
        <ul className="pizzas">
        {/* {pizzaData.map((pizza)=>(
          
          // <Pizza name={pizza.name} photoname={pizza.photoName}/>
          // <Pizza pizzaObj={pizza}/>
        ))} */}
        {/* {pizzaData.map((pizza) => (
          < Pizza name={pizza.name} photoname={pizza.photoName} />
        ))} */}
        
          
            {pizzas.map((list) => (
              //<Pizza name={list.name} photoname={list.photoName}/>
              <Pizza pizzaObj={list} key={list.name} />
            ))}
      
      </ul>
      ) : (<p>we're working on it</p>)}

      

      {/* <Pizza 
        name="Pizza spinaci"
        Ingredents="Tomato, mozarella, spinach, and ricotta cheese"
        photoname="pizza_assets/pizzas/spinaci.jpg"
        price={200}
      />
      <Pizza
        name="Pizza focaccia"
        Ingredents="Tomato, mozarella, spinach, and ricotta cheese"
        photoname="pizza_assets/pizzas/focaccia.jpg"
        price={100}
      />
      <Pizza
        name="Pizza funghi"
        Ingredents="Tomato, mozarella, spinach, and ricotta cheese"
        photoname="pizza_assets/pizzas/funghi.jpg"
        price={150}
      />
      <Pizza
        name="Pizza Margherita"
        Ingredents="Tomato, mozarella, spinach, and ricotta cheese"
        photoname="pizza_assets/pizzas/margherita.jpg"
        price={250}
      />
      <Pizza
        name="Pizza Prosciutto"
        Ingredents="Tomato, mozarella, spinach, and ricotta cheese"
        photoname="pizza_assets/pizzas/prosciutto.jpg"
        price={300}
      />
      <Pizza
        name="Pizza salamino"
        Ingredents="Tomato, mozarella, spinach, and ricotta cheese"
        photoname="pizza_assets/pizzas/salamino.jpg"
        price={180}
      /> */}
    </main>
  );
}; 

const Pizza = ({pizzaObj}) => {
  // console.log(props);
  
  // if (props.pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out": ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "soldOut" : pizzaObj.price}</span>
      </div>
    </li>
  );
};

export default Menu;
