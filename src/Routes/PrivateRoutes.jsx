import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation(); 
  const from = location.pathname;

  if (loading) {
    return <div className='flex justify-center items-center h-screen'>
      <span className="loading loading-ring loading-xl"></span>
    </div>
    
  }

  if (!user) {
  
    return <Navigate to="/login" state={{ from }} replace />;
  }

  return children;
};

export default PrivateRoutes;
