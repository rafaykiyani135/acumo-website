import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute w-full top-0 z-50 pt-8 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-[1600px] flex items-center justify-between">
        <div className="flex items-center gap-10 md:gap-16">
          <Link href="/" className="text-black text-xl font-extrabold tracking-tight flex items-center">
            NEXORA<span className="text-[10px] font-bold align-top relative -top-2 ml-0.5">®</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#444444]">
            <Link href="#insights" className="hover:text-black transition-colors">Insights</Link>
            <Link href="#solutions" className="hover:text-black transition-colors">Solutions</Link>
            <Link href="#pricing" className="hover:text-black transition-colors">Pricing</Link>
          </div>
        </div>
        <div className="flex items-center gap-8 text-[15px] font-medium text-[#444444]">
          <Link href="#login" className="hover:text-black transition-colors">
            Login
          </Link>
          <Link href="#try-now" className="bg-black text-white px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors text-sm">
            Try Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
