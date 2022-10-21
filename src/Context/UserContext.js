import React, { createContext, useState, useEffect } from 'react'
import app from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app)
const UserContext = ({ children }) => {
    const [user, setUser] = useState({ name: 'robin' })
    const GoogleSign = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Logout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
        })

        return () => {
            unsubscibe()
        }
    }, [])

    const authInfo = { user, GoogleSign, signIn, createUser, Logout }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;