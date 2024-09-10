import React from "react";
import Link from "next/link";
export default function FooterComponent() {
  return (
    <>
      <footer className="grid mt-auto  h-60 bottom-0 left-0 w-full bg-[url('/assets/seen.jpg')] bg-cover bg-center ">
        <section className="flex text-white bg-black/75 justify-between">
          <article className="p-8">
            <h1>Find us on :</h1>
            <ul>
              <li className="py-1">
                <Link href="#">Facebook</Link>
              </li>
              <li className="py-1">
                <Link href="#">Instagram</Link>
              </li>
              <li className="py-1">
                <Link href="#">Tiktok</Link>
              </li>
            </ul>
          </article>
          <article className="p-8">
            <h1>info@KReactify.com</h1>
            <ul>
              <li className="py-1">
                <Link href="/">Home</Link>
              </li>
              <li className="py-1">
                <Link href="/Founder">Founder Page</Link>
              </li>
              <li className="py-1">
                <Link href="/Booking">Booking Consultation</Link>
              </li>
              <li className="py-1">
                <Link href="/Service">Service</Link>
              </li>
            </ul>
          </article>
        </section>
      </footer>
    </>
  );
}
