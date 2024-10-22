import React from "react";
import { Link, useParams } from "react-router-dom";

const Logo = () => {
  const {id} = useParams();
  return (
    <div>
      
      <h1 className="logo">Far away {id} </h1>
        {/* <Link to="/form">
          <div>
            <span>Home</span>
          </div>
        </Link>
        <Link to="/list">
          <div>
            <span>List</span>
          </div>
        </Link>
        <Link to="/nested-Example">
          <div>
            <span>Nested Route</span>
          </div>
        </Link> */}
    </div>
  );
};

export default Logo;
