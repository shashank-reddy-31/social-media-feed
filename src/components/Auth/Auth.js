import React, { useState } from 'react';  
import { auth } from '../../firebase';  
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';  
import './Auth.css';  

const Auth = () => {  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const provider = new GoogleAuthProvider();  

  const handleGoogleSignIn = async () => {  
    try {  
      await signInWithPopup(auth, provider);  
    } catch (error) {  
      console.error(error);  
    }  
  };  

  const handleSignUp = async () => {  
    try {  
      await createUserWithEmailAndPassword(auth, email, password);  
    } catch (error) {  
      console.error(error);  
    }  
  };  

  const handleLogin = async () => {  
    try {  
      await signInWithEmailAndPassword(auth, email, password);  
    } catch (error) {  
      console.error(error);  
    }  
  };  

  return (  
    <div className="auth-container">  
      <h2>Login / Register</h2>  
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />  
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />  
      <button onClick={handleSignUp}>Sign Up</button>  
      <button onClick={handleLogin}>Login</button>  
      <button onClick={handleGoogleSignIn}>Login with Google</button>  
    </div>  
  );  
};  

export default Auth;