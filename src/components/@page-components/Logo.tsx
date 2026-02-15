import Image from "next/image";
import Link from "next/link";
import logo from "@/static/logo.png";

const Logo = () => {
  return (
    <div className="h-16 flex items-center shrink-0 border-b border-white/10">
      <Link
        href="/admin"
        className="flex items-center justify-center lg:justify-start gap-2 px-4 w-full text-slate-200 hover:text-white transition-colors"
      >
        <Image src={logo} alt="Logo" width={32} height={32} className="rounded-lg" />
        <span className="hidden lg:inline font-semibold text-lg">School</span>
      </Link>
    </div>
  );
};

export default Logo;
