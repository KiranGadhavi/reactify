import React from "react";
import Image from "next/image";
import HowItWorksComponent from "./HowItWorks/HowItWorksComponent";
import Link from "next/link";

const imgWithContent = [
  {
    id: 1,
    src: "/assets/how-it-works-1.png",
    alt: "seen",
    width: {
      default: 200,
      sm: 400,
      md: 300,
      lg: 350,
    },
    height: {
      default: 200,
      sm: 400,
      md: 300,
      lg: 350,
    },
    tittle: "Give us a call....",
    content:
      "Call us and bokk in a 'Design consultation' on a date and a time to suite you",
  },
  {
    id: 2,
    src: "/assets/how-it-works-2.png",
    alt: "seen",
    width: {
      default: 200,
      sm: 400,
      md: 300,
      lg: 350,
    },
    height: {
      default: 200,
      sm: 400,
      md: 300,
      lg: 350,
    },
    tittle: "We come to you....",
    content:
      "We come to your home to do an assessment of the space and to your style preferences",
  },
  {
    id: 3,
    src: "/assets/how-it-works-3.png",
    alt: "seen",
    width: {
      default: 200,
      sm: 400,
      md: 300,
      lg: 350,
    },
    height: {
      default: 200,
      sm: 400,
      md: 300,
      lg: 350,
    },
    tittle: "We recommend....",
    content:
      "We send you a bespoke set of furniture that fits your style and space",
  },
];

export default function MainComponent() {
  return (
    <main className="grid grid-rows sm:grid-cols gap-4 p-4">
      <section className="flex flex-col md:flex-row text-lg text-black relative top-16 left-0 w-full p-4 pb-16 justify-center">
        <article className="w-full md:w-1/2 justify-center">
          <Image
            src={"/assets/hero-desktop.png"}
            alt="seen"
            width={400}
            height={100}
            // className="w-full h-auto"
          />
        </article>
        <article className="flex-grow flex flex-col max-w-sm justify-center p-4 mt-4 md:mt-0 ">
          <div className="bg-orange-100 bg-black/75 p-6">
            <strong>Discover the</strong>
            <div>
              <p>
                <strong>Perfect Place...</strong>
              </p>
              <button className="bg-orange-300 border-black rounded-md p-2 max-w-fit bg-gradient-to-r from-orange-300 to-orange-600 text-white hover:bg-orange-800 hover:text-white">
                <Link href="/Booking">Book Consultation</Link>
              </button>
            </div>
          </div>
        </article>
      </section>

      <section>
        <article>
          <h1 className="text-center font-bold text-xl py-4">How It Works</h1>
          <div className="flex flex-col sm:flex-row ">
            {imgWithContent.map((imgData) => (
              <HowItWorksComponent key={imgData.id} imgData={imgData} />
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
