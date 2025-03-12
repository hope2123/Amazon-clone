import React, { useState } from 'react'
import  './Auth.css'
import Layout from '../../Componet/Layout/Layout'
import { Link } from 'react-router'
import amazon_letter_logo from "../../assets/image/logo/amazon_letter_logo.png"
import { auth } from '../../Utility/firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //console.log(password, email)
  const authHandler = async (e) => {
    e.preventDefault();

    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.name);
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
              onChange={(e) => setEmail(e.target.value)} type="email"
              id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input value={password}
              onChange={(e) => setPassword(e.target.value)} type="password"
              id="password"/>
          </div>

      
        <button type="submit"
            onClick={authHandler}
            name="signIn"className='auth__signin_signInButton'  >Sign in</button>
      
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
            
    </section>
    </Layout>
  )
}

export default Auth