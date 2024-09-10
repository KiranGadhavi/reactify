import React from "react";
import Image from "next/image";
export default function HowItWorksComponent({ imgData }) {
  return (
    <section>
      <article>
        <div className="text-center justify-center items-center p-4">
          <Image
            src={imgData.src}
            alt={imgData.alt}
            width={imgData.width.default}
            height={imgData.height.default}
            loading="lazy"
            className="w-full h-auto object-contain my-4 sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]"
          />
          <div className="my-2 px-6 text-height-200">
            <strong>
              <h2>{imgData.tittle}</h2>
            </strong>
            <p>{imgData.content}</p>
          </div>
        </div>
      </article>
    </section>
  );
}
