"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenuOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";

export default function Header() {
  const [DrawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setDrawerOpen(!DrawerOpen);
  };

  const NavLinks = [
    { name: "Products", href: "#" },
    { name: "Solution", href: "#solution" },
    { name: "Pricing", href: "#pricing" },
    { name: "Resources", href: "#resources" },
    { name: "Enterprise", href: "#enterprise" },
  ];

  return (
    <header className="relative flex justify-between items-center bg-[#080d19] text-white px-3 py-4 md:px-6 md:py-8">
      {/* Logo */}
      <div className="flex gap-2 items-center px-2 md:px-6">
        <img
          src="/logo1.jpeg"
          alt="Logo"
          className="h-10 w-10 md:h-16 md:w-16 rounded-xl"
        />

        <h1 className="text-2xl font-bold">Synnic</h1>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center px-8">
        <ul className="flex gap-12 text-xl">
          {NavLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "text-white hover:text-blue-300"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden items-center">
        <button onClick={toggleNavbar} className="text-white">
          {DrawerOpen ? <ImCross size={22} /> : <IoMenuOutline size={32} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {DrawerOpen && (
        <div className="absolute top-full left-0 w-full bg-[#080d19] border-t border-gray-700 z-50 lg:hidden">
          <ul className="flex flex-col items-center gap-6 py-8 text-lg">
            {NavLinks.map((nav) => {
              const isActive = pathname === nav.href;

              return (
                <li key={nav.href}>
                  <Link
                    href={nav.href}
                    onClick={() => setDrawerOpen(false)}
                    className={`transition-colors duration-200 ${
                      isActive
                        ? "text-blue-400 font-semibold"
                        : "text-white hover:text-blue-300"
                    }`}
                  >
                    {nav.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
