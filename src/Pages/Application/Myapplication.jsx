
import React, { Suspense } from 'react';
import UseAuth from '../../Components/UseAuth';
import MyapplicationList from './MyapplicationList';

const Myapplication = () => {
    const { user,loading } = UseAuth();
    const myapplicationPromise = fetch(`http://localhost:3000/myapplication?email=${user.email}`).then(res=>res.json());
    return (
        <div>
            <Suspense fallback={loading}>
                <MyapplicationList myapplicationPromise={myapplicationPromise}></MyapplicationList>
            </Suspense>

        </div>
    );
};

export default Myapplication;