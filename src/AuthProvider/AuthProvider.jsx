import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        user, loader,createUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;