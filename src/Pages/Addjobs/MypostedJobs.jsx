import React, { useEffect, useState } from 'react';
import UseAuth from '../../Components/UseAuth';

import Swal from 'sweetalert2';
import Navbar from '../../Components/Navbar';
import { Link } from 'react-router-dom';

const MypostedJobs = () => {
    const { user } = UseAuth();
    const [jobs, setJobs] = useState([]);
  

 useEffect(()=>{
       fetch(`http://localhost:3000/mypostedjobs?email=${user.email}`,{
        credentials:"include"
    }).then(res => res.json()).then(data => {
        setJobs(data)
    });
    
 },[user?.email])
   if (!user?.email) return;

    return (
        <div>
            <Navbar />
            <h1 className='text-center text-3xl font-bold'>My Posted Jobs {jobs.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Company</th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) => 
                           
                                <tr key={job._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img className='w-16' src={job.company_logo} alt="" />
                                        <h1>
                                            {job.company}
                                        </h1>

                                    </td>
                                    <td>
                                        {job.title}
                                    </td>
                                    <td>
                                        {job.deadline}
                                    </td>
                                    <td>
                                       
                                        <Link to={`viewapplication/${job._id}`}>View Application</Link>
                                    </td>
                                </tr>
                           )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MypostedJobs;