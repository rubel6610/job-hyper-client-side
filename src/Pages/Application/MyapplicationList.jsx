import React, { use } from 'react';
import Navbar from '../../Components/Navbar';
import MyapplicationTable from './MyapplicationTable';

const MyapplicationList = ({ myapplicationPromise }) => {
    const myapplication = use(myapplicationPromise)

    return (
        <div>
            <Navbar />
            <h1 className='text-center text-3xl font-bold'>Application So Far: {myapplication.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                   #
                                </label>
                            </th>
                            <th>link</th>
                            <th>job type</th>
                            <th>Application Category</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myapplication.map((application, index) => <MyapplicationTable key={application._id} application={application} index={index}></MyapplicationTable>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyapplicationList;