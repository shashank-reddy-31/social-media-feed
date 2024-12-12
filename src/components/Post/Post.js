import React from 'react';  
import './Post.css';  

const Post = ({ post }) => {  
  return (  
    <div className="post">  
      <h3>{post.username}</h3>  
      <p>{post.content}</p>  
      {post.images && post.images.map((image, index) => (  
        <img key={index} src={image} alt="Post" />  
      ))}  
      {post.video && <video controls src={post.video}></video>}  
      <p>{new Date(post.timestamp.toDate()).toLocaleString()}</p>  
    </div>  
  );  
};  

export default Post;