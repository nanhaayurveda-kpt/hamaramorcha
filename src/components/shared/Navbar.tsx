"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/world", label: "World" },
  { href: "/india", label: "India" },
  { href: "/programmers", label: "प्रोग्रामर्स" },
  { href: "/academics", label: "Academics" },
  { href: "/health", label: "Health" },
  { href: "/vividha", label: "विविध" },
  { href: "/pagar-peeda", label: "पगार-पीड़ा" },
  { href: "/udvelit-janta", label: "उद्वेलित जनता" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="bg-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center sm:justify-start">
          <Link href="/" className="flex flex-col items-center sm:items-start">
            <Image
              src="/logo.jpeg"
              alt="हमारा मोर्चा"
              width={300}
              height={80}
              priority
              className="object-contain w-56 sm:w-64 lg:w-[300px] h-auto"
            />
            <p className="mt-2 text-sm md:text-base font-semibold tracking-wide text-green-700">
              A struggle for dignity and livelihood
            </p>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <p className="text-sm sm:text-base text-rose-600 font-bold text-center">
            Need a Website, Software or Mobile App? Contact us today.
          </p>
          <a
            href="tel:+919996865069"
            className="text-indigo-700 font-bold text-base sm:text-lg whitespace-nowrap"
          >
            +91 9996865069
          </a>
        </div>
      </div>

      <nav className="shadow-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap justify-between gap-y-1 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block whitespace-nowrap rounded px-3 py-2 text-sm sm:text-base transition-colors ${
                    pathname === item.href
                      ? "bg-red-500 text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-100 hover:text-red-500"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
