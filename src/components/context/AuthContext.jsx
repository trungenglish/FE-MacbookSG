import {createContext, useState} from "react";

export const AuthContext = createContext({
    isAuthenticated: false,
    user: {
        email: '',
        name: '',
    }
});

export const AuthWrapper = (props) => {
    const [user, setUser] = useState({
        email:"",
        name: "",
    });
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}


