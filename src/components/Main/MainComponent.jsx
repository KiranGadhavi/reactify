import React from "react";
import Image from "next/image";

export default function MainComponent() {
  return (
    <main className="grid grid-cols gap-4 ">
      <section className="flex text-lg text-black relative top-16 left-0 w-full p-4 pb-16 justify-center">
        <article className=" ">
          <Image
            src={"/assets/hero-Desktop.png"}
            alt="seen"
            width={500}
            height={500}
          />
        </article>
        <article className="flex-grow flex flex-col max-w-sm justify-center pl-4">
          <div className="bg-orange-100 p-6">
            <strong>Discover the</strong>
            <div>
              <p>
                <strong>Perfect Place...</strong>
              </p>
              <button className="bg-orange-300 border-black rounded-md p-2 max-w-fit bg-gradient-to-r from-orange-300 to-orange-600 text-white hover:bg-orange-800 hover:text-white">
                {" "}
                Book Consultation{" "}
              </button>
            </div>
          </div>
        </article>
      </section>
      <section>
        <article>
          <h1>SubPart</h1>
        </article>
      </section>
    </main>
  );
}
