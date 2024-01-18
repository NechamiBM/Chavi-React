import * as actionType from './action'

const initialState = {
    recipes: [],
    //shoppingList:[],
    categories: [],

    recipe: null,
    user: {
        Id: 0,
        Username: "",
        Password: "",
        Name: "",
        Phone: "",
        Email: "",
        Tz: ""
    }
}
//     // recipes: axios.get('http://localhost:8080/api/recipe'),
//     // userId: null,//axios.post('http://localhost:8080/api/user/login'),

// }
///// טופס הרשמה/כניסה ב onSubmit
//// קריאת שרת שהמשתמש קיים /להוסיף משתמש 
////.then((res)=>dispatch({type:"GET_RECIPE", payload:res.data}))
function Reducer(state = initialState, action) {
    switch (action.type) {
        //user's actions
        case actionType.SET_USER://להוסיף משתמש
        console.log("set user")
        return {
            ...state,
            user: action.paylaod
        }    
        //recipe's actions
        // case actionType.GET_RECIPE: {
        //     state.recipes=action.payload;
        //     return {
        //         ...state
        //     }
        // }                  
        case actionType.SET_RECIPE://לקבלת כל המתכונים
            return {
                ...state,
                recipes: action.payload
            }
        
        case actionType.ADD_RECIPE://להוספת מתכון חדש
        {
            const recipes = [...state.recipes];
            recipes.push(action.paylaod);
            return {
                ...state,
                recipes
            }
        }
        case actionType.EDIT_RECIPE://לעריכת מתכון קיים
        {
            const recipes = [...state.recipes];
            const index = recipes.findIndex(r => r.Id = action.paylaod.Id);
            recipes[index] = action.paylaod;
            return {
                ...state,
                recipes
            }
        }
        case actionType.DELETE_RECIPE://למחיקת מתכון
        {
            const recipes = [...state.recipes];
            recipes = recipes.filter(r => r.Id !== action.paylaod.Id);// action.paylaod//,kuh cakhjv
            return {
                ...state,
                recipes
            }
        }
        //gradient's actions / shoppingList's actions
        // case actionType.SET_INGRIDENT://לקבלת כל המצרכים
        // return {
        //     ...state,
        //     shoppingList: action.payload
        // }
        case actionType.ADD_INGRIDENT://להוספת מצרך 
        {
            const shoppingList = [...state.shoppingList];//1 כוס קמח לבן או תופח = 140 גרם | 1 כף = 10 גרם
            const index = shoppingList.findIndex(g => g.Name !== action.payload.Name && g.Type !== action.payload.Type);//1 כוס קמח לבן או תופח = 140 גרם | 1 כף = 10 גרם
            if(index!== null && index!==-1)
                shoppingList[index].Count += action.payload.Count;
            shoppingList.push(action.payload)//???????                   
            // shoppingList.map(m =>
            //     m.Name === action.payload.Name && m.Type === action.payload.Type ? m.Count -= action.payload.Count :
            // )
            return {
                ...state, 
                shoppingList 
            }///לעשות בסוויט אם כוס או כף
        }
        case actionType.DELETE_INGRIDENT://למחיקת מצרך 
        {
            const shoppingList = [...state.shoppingList];
            shoppingList = shoppingList.filter(g => g.Name !== action.payload.Name && g.Type !== action.payload.Type);
            return {
                ...state, 
                shoppingList 
            }
        }
        //category's actions
        case actionType.SET_CATEGORY://לקבלת כל הקטגוריות
        return {
            ...state,
            categories: action.payload
        }
        case actionType.ADD_CATEGORY://להוספת קטגוריה
        {
            const categories = [...state.categories]
            categories.push(action.paylaod);
            return {
                ...state,
                categories
            }
        }
        default: return { 
            ...state 
        }
    }
}
export default Reducer
// function reducer(state = global, action) {
//     switch (action.type) {
//     }
// }
// export default reducer;