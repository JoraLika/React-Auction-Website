import React, { createContext, useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ProductsPage from './pages/productsPage/ProductsPage';
// import SignUp from './pages/account/SignUp';
// import LogIn from './pages/account/LogIn';
import { AuthContext } from './Context';
import { login } from "../src/apis/user.js";
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState({});

  useEffect(async () => {
    if(!user.username) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      const response = await login(userInfo?.username, userInfo?.password);
      if (response.status === 'failure') return; 

      setUser(response.result.data);
    }
  })

  return (
  <>
    <AuthContext.Provider value={{user, setUser}}> 
        <NavBar/>
        <ProductsPage/>
    </AuthContext.Provider>
  </>
  );
}
export default App;

