"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleButton() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className="grid p-4 fixed top-0 left-0 w-full z-10 bg-white">
      <section>
        {/* Hamburger menu when closed */}
        {!isMenuOpen && (
          <article className="flex justify-between">
            <div>
              KReactify
              <span className="pb-3">🖊️</span>
            </div>
            <div>
              <button
                className="focus:outline-none"
                onClick={handleButton}
                aria-label="Open menu"
              >
                <Image
                  src="/assets/menu-open-button.png"
                  alt="menu-button"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </article>
        )}

        {/* Menu when open */}
        {isMenuOpen && (
          <article className="p-4 bg-gradient-to-r from-orange-300 to-orange-500 hover:bg-orange-500">
            <div className="text-end">
              <button
                className="focus:outline-none"
                onClick={handleButton}
                aria-label="Close menu"
              >
                <Image
                  src="/assets/menu-close-button.png"
                  alt="close-menu-button"
                  width={20}
                  height={20}
                />
              </button>
            </div>
            <div className="text-center">
              <ul onClick={handleButton}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/Founder">Founder Page</Link>
                </li>
                <li>
                  <Link href="/Booking">Booking Consultation</Link>
                </li>
                <li>
                  <Link href="/Service">Service</Link>
                </li>
              </ul>
            </div>
          </article>
        )}
      </section>
    </header>
  );
}
