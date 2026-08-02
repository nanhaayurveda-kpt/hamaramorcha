"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./Navbar";

interface MobileMenuProps {
  onClose?: () => void;
}

function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const handleLinkClick = () => {
    onClose?.();
  };

  return (
    <div className="lg:hidden fixed inset-0 top-14 md:top-16 bg-white z-40 overflow-y-auto animate-in fade-in">
      <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 space-y-2 sm:space-y-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={handleLinkClick}
            className={`block w-full py-3 sm:py-3.5 px-3 sm:px-4 rounded-md transition font-medium text-base sm:text-lg ${
              pathname === item.href
                ? "bg-red-500 text-white font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileMenu;