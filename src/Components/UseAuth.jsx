import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const UseAuth = () => {
    const AuthInfo = useContext(AuthContext)
    return AuthInfo;
};

export default UseAuth;