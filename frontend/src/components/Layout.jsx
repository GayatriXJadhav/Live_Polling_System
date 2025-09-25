import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const location=useLocation();
    
    const showNav=location.pathname==="/";
    console.log("Current path",location.pathname);
  return (
    <div>
        {showNav && 
       ( <nav >
        
        <Link to="/teacher">Teacher</Link> |{" "}
        <Link to="/Student">Student</Link>
      </nav>)
        }
        <Outlet/>
    </div>
    
  )
}

export default Layout;