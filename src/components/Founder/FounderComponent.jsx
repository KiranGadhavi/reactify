import React from "react";
import Image from "next/image";
import FounderFlashComponent from "./FounderFlash/FounderFlashComponent";

export default function FounderComponent() {
  const founderWorks = [
    {
      title: "Our Craftsmanship",
      description:
        "Mike and Mandy studied and honed their craft under the fireplace sensei Vik Von Blaze. Nothing gets delivered to a customer without their sign off.",
      imageSrc: "/assets/founders-1.png",
      altText: "Craftsmanship",
    },
    {
      title: "Our experience",
      description: `Number don't lie-We've been around for 20+years and have a long list of happy customers who gladly recommend us.`,
      imageSrc: "/assets/founders-2.png",
      altText: "Experience",
    },
    {
      title: "Our guarantee",
      description: `If you're not 100% satisfied we will fully refund your purchase. Also, we offer free repairs for the firsr 20 years of ownership. Find that somewhere else!`,
      imageSrc: "/assets/founders-3.png",
      altText: "Guarantee",
    },
  ];
  return (
    <section className="grid grid-cols pt-14 p-4">
      <article className="flex flex-col md:flex-row bg-gradient-to-r from-orange-500 to-orange-200">
        <div className="basis-6/12 font-bold">
          <h1 className="text-4xl text-center py-16">
            <div>Meet the artisans</div>
            <div>behind our </div>
            <div>masterpieces!</div>
          </h1>
          <h2 className="text-4xl text-center ">Mike and Mandy</h2>
        </div>
        <div className="basis-6/12 p-4">
          <Image
            src="/assets/founder-mike-and-mandy.png"
            alt="Mike and Mandy"
            width={400}
            height={400}
            loading="lazy"
          />
        </div>
      </article>
      <br />
      <article className="grid grid-cols md:grid-cols-3 gap-10">
        {founderWorks.map((founderwork, index) => (
          <FounderFlashComponent key={index} {...founderwork} />
        ))}
      </article>
      <br />
    </section>
  );
}
