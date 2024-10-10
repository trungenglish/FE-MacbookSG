import {createContext, useState} from "react";

export const AuthContext = createContext({
    isAuthenticated: false,
    user: {
        email: '',
        name: '',
        phone: '',
        city: '',
    }
});

export const AuthWrapper = (props) => {
    const [user, setUser] = useState({
        email:'',
        name: '',
        phone: '',
        city: '',
    });
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}


