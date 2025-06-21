import React, { Suspense, useContext } from 'react';
import Banner from './Banner';
import Hotjobs from './Hotjobs';
import { AuthContext } from '../../Provider/AuthProvider';

const Home = () => {
    const jobsPromise = fetch('http://localhost:3000/jobs').then(res=>res.json());
    const {loading}= useContext(AuthContext)
    return (
        <div>
           <Banner/>
           <Suspense fallback={loading}>
             <Hotjobs jobsPromise={jobsPromise}/>
           </Suspense>
          
        </div>
    );
};

export default Home;