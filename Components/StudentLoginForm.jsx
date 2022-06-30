import React from 'react'
import Student from "../Images/user.png"
import { useNavigate } from 'react-router-dom'

function StudentLoginForm() {

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        // 👇️ redirect to /contacts
        navigate('/quize');
    };

    return (
        <>
            <div className=" border shadow p-3 col-3  mx-auto" style={{ marginTop: "140px" }} >
                <div className='text-center' style={{ marginTop: "-60px" }}>
                    <img src={Student} alt="mdo" style={{ width: "125px" }} className="rounded-circle" /><br />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Id No</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Branch</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>

                    <div className="text-center w-100">
                        <button type="submit" className="btn btn-primary ">Join</button>
                    </div>
                </form>

            </div>


        </>
    )
}

export default StudentLoginForm