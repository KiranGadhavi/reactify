"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaCalendarAlt, FaCog } from "react-icons/fa";

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <header
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
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
                className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden focus:outline-none"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <nav className="bg-white shadow-lg">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-3 hover:bg-orange-100 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  <item.icon className="text-orange-500" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
