import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom"
// import Login from './user/login'
// import Sighin from './user/sighin'
// import DisplayRecipes from './recipes/displayRecipes'
// import AddRecipes from "./recipes/addRepice"

const HomePage = () => {
    const user=useSelector(state=>state.user)
    // const categories=useSelector(state=>state.categories)
    // console.log(categories)
    // const resipes=useSelector(state=>state.recipes)
    // console.log(resipes)
    return <>
    <p>ברוך הבא</p>
    <p>{user?.Name}</p>
    </>
 
}
export default HomePage
