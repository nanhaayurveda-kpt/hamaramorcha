"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import { Button } from "../ui/button";
import { useTheme } from "@/context/themeContext";
import { navItems } from "./Navbar";

interface MobileMenuProps {
  onClose?: () => void;
}

function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useTheme();

  const handleLinkClick = () => {
    onClose?.();
  };

  return (
    <div className="lg:hidden fixed inset-0 top-14 md:top-16 bg-white dark:bg-gray-800 z-40 overflow-y-auto animate-in fade-in">
      <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 space-y-2 sm:space-y-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={handleLinkClick}
            className={`block w-full py-3 sm:py-3.5 px-3 sm:px-4 rounded-md transition font-medium text-base sm:text-lg ${
              pathname === item.href
                ? "bg-red-500 text-white font-semibold"
                : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {item.label}
          </Link>
        ))}

        <div className="border-t dark:border-gray-700 my-3 sm:my-4"></div>

        <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-3">
          <div className="flex items-center justify-between py-2.5 sm:py-3 px-3 sm:px-4 bg-gray-50 dark:bg-gray-700 rounded-md">
            <span className="text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base">
              डार्क मोड
            </span>
            <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
          </div>
          <Button
            className="w-full py-2.5 sm:py-3 text-base sm:text-lg font-semibold"
            onClick={handleLinkClick}
          >
            लॉगिन
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;