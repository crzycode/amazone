import "./App.css";
import React,{useEffect} from'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Checkout from "./component/Checkout";
import Login from "./component/Login";
import Error from "./component/Error";
import {auth} from'./component/Firebase'
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() =>{
    auth.onAuthStateChanged(authUser =>{
      console.log(`the user is ${authUser}`)
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })

  },[])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route path='/error'>
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
