import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
const Home = () => {

const[posts,setPosts]= useState([]);


const cat = useLocation().search;
useEffect(()=>{
  const fetchPosts = async ()=>{

    try {
      const resp = await axios.get(`/posts${cat}`);
      setPosts(resp.data);
      
    } catch (error) {
      console.log(error)
      
    }

  }

  fetchPosts();

 },[cat]);

 const getText =(html)=>{
  const  docIm = new DOMParser().parseFromString(html,'text/html');
  return docIm.body.textContent;
 }
  return (
    <div className='content_Home'>
      <div className="posts">
      {
        posts.map(post=>(
          <div className='post' key = {post.id}> 
          <div className="img">
                <img src = {`../upload/${post.img}`}  alt = ''/>
          </div>
      
          <div className="content">
            <Link  className ="link" to ={`/post/${post.id}`}>
            <h3>  {post.title}</h3>
            </Link>
            <p> {getText (post.description)}</p>
           <button><Link className='link' to='/write' style={{color:'#fff'}}> Author Post</Link> </button> 
          </div>
          </div>

        ))
      }

      </div>
    </div>
  )
}

export default Home