import React, { useContext, useState } from 'react'
import  './Auth.css'
import Layout from '../../Componet/Layout/Layout'
import { Link } from 'react-router'
import amazon_letter_logo from "../../assets/image/logo/amazon_letter_logo.png"
import { auth } from '../../Utility/firebase'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,} from "firebase/auth";
import {DataContext} from '../../Componet/DataProvider/DataProvider'
import {Type} from '../../Utility/action.type'

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [{ user }, dispatch] = useContext(DataContext);
    console.log(user)

  //console.log(password, email)
  const authHandler =  async(e) => {
    e.preventDefault();

    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.name);
  

if (e.target.name == "signIn") {signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
           //console.log(userInfo);
           dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          })
          .catch((err) => {
           //  console.log(err);
             setError(err.message);
          });
} else{createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
         //  console.log(userInfo);
         dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
}).catch((err) => {
  //console.log(err);
  setError(err.message);
});
}
  }
  return (
    <Layout>
      <section className="auth__container_login">
      <Link to="/">
        <img src={amazon_letter_logo} alt="" />
      </Link>

      <div className="auth__signin_container">
        <h1>Sign In</h1>
        <form action="">
  <div>
    <label htmlFor="email">Email</label>
    <input value={email}
              onChange={(e) => setEmail(e.target.value)}
      id="email"
      type="email"
      autoComplete="username" // For login forms
    />
  </div>
  <div>
    <label htmlFor="password">Password</label>
    <input value={password}
          onChange={(e) => setPassword(e.target.value)} 
      id="password"
      type="password"
      autoComplete="current-password" // For existing passwords
    />
  </div>
      
        <button type="submit"
            onClick={authHandler}
            name="signIn"
            className='auth__signin_signInButton' >Sign in</button>
      
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button 
        type="submit"
          name="signUp"
          onClick={authHandler}
        className='auth_login__registerButton'>Create your Amazon Account</button>
      </div>
      <div>{error}</div>
    </section>
    </Layout>
  )
}

export default Auth