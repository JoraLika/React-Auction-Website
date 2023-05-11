import React, { useEffect, useState } from 'react';
import ProductsTab from './components/tabs/productsTab/ProductsTab';
import { AuthContext } from './Context';
import { login } from "../src/apis/user.js";
import NavBar from './components/NavBar';
import './App.css';

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
        <ProductsTab/>
    </AuthContext.Provider>
  </>
  );
}
export default App;

