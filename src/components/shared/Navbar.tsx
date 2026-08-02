"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className="bg-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex flex-col items-start shrink-0">
            <Image
              src="/logo.jpeg"
              alt="हमारा मोर्चा"
              width={300}
              height={80}
              priority
              className="object-contain w-48 sm:w-64 lg:w-[300px] h-auto"
            />
            <p className="mt-2 text-sm md:text-base font-semibold tracking-wide text-green-700 pl-1">
              A struggle for dignity and livelihood
            </p>
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-500/30 transition"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <p className="text-sm sm:text-base text-rose-600 font-bold text-center">
            Need a Website, Software or Mobile App? Contact us today.
          </p>
          <a
            href="tel:+919996865069"
            className="text-indigo-700 font-bold text-base sm:text-lg hover:text-amber-200 transition-colors whitespace-nowrap"
          >
            +91 9996865069
          </a>
        </div>
      </div>

      <nav className="shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex items-center gap-4 py-3">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    className={`whitespace-nowrap hover:text-red-500 ${
                      pathname === item.href ? "text-red-500 font-semibold" : ""
                    }`}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
};

export default Navbar;