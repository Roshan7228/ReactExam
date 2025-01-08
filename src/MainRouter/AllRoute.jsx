import React from 'react'
import {Route, Routes} from 'react-router-dom'
import RecipeDetails from '../Component/RecipeDetails'
import AddRecipt from '../Component/AddRecipt'
import RecipeForm from '../Component/RecipeForm'
function AllRoute() {
  return (
    <div>
          <Routes>
              <Route path='/RecipeDetails' element={<RecipeDetails/>}></Route>
              <Route path='/AddRecipt' element={<AddRecipt/>}></Route>
              <Route path='/RecipeForm' element={<RecipeForm/>}></Route>
          </Routes>
    </div>
  )
}

export default AllRoute
