"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderComponent() {
  const [hamburgerHideShow, sethamburgerHideShow] = useState(false);
  const [crossHideShow, setCrossHideShow] = useState(true);

  function handleButton() {
    console.log("clicked");
    sethamburgerHideShow(!hamburgerHideShow);
    setCrossHideShow(!crossHideShow);
  }
  return (
    <>
      <header className="grid p-4 fixed top-0 left-0 w-full z-10 bg-white">
        <section>
          {!hamburgerHideShow && (
            <article className="flex justify-between">
              <div>
                KReactify
                <span className="pb-3 ">🖊️</span>
              </div>
              <div className="">
                <button className="focus:outline-none" onClick={handleButton}>
                  <Image
                    src="/assets/menu-open-button.png"
                    alt="menu-button"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </article>
          )}

          <article className="">
            {hamburgerHideShow && (
              <div className="p-4 bg-gradient-to-r from-orange-300 to-orange-500 text-white hover:bg-orange-800 hover:text-white">
                <div className="text-end">
                  {setCrossHideShow && (
                    <button
                      className="focus:outline-none"
                      onClick={handleButton}
                    >
                      <Image
                        src="/assets/menu-close-button.png"
                        alt="menu-button"
                        width={20}
                        height={20}
                      />
                    </button>
                  )}
                </div>
                <div className="text-center ">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/Founder">Founder Page</Link>
                    </li>
                    <li>
                      <Link href="/Booking">Booking Consultation</Link>
                    </li>
                    <li>
                      <Link href="/Service">Service</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </article>
        </section>
      </header>
    </>
  );
}
