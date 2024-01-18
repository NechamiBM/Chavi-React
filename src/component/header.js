//import {useState} from 'react';
//import {useNavigate} from 'react-router-dom';
//import {axios} from 'axios';
//import {mui} from 'axios';
import { useSelector } from "react-redux";

//import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";
// דף הבית, מתכונים, המתכונים שלי, הוספת מתכון, רשימת קניות, הוספת קטגוריה, החלף משתמש

const Header = () => {
    const user=useSelector(state => state.user);

    return <>
        {user.Id!==0 ? <>
            <Link to="/homepage">דף הבית</Link><br />
            <Link to="/about">אודות</Link><br />
            {/* <Link to="/User">משתמשים</Link> */}
            <Link to="/recipes">מתכונים</Link><br />
            <Link to="/myRecipes">המתכונים שלי</Link><br />
            <Link to="/addRecipe">הוספת מתכון</Link><br />
            <Link to="/shoppingList">רשימת קניות</Link><br />
            <Link to="/addCategory">הוספת קטגוריה</Link><br />
            <Link to="/category">קטגוריה</Link><br />
            <Link to="/exit">יציאה</Link><br />
        </> :
            <>
                {/* <Link to="/">התחלה</Link><br /> */}
                <Link to="/login">כניסה</Link><br />
                <Link to="/signin">הרשמה</Link><br />

            </>
        }
    </>
}

export default Header

// export default function Header(){
//    return<>
//         <header>
//         </header>
//     </>
// }