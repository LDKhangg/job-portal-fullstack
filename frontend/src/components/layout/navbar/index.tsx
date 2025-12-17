import Container from "@/components/shared/Container.tsx";

const Navbar=()=>{
    return ( <header className="bg-blue-950 py-4 border-b border-brand-4">
        <Container className="flex items-center justify-between text-brand-6">
            {/* Logo */}
            <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">

            </div>
            {/* NavButton */}
            {/* NavIcon */}
            <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">

            </div>
        </Container>
    </header>);
}
export default Navbar;