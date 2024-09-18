import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function FooterComponent() {
  return (
    <footer className="mt-auto w-full bg-[url('/assets/seen.jpg')] bg-cover bg-center">
      <div className="bg-black/75 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-4">Connect with us</h2>
              <ul className="flex space-x-4">
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    <FaFacebookF size={24} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    <FaInstagram size={24} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    <FaTiktok size={24} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Founder"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Founder Page
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Booking"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Booking Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Service"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <p className="mb-2">info@KReactify.com</p>
              <p>
                &copy; {new Date().getFullYear()} KReactify. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
