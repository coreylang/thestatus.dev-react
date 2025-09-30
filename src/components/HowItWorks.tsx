import React, { useEffect, useRef, useState } from "react";

const statuses = ["Received", "Preparing", "Ready"] as const;

const HowItWorks: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Cycle Athena's order across columns
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % statuses.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Trigger animation on scroll
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

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 px-6 relative bg-gradient-to-br from-brand-light via-white to-brand-dark text-black overflow-hidden"
    >
      {/* Heading */}
      <h2
        className={`text-4xl md:text-5xl font-sans font-extrabold mb-12 text-center text-gray-900 drop-shadow-lg transform transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        How It Works
      </h2>

      <div
        className={`relative max-w-5xl mx-auto transform transition-all duration-700 delay-200 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="grid grid-cols-3 gap-8 text-center">
          {statuses.map((status, idx) => (
            <div
              key={status}
              className={`rounded-xl shadow-md p-6 h-64 flex flex-col items-center justify-start transition-colors duration-500 ${
                currentStep === idx
                  ? "bg-brand/10 border-2 border-brand animate-pulse"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              <h3
                className={`text-xl font-semibold ${
                  currentStep === idx ? "text-brand" : "text-gray-700"
                }`}
              >
                {status}
              </h3>
            </div>
          ))}
        </div>
        <div
          className="absolute top-20 left-0 w-1/3 flex justify-center transition-transform duration-700"
          style={{
            transform: `translateX(${currentStep * 100}%)`,
          }}
        >
          <div className="w-40 bg-white border border-gray-200 rounded-lg shadow-lg p-4 text-center">
            <p className="font-medium">Athena L.</p>
            <p className="text-sm text-gray-500">{statuses[currentStep]}</p>
          </div>
        </div>
      </div>
      <div
        className={`mx-auto max-w-2xl transform transition-all duration-700 delay-100 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <p className="text-lg text-center text-gray-700">
          Customers watch a large monitor or TV that displays{" "}
          <span className="font-semibold text-brand">The Status</span> order updates
          in real time, so everyone knows exactly when their food is Received,
          Preparing, or Ready.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
