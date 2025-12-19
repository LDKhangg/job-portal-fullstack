import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from "axios";
const axiosClient= axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    headers:{
        'Content-Type':'application/json'
    },
    timeout:2000
})

axiosClient.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
    const token = localStorage.getItem('access_token');
    if(token&&config.headers){
        config.headers.Authorization=`Bearer ${token}`;
    }
    return config;
},(error)=>{
    return Promise.reject(error);
}
);

axiosClient.interceptors.response.use((response:AxiosResponse)=>{
    return response.data
},(error)=>{
    if (error.response) {
    if(error.response.status===401){
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        window.location.href='/login';
    }

    const customError={
        code:error.response?.statusCode,
        message:error.response?.data?.message||error.message
    }
    return Promise.reject(customError);
    }

    if(error.request){
        return Promise.reject({
            code:503,
            message: 'Không thể kết nối đến Server. Vui lòng kiểm tra mạng!'
        });
    }

    return Promise.reject({
        code:500,
        message:error.message
    });
})
export default axiosClient;