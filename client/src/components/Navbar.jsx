import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext';
const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo"> <Link to='/' className='logo' >Author'S </Link> </div>
        <div className="links">
          <Link className='link' to='/?cat=art'> Art</Link>
          <Link className='link' to='/?cat=technology'> Technology</Link>
          <Link className='link' to='/?cat=design'>Design</Link>
          <Link className='link' to='/?cat=cinema'>Cinema</Link>
          <Link className='link' to='/?cat=portfolio'> Portfolio</Link>
          <Link className='link' to='#'> {currentUser?.username}</Link>
          {currentUser ?
            (
              <Link className='link'  onClick={logout}>Logout</Link>) :

            (<Link className='link' to='/login'> Login</Link>
            )}
          <Link className='link' to='/write' style={{backgroundColor:'#FFEB3B' ,color:'#000',border:'5px',padding:'0.1rem'}}> Create New Post</Link>

        </div>


      </div>

    </div>
  )
}

export default Navbar