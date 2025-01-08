import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { FetchData } from '../RecipeList/action';
import './style.css'

function RecipeDetails() {

  const dispatch = useDispatch();
  

  const { isLoading, isError, data } = useSelector((store) => store.Product);
  

  useEffect(() => {
    dispatch(FetchData)
  }, [])
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product</h1>
      <div className='main-Conteainer'>
        <div className="container">
         
        <div className="card">
            <div className="img-card">
              <img src="" alt="" />
            </div>
            <div className="title">
              <h3>ROshan</h3>
            </div>
            <div className="price">
              <h2>dcc</h2>
            </div>
            <div className="category">
              <h2>dcdncn</h2>
            </div>
            <div className='btn-group'>
              <button style={{ width: "50px", height: "30PX" }}>Edit</button>
              <button style={{ width: "50px", height: "30px" }}>Delete</button>
            </div>
          </div>
        </div>
      </div>


    </div>












  )
}

export default RecipeDetails
