import {BrowserRouter, Route, Routes} from "react-router-dom";

import {HomePage} from "@/pages/HomePage.tsx";
import MainLayout from "@/components/layout/MainLayout.tsx";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<MainLayout/>} />
                <Route index element={<HomePage />} />

            </Routes>
        </BrowserRouter>
    );
}