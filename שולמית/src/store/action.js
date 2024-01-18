import axios from "axios";
import { useDispatch } from "react-redux";


export const RELOAD = "RELOAD";
export const SET_USER = "SET_USER";
export const SET_CATEGORIES = "SET_CATEGORIES"
export const SET_RECIPE = "SET_RECIPE";
export const ADD_RECIPE="ADD_RECIPE"
export const EDIT_RECIPE="EDIT_RECIPE"


export const setCategories = () => {
    return dispatch => {
        axios.get("http://localhost:8080/api/category").then((x) => {
            dispatch({ type: 'SET_CATEGORIES', payload: x.data })
        })
            .catch(err => console.log(err))
    }
}
export const setRecipes = () => {
    return dispatch => {
        axios.get("http://localhost:8080/api/recipe").then(x => {
            dispatch({ type: 'SET_RECIPE', payload: x.data })
        })
            .catch(err => console.log(err))
    }
}