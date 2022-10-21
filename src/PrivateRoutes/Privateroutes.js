import { React, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Privateroutes = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (user && user?.uid) {
        return children;
    }
    else {
        return <Navigate to='/login'></Navigate>
    }
};

export default Privateroutes;