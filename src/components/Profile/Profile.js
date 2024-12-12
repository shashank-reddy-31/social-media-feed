import React from 'react';  
import { auth } from '../../firebase';  
import './Profile.css';  

const Profile = () => {  
  const user = auth.currentUser;  

  return (  
    <div className="profile-container">  
      {user ? (  
        <div>  
          <h2>{user.displayName}</h2>  
          <img src={user.photoURL} alt={user.displayName} />  
          <p>{user.email}</p>  
        </div>  
      ) : (  
        <p>Please log in to see your profile.</p>  
      )}  
    </div>  
  );  
};  

export default Profile;