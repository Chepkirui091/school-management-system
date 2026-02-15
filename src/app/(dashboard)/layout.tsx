import Logo from "@/components/@page-components/Logo";
import Menu from "@/components/@page-components/Menu";
import NavBar from "@/components/@page-components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-[14%] min-w-[72px] md:min-w-[80px] lg:w-56 xl:w-60 flex-shrink-0 bg-sidebar border-r border-white/10 flex flex-col">
        <Logo />
        <Menu />
      </aside>
      {/* Main */}
      <div className="flex-1 overflow-auto flex flex-col min-w-0">
        <NavBar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
