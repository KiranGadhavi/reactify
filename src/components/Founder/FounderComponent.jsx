"use client";

import React from "react";
import Image from "next/image";
import FounderFlashComponent from "./FounderFlash/FounderFlashComponent";
import { motion } from "framer-motion";

export default function FounderComponent() {
  const founderExpertise = [
    {
      title: "Unparalleled Craftsmanship",
      description:
        "Mike and Mandy have refined their skills under the tutelage of renowned fireplace expert, Viktor Blaze. Every product undergoes rigorous quality control before delivery.",
      imageSrc: "/assets/founders-1.png",
      altText: "Craftsmanship Showcase",
    },
    {
      title: "Decades of Experience",
      description:
        "With over 20 years in the industry, our track record speaks for itself. We're proud to have a long list of satisfied customers who consistently recommend our services.",
      imageSrc: "/assets/founders-2.png",
      altText: "Years of Experience",
    },
    {
      title: "Customer Satisfaction Guarantee",
      description:
        "We offer a 100% satisfaction guarantee on all our products. Additionally, we provide complimentary repairs for the first 20 years of ownership - a unique offering in our industry.",
      imageSrc: "/assets/founders-3.png",
      altText: "Customer Guarantee",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-2xl overflow-hidden mb-24"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300 p-12 flex flex-col justify-center">
              <h1 className="text-5xl font-bold text-white mb-10 text-center md:text-left">
                Meet the Visionaries
              </h1>
              <h2 className="text-3xl font-semibold text-white text-center md:text-left">
                Michael and Amanda
              </h2>
              <p className="text-white mt-6 text-lg">
                Pioneers in fireplace design with a passion for transforming
                homes
              </p>
            </div>
            <div className="md:w-1/2 p-12 flex items-center justify-center bg-gray-50">
              <Image
                src="/assets/founder-mike-and-mandy.png"
                alt="Michael and Amanda, Founders"
                width={400}
                height={400}
                loading="lazy"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </motion.article>
        <h3 className="text-3xl font-bold text-center mb-16 text-gray-800">
          Our Expertise
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {founderExpertise.map((expertise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FounderFlashComponent {...expertise} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
