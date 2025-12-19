export interface ApiResponse<T> {
    statusCode:number;
    message:string;
    data:T;
    responseAt:Date;
}

export interface AuthResponse {
    access_token:string;
    refresh_token:string;
    fullName:string;
    avatar:string;        
    role:string;
    }
