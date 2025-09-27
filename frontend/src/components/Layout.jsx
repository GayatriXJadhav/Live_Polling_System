// import React from 'react'
// import { Link, Outlet, useLocation } from 'react-router-dom'

// const Layout = () => {
//     const location=useLocation();
    
//     const showNav=location.pathname==="/";
//     console.log("Current path",location.pathname);
//   return (
//     <div>
//         {showNav && 
//        ( <nav >
        
//         <Link to="/teacher">Teacher</Link> |{" "}
//         <Link to="/Student">Student</Link>
//       </nav>)
//         }
//         <Outlet/>
//     </div>
    
//   )
// }

// export default Layout;
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation();
    
    // Only show nav on non-homepage routes
    const showNav = location.pathname !== "/";
    
    return (
        <div>
            {showNav && (
                <nav className="bg-white shadow-sm p-4">
                    <div className="max-w-6xl mx-auto flex justify-between items-center">
                        <Link to="/" className="text-xl font-bold text-blue-600">
                            Live Polling System
                        </Link>
                        <div className="space-x-4">
                            <Link 
                                to="/teacher" 
                                className="text-gray-600 hover:text-blue-600 font-medium"
                            >
                                Teacher
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link 
                                to="/student" 
                                className="text-gray-600 hover:text-blue-600 font-medium"
                            >
                                Student
                            </Link>
                        </div>
                    </div>
                </nav>
            )}
            <Outlet/>
        </div>
    )
}

export default Layout;