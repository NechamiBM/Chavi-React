import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

const MyRecipes = () => {
    // const navig = useNavigate()
    // const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const recipes = useSelector(state => state.recipes)

    return (
        <div>{recipes?.map((recipe) => (
            (user && recipe.UserId == user.Id) ?
                <p key={recipe.Id}>
                    {recipe?.Name}
                    <br />
                    <img src={recipe?.Img}></img>
                </p> : null
        ))}</div>
    )
}
export default MyRecipes;