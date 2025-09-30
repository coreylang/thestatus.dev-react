import React, { useEffect, useRef, useState } from "react";

const HowToSetup: React.FC = () => {
  const [visible, setVisible] = useState(false);
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

  return (
    <section
      id="setup"
      ref={sectionRef}
      className="py-20 px-6 bg-gray-100 text-black overflow-hidden"
    >
      <div
        className={`max-w-4xl mx-auto transform transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl md:text-4xl font-sans font-extrabold mb-8 text-center text-gray-900 drop-shadow">
          How To Setup
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">The System</span> is a standalone
            application. It is currently <span className="font-bold">not</span>{" "}
            a SaaS product.
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">The Status</span> must be installed
            on a server that you own and control. This can be:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              A <span className="font-semibold">local server</span> hosted inside
              your restaurant building.
            </li>
            <li>
              A <span className="font-semibold">remote server</span> owned and
              managed by your restaurant.
            </li>
          </ul>
          <p className="text-lg text-gray-700">
            This ensures your order data stays private and under your direct
            control, while giving your team full visibility into order statuses
            in real time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToSetup;
