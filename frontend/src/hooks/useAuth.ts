import { authService } from "@/services/AuthService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
interface BackendError {
    statusCode: number;
    message: string;
}
export const useAuth=()=>{
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState<string|null>(null);

    const navigate = useNavigate();

    const login = async(email:string,password:string)=>{
        setIsLoading(true);
        setError(null);
        try{
            const res = await authService.login(email,password);
            if(res.statusCode===200){
                const authData=res.data;
                localStorage.setItem('access_token',authData.access_token);
                localStorage.setItem('refresh_token',authData.refresh_token);
                localStorage.setItem('user', JSON.stringify({
                    fullName: authData.fullName,
                    role: authData.role,
                    Avatar: authData.avatar
                }));

                alert('Login successful!');
                navigate('/');
                return true;
        }
        }catch(err){
            if (axios.isAxiosError<BackendError>(err)) {
                const msg = err.response?.data?.message || 'Login failed';
                setError(msg);
            } else {
                setError("An unexpected error occurred");
            }
            return false;
        }
        finally {
            setIsLoading(false);
        }
         return false;
    }
    const logout=()=>{
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        alert('Logout successful!');
        navigate('/login');
    }

    return{
        login,isLoading,error,logout
    }
   
}