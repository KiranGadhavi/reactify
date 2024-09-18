import React from "react";
import Image from "next/image";

export default function FounderFlashComponent({
  title,
  description,
  imageSrc,
  altText,
}) {
  return (
    <section className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <article className="flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="font-bold text-2xl text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
          </div>
          <div className="w-full">
            <Image
              src={imageSrc}
              alt={altText}
              width={460}
              height={400}
              loading="lazy"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full h-auto object-cover"
            />
          </div>
        </div>
      </article>
    </section>
  );
}
