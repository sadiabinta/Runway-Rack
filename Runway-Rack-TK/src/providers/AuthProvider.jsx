import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext=createContext(null);

const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleSignIn=(emai,password)=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile=(firstName,photo,phone)=>{
        return updateProfile(auth.currentUser,{
            displayName:firstName, photoURL:photo, phoneNumber:phone,
        })
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        });
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;