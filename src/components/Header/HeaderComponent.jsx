"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaCalendarAlt, FaCog } from "react-icons/fa";

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuItems = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/Founder", label: "Founder", icon: FaUser },
    { href: "/Booking", label: "Booking", icon: FaCalendarAlt },
    { href: "/Service", label: "Service", icon: FaCog },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-orange-500">
              KReactify
            </span>
            <span className="text-3xl">🖊️</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-600 hover:text-orange-500 transition-all duration-300 ease-in-out pb-1 ${
                  pathname === item.href
                    ? "border-b-2 border-orange-500 text-orange-500"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden focus:outline-none transition-transform duration-300 ease-in-out"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <Image
              src={
                isMenuOpen
                  ? "/assets/menu-close-button.png"
                  : "/assets/menu-open-button.png"
              }
              alt={isMenuOpen ? "close-menu-button" : "menu-button"}
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden"
          >
            <nav className="bg-white shadow-lg">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-3 hover:bg-orange-100 transition-all duration-300 ease-in-out ${
                    pathname === item.href
                      ? "border-l-4 border-orange-500 bg-orange-50"
                      : ""
                  }`}
                  onClick={toggleMenu}
                >
                  <item.icon
                    className={`transition-colors duration-300 ease-in-out ${
                      pathname === item.href
                        ? "text-orange-500"
                        : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`transition-colors duration-300 ease-in-out ${
                      pathname === item.href ? "text-orange-500" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
