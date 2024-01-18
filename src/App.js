//import logo from './logo.svg';
//import './App.css';
import Header from './component/header';
import HomePage from './component/homePage';
//import Login from './component/login';
//import Signin from './component/signin';
import Login from './component/entrance/login';
import Signin from './component/entrance/signin';
import Entrance from './component/entrance/entrance';
import About from './component/about';

//import Body from './component/body';
//import Recipes from './component/recipes/recipes';
import Recipes from './component/recipes/recipes';
import MyRecipes from './component/recipes/recipes';
import AddRecipe from './component/recipes/addRecipe';
import ShoppingList from './component/shoppingList';
import AddCategory from './component/addCategory';
import Category from './component/categories/category';
import Exit from './component/exit';


//import About from './component/about';

import { Routes, Route } from 'react-router-dom';

// דף הבית, מתכונים, המתכונים שלי, הוספת מתכון, רשימת קניות, הוספת קטגוריה, החלף משתמש
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        {/* <Routes></Routes> */}
        <hr />
            <Routes>
                <Route path="/" element={< Entrance/>} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={< Signin/>} />
                <Route path="/about" element={<About />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/myRecipes" element={<MyRecipes />} />
                <Route path="/addRecipe" element={<AddRecipe />} />
                <Route path="/shoppingList" element={<ShoppingList />} />
                <Route path="/addCategory" element={<AddCategory />} />
                <Route path="/category" element={<Category />} />
                <Route path="/exit" element={<Exit />} />


                {/* <Route path="/User" element={<UsersGet />} >  */}
                {/* <Route path="aaa" element={<Login />} />
                <Route path="kkk" element={<div>שלום</div>} /> */}
                {/* <Route path="post" element={<MyPost />} /> */}
                {/* <Route path=":userId/:name" element={<MyPost />} /> */}

                {/* </Route> */}
                {/* <Route path="User" element={<UsersGet />} /> */}
                {/* <Route path="User/aaa" element={<Login />} /> */}

            </Routes>
            <hr />

      </header>
    </div>
  );
}

export default App;
