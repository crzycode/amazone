import React,{useState} from "react";
import { Link} from "react-router-dom";
import "../css/Login.css";
import {auth} from './Firebase'
import {Dialog} from '@material-ui/core'
 import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useHistory } from "react-router-dom";



function Login() {
  let history = useHistory();
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    const signIn = (e)=>{
e.preventDefault();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user
    console.log(user)
    if(user){
      history.push('/')
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
    const register = (e)=>{
        e.preventDefault();
      
        createUserWithEmailAndPassword(auth,email,password).then(result =>{
           const user = result.user
           if(auth){
             history.push('/')
           }
            console.log(user)
 
        }).catch((error) =>{
            alert(error)
        })
            }
   return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="./images/amazon_dark.png" />
      </Link>
      <div className="login__container">
          <h1>Sign In</h1>
          <form>
              <h5>Email</h5>
              <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
              <h5>Password</h5>
              <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
              <button type="submit" onClick={signIn} className="login__signinButton">Sign In</button>
              </form>
              <p>
                  lasfasklfasjhfasdfasdklfjskdfasjdhfasfhasdjkfh
                  jslkjfslkjfsalkfj
                  lklksjflkasjf
              </p>
              <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
        
      </div>
    </div>
  );
}

export default Login;
