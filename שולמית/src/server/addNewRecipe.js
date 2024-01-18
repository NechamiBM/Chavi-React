import axios from "axios";

export default function addNewRecipes(data) {
  
  return dispatch=>{ axios.post("http://localhost:8080/api/recipe", data)
    .then(x => {
      dispatch({ type: 'ADD_RECIPE', payload: x.data})
    })
    .catch(err => console.log(err))
  }

}
