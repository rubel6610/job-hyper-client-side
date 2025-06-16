import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoutes = () => {
    const {loading}=useContext(AuthContext)
  if(loading){
    return <span className="loading loading-ring loading-xl"></span>
  }
};

export default PrivateRoutes;