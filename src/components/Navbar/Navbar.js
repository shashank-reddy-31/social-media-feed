import React from 'react';  
import { Link } from 'react-router-dom';  
import { auth } from '../../firebase';  
import './Navbar.css';  

const Navbar = () => {  
  const handleLogout = async () => {  
    await auth.signOut();  
  };  

  return (  
    <nav className="navbar">  
      <Link to="/">Feed</Link>  
      <Link to="/profile">Profile</Link>  
      <button className="logout-button" onClick={handleLogout}>Logout</button>  
    </nav>  
  );  
};  

export default Navbar;