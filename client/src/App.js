import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ProductsPage from './pages/productsPage/ProductsPage';
import SignUp from './pages/account/SignUp';
import LogIn from './pages/account/LogIn';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LogIn} />
        <Route path="/logIn" component={LogIn} />
        <Route path="/signUp" component={SignUp} />
        <PrivateRoute path="/products" component={ProductsPage} />
      </Switch>
    </Router>
  );

  function PrivateRoute({ component: Component, ...rest }) {
    let user = localStorage.getItem('user');
    return (
      <Route
        {...rest}
        render={
          (props) => user ? (<Component {...props} />) : (<Redirect to={"/logIn"} />)
        }
      />
    );
  }
}
export default App;

