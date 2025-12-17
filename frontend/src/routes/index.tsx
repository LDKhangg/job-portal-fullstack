import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout.tsx";
import { HomePage } from "@/pages/HomePage.tsx";
import AuthLayout from "@/components/layout/AuthLayout.tsx";
import Login from "@/pages/auth/Login.tsx";
import Register from "@/pages/auth/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    element: <AuthLayout />, // Áp dụng Layout này cho các con bên trong
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
