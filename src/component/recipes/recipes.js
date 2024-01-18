import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
// import { Input,Button } from "@mui/material";
import axios from "axios"
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actionType from '../store/action';
import SingleRecipe from './singleRecipe';

export default function GetRecipes() {
    const [recipes, setRecipes] = useState([])
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/recipe`)
            .then(res => {
                setRecipes(res.data);
                dispatch({ type: actionType.SET_RECIPE, payload: res.data })
            }
            ).catch(err => console.log(err));
    }, [])

    return <>
    <h1>מתכונים:</h1>
        {recipes.map((r, i) =><SingleRecipe i={i}/>)}
    </>
}
///////////////////
// {
//     Id: 1,
//     Name: "עוגה כושית",
//     UserId: 1,
//     CategoryId: 2,
//     Img: "https://img.mako.co.il/2023/03/27/oga_pereg_choclet_autoOrient_i.jpg",
//     Duration: "50",
//     Difficulty: 1,
//     Description: "עוגה קלה להכנה",
//     Ingrident: [
//         { Name: "בייצים", Count: 5, Type: "-" },
//         { Name: "סוכר", Count: 1.5, Type: "כוסות" },
//         { Name: "קמח", Count: 5, Type: "כפות" }
//     ],
//     Instructions: ["לערבב את כל החומרים יחד", "לאפות על חום בינוני", "לחתוך מיד אחרי האפיה"]
// },