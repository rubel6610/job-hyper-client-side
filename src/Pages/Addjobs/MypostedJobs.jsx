import React, { Suspense, useEffect, useState } from 'react';
import UseAuth from '../../Components/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from '../../Components/Navbar';

const MypostedJobs = () => {
    const { user, loading } = UseAuth();
    const [jobs, setJobs] = useState([])
    const [fetching, setFetching] = useState(true)
    useEffect(() => {
        axios.get(`http://localhost:3000/mypostedjobs?email=${user.email}`)
            .then(res => {
                setJobs(res.data)
                setFetching(false)
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Job add Failed',
                    text: error.message,
                });
                setFetching(false)
            })
    }, [user?.email])
console.log(jobs);
    if (loading || fetching) {
        return <div className="text-center py-10">Loading your posted jobs...</div>;
    }

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

                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) => <>
                                <tr>
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
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MypostedJobs;