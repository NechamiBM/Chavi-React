import axios from "axios";

export default function editRecipe(data) {
  
  return dispatch=>{ axios.post("http://localhost:8080/api/recipe/edit", data)
    .then(x => {
      dispatch({ type: 'EDIT_RECIPE', payload: x.data})
    })
    .catch(err => console.log(err))
  }

}
