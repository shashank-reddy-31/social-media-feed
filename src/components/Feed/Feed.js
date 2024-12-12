import React, { useEffect, useState } from 'react';  
import { db } from '../../firebase';  
import { collection, query, orderBy, limit, getDocs, startAfter } from 'firebase/firestore';  
import Post from '../Post/Post';  
import Loader from '../Loader/Loader';  
import './Feed.css';  

const Feed = () => {  
  const [posts, setPosts] = useState([]);  
  const [lastVisible, setLastVisible] = useState(null);  
  const [loading, setLoading] = useState(false);  

  const fetchPosts = async (loadMore = false) => {  
    setLoading(true);  
    const postsRef = collection(db, 'posts');  
    const q = loadMore  
      ? query(postsRef, orderBy('timestamp', 'desc'), startAfter(lastVisible), limit(20))  
      : query(postsRef, orderBy('timestamp', 'desc'), limit(20));  

    const documentSnapshots = await getDocs(q);  
    const newPosts = documentSnapshots.docs.map(doc => ({ id: doc.id, ...doc.data() }));  
    
    setPosts(prevPosts => loadMore ? [...prevPosts, ...newPosts] : newPosts);  
    setLastVisible(documentSnapshots.docs[documentSnapshots.docs.length - 1]);  
    setLoading(false);  
  };  

  useEffect(() => {  
    fetchPosts();  
  });

  const handleScroll = (e) => {  
    const bottom = e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;  
    if (bottom && !loading) {  
      fetchPosts(true);  
    }  
  };  

  return (  
    <div className="feed-container" onScroll={handleScroll}>  
      {posts.map(post => <Post key={post.id} post={post} />)}  
      {loading && <Loader />}  
    </div>  
  );  
};  

export default Feed;