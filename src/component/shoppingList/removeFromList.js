import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actionType from '../store/action'

export default function RemoveFromList({ingrident}){
  
    return (
        <>
        <div>add to list</div>
        {ingrident}
        </>
    )
}
// export default function RemoveFromList({ingradient}){
//     console.log("vvv")
//     const dispatch = useDispatch();
//     const shoppingList = useSelector(state => state.shoppingList);
//     shoppingList.map(m=>
//     m.Name===ingradient.Name&&m.Type===ingradient.Type?m.Count-=ingradient.Count:
//     dispatch({ type: actionType.DELETE_INGRIDENT, payload:m})
//     )
//     return (
//         <div>add to list</div>
//     )
// }