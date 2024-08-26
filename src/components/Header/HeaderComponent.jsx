"use client";
import React from "react";
import Image from "next/image";

export default function HeaderComponent() {
  return (
    <>
      <header className="grid  p-4 fixed top-0 left-0 w-full z-10 bg-white">
        <section className="flex justify-between">
          <article className="">
            KReactify
            <span className="pb-3 ">🖊️</span>
          </article>
          <article className="">
            <button className="focus:outline-none">
              <Image
                src="/assets/menu-open-button.png"
                alt="menu-button"
                width={20}
                height={20}
              />
            </button>
          </article>
        </section>
      </header>
    </>
  );
}
