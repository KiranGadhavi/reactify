import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function FounderFlashComponent({
  title,
  description,
  imageSrc,
  altText,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-out transform
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
        hover:shadow-xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <article className="flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2
              className={`font-bold text-2xl text-gray-900 mb-4 transition-all duration-300 ${
                isHovered ? "text-orange-600 scale-105" : ""
              }`}
            >
              {title}
            </h2>
            <p
              className={`text-gray-700 leading-relaxed mb-6 transition-all duration-300 ${
                isHovered ? "text-gray-900" : ""
              }`}
            >
              {description}
            </p>
          </div>
          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            >
              <Image
                src={imageSrc}
                alt={altText}
                width={460}
                height={400}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
