import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HowItWorksComponent({ imgData }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-white py-6 sm:py-10">
      <article
        className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ease-out transform
          ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
      >
        <div
          className="flex flex-col items-center bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`mb-4 sm:mb-6 transition-transform duration-300 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          >
            <Image
              src={imgData.src}
              alt={imgData.alt}
              width={imgData.width.default}
              height={imgData.height.default}
              loading="lazy"
              className="w-full h-auto object-contain sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"
            />
          </div>
          <h2
            className={`text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 transition-all duration-300 ${
              isHovered ? "text-orange-600" : "text-gray-900"
            }`}
          >
            {imgData.title}
          </h2>
          <div className="text-center">
            <p
              className={`text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl`}
            >
              {imgData.content}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
