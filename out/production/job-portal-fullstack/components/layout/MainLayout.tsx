import {Outlet} from "react-router-dom";
import Container from "@/components/shared/Container.tsx";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const MainLayout=()=>{
    return (<>
    <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar/>
        <div className="flex-grow py-8">
            <Container className="flex flex-col md:flex-row gap-6">
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="sticky top-20 bg-white p-4 rounded-lg border">
                        Sidebar Filter
                    </div>
                </aside>
                <main className="flex-grow">
                    <Outlet />
                </main>
            </Container>
        </div>
        <Footer />
    </div>
    </>);
}
export default MainLayout;