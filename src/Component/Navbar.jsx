import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

function Navbar() {
  return (
    <div>
       
       <div className='header'>
        <div className='header-contain'>
        <NavLink to="/RecipeDetails">RecipeDetails</NavLink>
       <NavLink to="/AddRecipt">AddRecipt</NavLink>
       <NavLink to="/RecipeForm">RecipeForm</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar
