import {Outlet} from "react-router-dom";

const AuthLayout=()=>{
    return(<div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-100 p-4">

        {/* Phần Logo hoặc Tiêu đề chung cho nhóm trang Auth */}
        <div className="mb-8 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600"></div> {/* Logo giả */}
            <span className="text-xl font-bold text-slate-900">Job Portal</span>
        </div>

        {/* Outlet: Nơi Login/Register chui vào */}
        {/* w-full max-w-sm: Giới hạn chiều rộng form cho đẹp */}
        <div className="w-full max-w-sm">
            <Outlet />
        </div>

        {/* Footer nhỏ nếu cần */}
        <div className="mt-8 text-center text-sm text-slate-500">
            &copy; 2025 Job Portal Inc.
        </div>
    </div>)
}
export default AuthLayout;