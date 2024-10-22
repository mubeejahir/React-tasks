import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <div >
        <nav style={{display: 'flex' , justifyContent:'space-evenly'}}>
            
            {/* <li ><a href="#">Logo</a></li>
            <li><a href="#">list</a></li>
            <li><a href="#">form</a></li>
            <li><a href="#">stats</a></li> */}
            
             <Link to='/logo'>
                <div>
                    <span>Logo</span>
                </div>
            </Link> 
            <Link to='/list?id=3456&username=mubee'>
                <div>
                    <span>List</span>
                </div>
            </Link> 
            <Link to='/form'>
                <div>
                    <span>form</span>
                </div>
            </Link> 
            <Link to='/stats'>
                <div>
                    <span>stats</span>
                </div>
            </Link> 
            <Link to='/product'>
                <div>
                    <span>product</span>
                </div>
            </Link> 
        </nav>
   
    </div>
  )
}

export default Nav;
