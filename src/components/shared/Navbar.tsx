"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SiteSearch from "./SiteSearch";

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

        <div className="max-w-7xl mx-auto px-4 pb-4 flex justify-center">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 rounded-xl border-2 border-rose-300 bg-white/70 px-5 py-3 shadow-sm">
            <p className="text-center text-sm sm:text-base font-semibold text-gray-800 leading-relaxed">
              <span className="text-rose-600 font-bold">
                सी, पायथन, जावास्क्रिप्ट, गो, रस्ट, सॉलिडिटी
              </span>{" "}
              जैसी भाषाओं और{" "}
              <span className="text-green-700 font-bold">
                कंप्यूटर साइंस के बुनियादी और गणित के उन्नत सिद्धांतों
              </span>{" "}
              को हिंदी में पढ़ने के लिए संपर्क करें।
            </p>
            <a
              href="tel:+919996865069"
              className="whitespace-nowrap rounded-full bg-indigo-700 px-4 py-2 text-base sm:text-lg font-bold text-white transition-colors hover:bg-indigo-800"
            >
              +91 9996865069
            </a>
          </div>
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

          <div className="pb-3 flex justify-center sm:justify-end">
            <SiteSearch />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
