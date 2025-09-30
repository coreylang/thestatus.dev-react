import React, { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "What is The Status?",
    a: "The Status is a real-time order tracking display for restaurants, cafes, and kitchens. Customers can see exactly when their order is Received, Preparing, or Ready."
  },
  {
    q: "How do customers view it?",
    a: "Most venues display The Status on a large monitor or TV in the dining area, so everyone can follow along without asking staff."
  },
  {
    q: "Can it integrate with my POS system?",
    a: "Yes. The Status is designed to connect with modern POS and kitchen management systems for seamless updates."
  },
  {
    q: "Is it customizable?",
    a: "Absolutely. You can theme it with your brand colors, typography, and even add your logo for a consistent customer experience."
  }
];

const Faq: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 px-6 bg-gray-50 text-black overflow-hidden"
    >
      <div
        className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-sans font-extrabold mb-12 text-center text-gray-900 drop-shadow">
          Frequently Asked Questions
        </h2>

        <dl className="space-y-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              style={{ transitionDelay: `${idx * 150}ms` }} // stagger effect
              className={`transform transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              } bg-white rounded-lg shadow`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg focus:outline-none bg-inherit border-0 rounded-tr-lg rounded-tl-lg"
              >
                {item.q}
                <span className="ml-4 text-brand">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-6 pb-4 text-gray-700 transition-all duration-500 overflow-hidden ${
                  openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Faq;
