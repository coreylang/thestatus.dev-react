import React, { useEffect, useRef, useState } from "react";

const AnimatedHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only animate once
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={ref}
      className={`text-4xl md:text-5xl font-sans font-extrabold mb-12 text-center text-gray-900 drop-shadow-lg transform transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {children}
    </h2>
  );
};

export default AnimatedHeading;
