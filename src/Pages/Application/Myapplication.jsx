
import React, { Suspense } from 'react';
import UseAuth from '../../Components/UseAuth';
import MyapplicationList from './MyapplicationList';

const Myapplication = () => {
    const { user,loading } = UseAuth();
    const myapplicationPromise = fetch(`https://job-hyper-server.vercel.app/myapplication?email=${user.email}`).then(res=>res.json());
    return (
        <div>
            <Suspense fallback={loading}>
                <MyapplicationList myapplicationPromise={myapplicationPromise}></MyapplicationList>
            </Suspense>

        </div>
    );
};

export default Myapplication;