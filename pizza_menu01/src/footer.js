import React from "react";


const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

    if(!isOpen)
    return <p>Closed</p>

  return (
    <div className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open from {openHour}:00 untill {closeHour}:00.Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      ) : (<p>We're closed!Come back next time </p>)}
    </div>
  );
};

export default Footer;
