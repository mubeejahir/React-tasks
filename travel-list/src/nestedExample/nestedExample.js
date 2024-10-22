import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NestedExample = () => {
  return (
   <div>
    <h3>to demonstrate nested routing</h3>
    <ul>
    <Link to='profile'>
    <li>
        <div>profile</div>
    </li>
    </Link>
    <Link to='login'>
    <li>
        <div>Login</div>
    </li>
    </Link>
    <Link to='/nested-example'>
    <li>
        <div>nested Home</div>
    </li>
    </Link>
    </ul>
    <Outlet/>
   </div>
  )
}

export default NestedExample