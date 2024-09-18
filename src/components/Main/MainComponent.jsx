"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HowItWorksComponent from "./HowItWorks/HowItWorksComponent";
import Link from "next/link";
import ReviewsComponent from "./Reviews/ReviewsComponent";
import { motion } from "framer-motion";

const imgWithContent = [
  {
    id: 1,
    src: "/assets/how-it-works-1.png",
    alt: "Consultation Booking",
    width: { default: 200, sm: 400, md: 300, lg: 350 },
    height: { default: 200, sm: 400, md: 300, lg: 350 },
    title: "Schedule a Consultation",
    content: "Book a design consultation at a time that suits your schedule.",
  },
  {
    id: 2,
    src: "/assets/how-it-works-2.png",
    alt: "In-Home Assessment",
    width: { default: 200, sm: 400, md: 300, lg: 350 },
    height: { default: 200, sm: 400, md: 300, lg: 350 },
    title: "In-Home Assessment",
    content:
      "Our experts visit your home to assess the space and understand your style preferences.",
  },
  {
    id: 3,
    src: "/assets/how-it-works-3.png",
    alt: "Personalized Recommendations",
    width: { default: 200, sm: 400, md: 300, lg: 350 },
    height: { default: 200, sm: 400, md: 300, lg: 350 },
    title: "Tailored Recommendations",
    content:
      "Receive a curated selection of furniture that perfectly fits your style and space.",
  },
];

export default function MainComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="grid grid-rows-[auto,auto,auto] gap-8 p-6 bg-gray-50">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center text-lg text-black relative w-full py-16 justify-center"
      >
        <article className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/hero-desktop.png"
            alt="Interior Design Showcase"
            width={500}
            height={400}
            loading="lazy"
            className="rounded-lg shadow-xl"
          />
        </article>
        <article className="flex-grow flex flex-col max-w-md justify-center p-6 mt-8 md:mt-0">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Discover Your Perfect Space
            </h2>
            <p className="mb-6 text-gray-600">
              Transform your home with our expert interior design services.
            </p>
            <motion.button
              className="rounded-full py-3 px-6 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold hover:from-orange-500 hover:to-orange-700 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/Booking">Book Your Consultation</Link>
            </motion.button>
          </motion.div>
        </article>
      </motion.section>

      <ReviewsComponent />

      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-center font-bold text-3xl mb-8 text-gray-800">
          How It Works
        </h2>
        <div className="flex flex-col sm:flex-row justify-around items-center space-y-8 sm:space-y-0 sm:space-x-4">
          {imgWithContent.map((imgData, index) => (
            <motion.div
              key={imgData.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <HowItWorksComponent
                imgData={{
                  ...imgData,
                  title: (
                    <span className="text-orange-600">{imgData.title}</span>
                  ),
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
