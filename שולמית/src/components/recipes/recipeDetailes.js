import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const RecipeDetailes = () => {
    const user = useSelector(state => state.user)
    const { state: { recipe } } = useLocation();
    const navig = useNavigate()

    return <div>
        <h3>Details-Recipe</h3>

        <div key={recipe?.Id}>
            <h3> {recipe?.Name}</h3>
            <img src={recipe?.Img} />
            <h4> דרגת קושי :{recipe?.Difficulty}</h4>
            <h4> משך זמן : {recipe?.Duration}</h4>
            <div>
                {recipe.Ingrident?.map((i) => (
                    <div >
                        <h4>  {i?.Name}: {i?.Count} {i?.Type}   </h4>

                        {/* <IconButton style={{ color: "white" }} aria-label="add to shopping cart" onClick={() => buyFunction(i)}>
                                <AddShoppingCartIcon />
                            </IconButton> */}

                    </div>
                ))}
            </div>
            <div>
                <h5 >: אופן ההכנה </h5>
                {recipe?.Instructions?.map((i) => (
                    <p> {i}</p>
                ))}

            </div>
            <button onClick={x=>window.print()}>הדפס</button>
            {recipe.UserId == user.Id && (
                <>
                  <button onClick={() => navig("/addRecipe", { state: {recipe } })} >Edit</button>
                  {/* <button onClick={() => navig("/addRecipe", { state: {recipe } })} >delete</button> */}
                </>
              )}

        </div>

    </div>
}
export default RecipeDetailes