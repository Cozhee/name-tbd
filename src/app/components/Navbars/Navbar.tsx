"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const navOptions: { route: string; text: string; key: string }[] = [
    { route: "/", text: "Home", key: "home" },
    { route: "/about", text: "About", key: "about" },
    { route: "/services", text: "Services", key: "services" },
    { route: "/contact", text: "Contact", key: "contact" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            <img src="/PICTURE.SVG" alt="" className="w-20 rounded-3xl" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navOptions.map((navLink) => (
              <Link
                key={navLink.key}
                href={navLink.route}
                className="text-gray-600 hover:text-blue-600"
              >
                {navLink.text}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 py-3 space-y-1">
            {navOptions.map((navLink) => (
              <Link
                key={navLink.key}
                href={navLink.route}
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {navLink.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
