import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';
const Login = () => {
const [error,SetError] = useState(null);
const[input,setInput]= useState({
  username:'',
  password:'',
})

const navigate = useNavigate();

const {login} = useContext(AuthContext);

const handleChange = (e) => {
  setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};
  const handleLogin = async(e)=>{
    e.preventDefault();

    try {
      await login (input);
      navigate('/');
    } catch (error) {

      SetError(error);
      
    }
  
  

  }


  return (
    <div className="login-section">
  
    <div className="login-form">
      <h1>Login</h1>
      <form>
        <input type="text"   name='username'placeholder="Username" onChange={handleChange}/>
        <input type="password" name='password' placeholder="Password"  onChange={handleChange}/>
        <button onClick={handleLogin}>Login</button>
        {error &&   <p className="error">Error submitting</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  </div>
  )
}

export default Login;