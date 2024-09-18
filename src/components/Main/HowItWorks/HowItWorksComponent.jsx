import React from "react";
import Image from "next/image";

export default function HowItWorksComponent({ imgData }) {
  return (
    <section className="bg-white py-6 sm:py-10">
      <article className="container mx-auto px-4 max-w-3xl">
        <div className="flex flex-col items-center">
          <div className="mb-4 sm:mb-6">
            <Image
              src={imgData.src}
              alt={imgData.alt}
              width={imgData.width.default}
              height={imgData.height.default}
              loading="lazy"
              className="w-full h-auto object-contain sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"
            />
          </div>
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
            {imgData.title}
          </h2>
          <div className="text-center">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
              {imgData.content}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
