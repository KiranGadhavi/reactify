import React from "react";
import Image from "next/image";
export default function FounderFlashComponent({
  title,
  description,
  imageSrc,
  altText,
}) {
  return (
    <section>
      <article className="flex flex-col items-center justify-center">
        <div className="flex-row ">
          <div className="py-4 xl:h-32 md:h-48">
            <h1 className="font-bold py-2 text-xl">{title}</h1>
            <p> {description}</p>
          </div>
          <div className="flex-row xl:py-4 md:py-2">
            <Image
              src={imageSrc}
              alt={altText}
              width={460}
              height={400}
              loading="lazy"
            />
          </div>
        </div>
      </article>
    </section>
  );
}
