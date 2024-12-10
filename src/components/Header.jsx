import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

   
  return (
    <div id='navbar' className="py-2 text-xl flex justify-evenly bg-slate-600 text-slate-200 sticky top-0">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/register"}>Register</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
    </div>
  );
}

export default Header