import './App.css';
import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"

//dependenci

//images
import DefultUser from "./Images/default.png"
import Admin from "./Images/admin.png"
import Student from "./Images/user.png"

//Compnent
import Nav from "./Components/Nav"
import Login from './Components/Login';
import AdminForm from './Components/AdminForm';
import StudentLoginForm from './Components/StudentLoginForm';
import AdminDashboard from './Components/AdminDashboard';

function App() {
  const [user, setUser] = useState("User");
  const [usericon, setUsericon] = useState(DefultUser);

  return (
    <div className="App">
      <Nav user={user} usericon={usericon} />
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/adminform' exact element={<AdminForm />} />
        <Route path='/studentloginform' exact element={<StudentLoginForm />} />
        <Route path='/AdminDashboard' exact element={<AdminDashboard />} />
      </Routes>

    </div>
  );
}

export default App;
