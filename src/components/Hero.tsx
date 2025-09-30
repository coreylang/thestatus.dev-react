import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-brand-dark to-black text-white">
      <div className="max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Track Your Food Order in Real Time
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          The Status keeps customers informed and kitchens efficient.<br/>
          From
          <span className="text-brand-light"> Received</span> →{" "}
          <span className="text-brand-light">Preparing</span> →{" "}
          <span className="text-brand-light">Ready</span>, everyone knows where
          things stand.
        </p>
        <a
          href="/demo"
          className="inline-block bg-brand text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-brand-dark transition"
        >
          See It in Action
        </a>
      </div>
    </section>
  );
};

export default Hero;
