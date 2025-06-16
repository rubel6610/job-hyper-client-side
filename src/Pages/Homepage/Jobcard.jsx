import React from 'react';
import { Link } from 'react-router-dom';

const Jobcard = ({ job }) => {
 
    const { _id, title, location, jobType, category, description, company, company_logo, requirements } = job;
    return (
        <div className="card border-2 bg-base-100 w-96 shadow-sm space-y-6">
            <div className='flex justify-between items-center mx-4'>
                <div className='flex items-center gap-3'>
                    <img
                        src={company_logo}
                        alt="Shoes" className='max-w-16' />
                    <div>
                        <h1 className='text-xl font-bold'>
                            {company}
                        </h1>
                        <p>{location}</p>
                    </div>
                </div>
                <div className='text-xl text-center font-bold'>
                    <p>{jobType}</p>
                    <p>{category}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}

                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end ">
                    {
                        requirements.map((req, index) => <p key={index} className='border-1 rounded-lg text-center'>{req}</p>)
                    }
                </div>
                <Link to={`/jobdetails/${_id}`} className='btn btn-soft btn-secondary'>See Details</Link>
            </div>
        </div>
    );
};

export default Jobcard;