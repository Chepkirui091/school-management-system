import Image from 'next/image';
import Link from 'next/link';
import logo from "@/static/logo.png";

const Logo = () => {
    return (
        <div className="w-28 h-28">
            <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 p-4">
                <Image src={logo} alt="Logo" width={32} height={32} />
                <span className="hidden lg:block">School</span>
            </Link>
        </div>
    );
};

export default Logo;
