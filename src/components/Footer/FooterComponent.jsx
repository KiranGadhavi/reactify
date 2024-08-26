import React from "react";

export default function FooterComponent() {
  return (
    <>
      <footer className="grid p-4 h-60 bottom-0 left-0 w-full bg-[url('/assets/seen.jpg')] bg-cover bg-center bg-black/75">
        <section className="flex text-white bg-black/75 justify-between">
          <article className="p-4">Find us on:</article>
          <article className="p-4">info@KReactify.com</article>
        </section>
      </footer>
    </>
  );
}
