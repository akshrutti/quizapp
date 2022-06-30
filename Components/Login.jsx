import React, { useState } from 'react'
import { Link } from "react-router-dom"


//icon
import Admin from "../Images/admin.png"
import Student from "../Images/user.png"

export default function Login() {

    return (
        <>

            <div class="d-flex justify-content-center flex-column align-items-center h-100">
                <h1> Welcome to GK Quiz Competition Dashboard</h1>

                <div class="d-flex justify-content-center align-items-center w-100 mt-3">
                    <div className="col-2 text-center">
                        <img src={Admin} alt="mdo" style={{ width: "125px" }} className="rounded-circle" /><br />
                        <Link to="adminform" className="btn btn-primary">Admin LogIn</Link>
                    </div>

                    <div className="col-2 text-center">
                        <img src={Student} alt="mdo" style={{ width: "125px" }} className="rounded-circle" /><br />
                        <Link to="studentloginform" className="btn btn-primary">Student LogIn</Link>

                    </div>
                </div>


            </div>


        </>
    )
}





function AdminLoginForm() {
    return (
        <div>AdminLogin Form</div>
    )
}


function StudentLoginForm() {
    return (
        <div>Student LoginForm</div>
    )
}

