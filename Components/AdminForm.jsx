import React from 'react'
import Admin from "../Images/admin.png"
import { useNavigate } from 'react-router-dom'

function AdminForm() {

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        // 👇️ redirect to /contacts
        navigate('/adminDashboard');
    };

    return (
        <>
            <div className=" border shadow p-3 col-3  mx-auto" style={{ marginTop: "140px" }} >
                <div className='text-center' style={{ marginTop: "-60px" }}>
                    <img src={Admin} alt="mdo" style={{ width: "125px" }} className="rounded-circle" /><br />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="text-center w-100">
                        <button type="submit" className="btn btn-primary ">Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AdminForm