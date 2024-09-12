import Logo from "@/components/@page-components/Logo";
import Menu from "@/components/@page-components/Menu";
import NavBar from "@/components/@page-components/Navbar";

export default function DashboardLayout({
                                            children,
                                        }: Readonly<{
                                            children: React.ReactNode;
                                        }>
) {
    return <div className="h-screen flex">
        {/*LEFT*/}
        <div className="w-[14%] md:[8%] lg:[16%] xl:[14%] bg-[#0B0F19]">
            <Logo/>
            <Menu/>
        </div>
        {/*RIGHT*/}
        <div className="w-[86%] md:[92%] lg:[84%] xl:[86%] bg-[#F7F8FA] overflow-scroll flex flex-col ">
            <NavBar/>
            {children}
        </div>
    </div>
}