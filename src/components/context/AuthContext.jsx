import {createContext, useEffect, useState} from "react";

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
        isAuthenticated: false,
        user: {
            email:'',
            name: '',
            phone: '',
            city: '',
        },
        appLoading: true,
    });

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser && savedUser.isAuthenticated) {
            setUser(savedUser);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}