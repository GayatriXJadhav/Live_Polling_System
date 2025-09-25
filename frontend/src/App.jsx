
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage'
import TeacherPage from './pages/TeacherPage'
import StudentPage from './pages/StudentPage'
import Layout from "./components/Layout";
function App() {


  return (
    <>
     <Router>
      
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/teacher" element={<TeacherPage/>}/>
        <Route path="/student" element={<StudentPage/>}/>
      </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
