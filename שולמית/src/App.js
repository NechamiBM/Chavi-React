import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect } from 'react';
import HomePage from './components/homePage'
import Header from './components/header'
import Sighin from './components/user/sighin'
import DisplayRecipes from './components/recipes/displayRecipes'
import AddRecipes from "./components/recipes/addRepice"
import Login from './components/user/login'
import Caterories from './components/caterory/caterories';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from './store/action'
import { setRecipes } from './store/action'
import MyRecipes from './components/recipes/myRecipes';
import RecipeDetailes from './components/recipes/recipeDetailes';



function App() {

  const user = useSelector(state => state.user)
  const navig = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCategories())
    dispatch(setRecipes())
  }, [])
  useEffect(() => {
    if (!user) {
      navig('/');
    }
    else {
      navig("/homePage")
    }
  }, [user])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sighin" element={<Sighin />} />
        <Route path="/recipes" element={<DisplayRecipes />} />
        <Route path="/addRecipe" element={<AddRecipes />} />
        <Route path="/categories" element={<Caterories />} />
        <Route path="/myRecipes" element={<MyRecipes />} />
        <Route path="/recipeDetailes" element={<RecipeDetailes />} />
      </Routes>
    </div>
  )
}

export default App;
