import React, { useState } from 'react'
import { Link,useNavigate  } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
  const navigate =  useNavigate();
  const [error, setError] = useState(null);


  const [input,setInput]= useState({
    username:'',
    email:'',
    password:'',
  })


  const handleChange=e=>{
  setInput((prev)=>({
     ...prev,[e.target.name]:e.target.value
  }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", input);
        navigate("/login");
          } catch (err) {
        setError(err.response.data);
    }
 };
 

  
  return (
    <div className="login-section">

    <div className="login-form">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {error && <p>{error} </p> }
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  </div>
  )
}

export default Register