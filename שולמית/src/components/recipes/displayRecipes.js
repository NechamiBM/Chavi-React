import { useEffect, useState } from "react";
import axios from 'axios'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const DisplayRecipes = () => {
  const navig = useNavigate()
  const categories = useSelector(state => state.categories)
  const recipes = useSelector(state => state.recipes)

  const [filteredRecipes, setFilteredRecipes] = useState([])
  const [category, setCategory] = useState()
  const [level, setLevel] = useState()
  const [time, setTime] = useState()


  useEffect(() => {
    setFilteredRecipes(recipes.filter(r => (!category || r.CategoryId == category) && (!time || r.Duration <= time) && (!level || r.Difficulty <= level)))
  }, [category, time, level])
  return <div>

    <select name="selectCategory" defaultValue="selectCategory" onChange={(e) => setCategory(e.target.value)}>
      <option value="" >בחר קטגוריה</option>
      {categories?.map((category1) => (
        <option key={category1.Id} value={category1.Id}>
          {category1.Name}
        </option>
      ))}
    </select>
    <input type="number" placeholder="הכנס זמן הכנה" onChange={(e) => setTime(e.target.value)} />
    <select name="selectLevel" defaultValue="selectLevel" onChange={(e) => setLevel(e.target.value)}>
      <option value="" >בחר רמה</option>
      <option value="1">קל</option>
      <option value="2">בינוני</option>
      <option value="3">קשה</option>
    </select>


    {filteredRecipes?.map((recipe) => (
      <p key={recipe.Id}>
        {recipe?.Name}
        <br />
        <img src={recipe?.Img}></img>
        <button onClick={x => navig("/recipeDetailes", { state: { recipe } })}>detailes</button>
      </p>
    ))}
  </div>

}
export default DisplayRecipes