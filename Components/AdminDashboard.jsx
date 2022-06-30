import React, { useState, useEffect } from 'react'



const result = [
    {
        "userId": 1,
        "id": 127,
        "title": "ChV",
        "Score": "10"
    },
    {
        "userId": 2,
        "id": 129,
        "title": "Bojjapu",
        "Score": "8"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "Mani",
        "Score": "9"
    }
]



function AdminDashboard() {



    const [getdata, setData] = useState([])

    useEffect(() => {

        setData(result)
    }, [])



    return (
        <>
            <div className=" border shadow p-3 col-10  mx-auto" style={{ marginTop: "140px" }} >
                <div className="text-center">
                    <h3 className="border-bottom pb-3"> Students Quize Result </h3>

                    <div className="col-6 mx-auto">
                        <table className="table col-6 mx-auto table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">SNo</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Score</th>
                                </tr>
                            </thead>
                            <tbody>

                                {getdata.map((value, index) => (


                                    <tr>
                                        <th scope="row" style={{ width: "20px" }}>{index}</th>
                                        <td class="text-start" style={{ width: "80%," }}>{value.title}</td>
                                        <td>{value.id}</td>
                                        <td>{value.Score}</td>
                                    </tr>

                                ))}



                            </tbody>
                        </table>
                    </div>


                </div>

            </div>



        </>
    )
}

export default AdminDashboard