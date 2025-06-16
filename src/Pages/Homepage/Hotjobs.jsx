import React, { use } from 'react';
import Jobcard from './Jobcard';

const Hotjobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise);
    return (
        <div>
            <h1 className='text-center text-4xl p-5'>Hot Job for You</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-5 '>
                {
                    jobs.map(job=><Jobcard key={job._id} job={job}></Jobcard>)
                }
            </div>
        </div>
    );
};

export default Hotjobs;