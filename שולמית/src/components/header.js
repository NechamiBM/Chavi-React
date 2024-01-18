import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { SET_USER } from '../store/action';

const Header = () => {

    const dispatch = useDispatch()
    const signout = () => {
        dispatch({ type: 'SET_USER', payload: null })
    }

    const user = useSelector(state => state.user)
    if (!user)
        return <div>
            <Link to="/login">כניסה</Link>
            <br />
            <Link to="/sighin">הרשמה</Link>
        </div>
    else return <div>
        <Link to="/recipes">מתכונים</Link>
        <br />
        <Link to="/addRecipe" state={{}}>הוסף מתכון</Link>
        <br />
        <Link to="/homePage">דף הבית </Link>
        <br />
        <Link to="/categories">קטגוריות</Link>
        <br />
        <Link to="/" onClick={() => signout()}>התנתקות</Link>
        <br />
        <Link to="/myRecipes">המתכונים שלי</Link>
    </div>
}
export default Header;