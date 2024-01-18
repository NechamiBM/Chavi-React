import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actionType from '../store/action'
// const AddToList = () => {
//     console.log("ADD")

//     return (
//         <div>add to list</div>
//     )
// }
// export default AddToList;//() {
//export default AddToList;
const AddToList = ({ ingrident }) => {
    { console.log("ADD") }
    // const dispatch = useDispatch();
    // const shoppingList = useSelector(state => state.shoppingList);
    // shoppingList.map(m =>
    //     m.Name === ingradient.Name && m.Type === ingradient.Type ? m.Count += ingradient.Count :
    //         dispatch({ type: actionType.ADD_INGRIDENT, payload: m })
    // )
    return (
        <>
        {ingrident}
        <div>add to list</div>
        </>
    )
}
export default AddToList;