import type { ApiResponse, AuthResponse } from "@/type/api";
import axiosClient from "@/utils/axiosClient";

 const ENDPOINT={
    LOGIN:'/auth/login',
    REGISTER:'/auth/register',
    REFRESH_TOKEN:'/auth/refresh-token',
    LOGOUT:'/auth/logout'
 };

 export const authService={
    login:async(email:string,password:string) =>{
        return axiosClient.post<ApiResponse<AuthResponse>>(ENDPOINT.LOGIN,{email,password});
    },
    register:async(email:string,password:string,fullName:string)=>{
        return axiosClient.post<ApiResponse<null>>(ENDPOINT.REGISTER,{email,password,fullName});
    }
}