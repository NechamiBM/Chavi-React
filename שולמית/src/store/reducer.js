import * as Actions from './action'

const initalseState = {
    user: null,
    recipes: [],
    categories: []
}

const reducer = (state = initalseState, action) => {

    switch (action.type) {
        case Actions.SET_USER:
            return { ...state, user: action.payload }
        case Actions.SET_CATEGORIES:
            return { ...state, categories: action.payload }
        case Actions.SET_RECIPE:
            return { ...state, recipes: action.payload }
        case Actions.ADD_RECIPE:
            const recipes = [...state.recipes];
            recipes.push(action.payload);
            return { ...state, recipes }
        case Actions.EDIT_RECIPE: {
            const recipes = [...state.recipes];
            const findIndex = recipes.findIndex(x => x.Id == action.recipe.Id);
            recipes[findIndex] = action.recipe;
            return { ...state, recipes }
        }
        case "DELETE_RECIPE": {
            const recipes = state.recipes.filter(x => x.id != action.id);
            return { ...state, recipes }
        }
        default: return { ...state }
    }
}

export default reducer;