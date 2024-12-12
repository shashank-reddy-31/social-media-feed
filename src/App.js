import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Auth from './components/Auth/Auth';  
import Feed from './components/Feed/Feed';  
import Profile from './components/Profile/Profile';  
import Navbar from './components/Navbar/Navbar';  
// Global styles (if any)  

const App = () => {  
  return (  
    <Router>  
      <Navbar />  
      <Routes>  
        <Route path="/" element={<Feed />} />  
        <Route path="/auth" element={<Auth />} />  
        <Route path="/profile" element={<Profile />} />  
      </Routes>  
    </Router>
  );
};

export default App;