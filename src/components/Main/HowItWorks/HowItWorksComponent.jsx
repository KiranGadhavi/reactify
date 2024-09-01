import React from "react";
import Image from "next/image";
export default function HowItWorksComponent({ imgData }) {
  return (
    <section>
      <article>
        <div className="text-center justify-center">
          <Image
            src={imgData.src}
            alt={imgData.alt}
            width={imgData.width}
            height={imgData.height}
            className="w-full h-auto object-contain my-4"
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
