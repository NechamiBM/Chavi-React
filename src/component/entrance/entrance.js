import Login from './login';
import Signin from'./signin';


import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
//import {axios} from 'axios';
//import {mui} from 'axios';

import { Link } from "react-router-dom"

const Entrance = () => {
    return <>
        {/* <Link to="/">דף הבית</Link><br /> */}
        <Link to="/login">כניסה</Link><br />
        <Link to="/signin">הרשמה</Link><br />
        {/* <Link to="/about">אודות</Link><br/> */}
        {/* <Link to="/User">משתמשים</Link> */}
    </>
}

export default Entrance