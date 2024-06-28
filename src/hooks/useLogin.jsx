import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { currentUserFirebase } from "../firebase/auth";

const useLogin = () => {
    const navigate = useNavigate()

    const {login, logout} = useAuth()

    useEffect(()=> {
        const suscribe = async () => {
            const user = await currentUserFirebase();
            if(user) return navigate('/')
        }

        return () => suscribe()
    }, [])

    const handleLogin = async (formData) => {
        const response = await login('adri@gmail.com', '123456');
        if(response) return navigate('/')
    }; 
    
    const handleLogout = async () => {
       const response = await logout()
       console.log(response);
    };

    

    return { handleLogin,  handleLogout}
}

export default useLogin;