
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage'
import TeacherPage from './pages/Teacher/TeacherPage'
import StudentPage from './pages/Student/StudentPage'


function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teacher" element={<TeacherPage />} />
            <Route path="/student" element={<StudentPage />} />
         
        </Routes>
      </Router>
    </>
  )
}
export default App




 

