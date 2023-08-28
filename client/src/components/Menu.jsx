import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);
  console.log(cat);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.img}`} alt="loading" />
          <h2>{post.title}</h2>
          <button><Link className='link' to='/write' style={{color:'#fff'}}> Author Post</Link> </button> 
        </div>
      ))}
    </div>
  );
};

export default Menu;