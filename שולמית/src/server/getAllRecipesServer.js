import { useDispatch } from "react-redux"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function getAllRecipes() {
    let res
   return axios.get("http://localhost:8080/api/recipe")
//     .then(x => {
//        res=x;
//     })
//     .catch(err => console.log(err))
//    console.log(res)
//     return res;
}

//לבדוק האם נצרך עדיין
//לא נצרך למחוק!!!!!