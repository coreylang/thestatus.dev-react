import React, { useEffect, useState } from "react";

type Order = {
  id: number;
  name: string;
  status: "Received" | "Preparing" | "Ready";
};

const customerNames = [
  "Athena L.",
  "Lauren C.",
  "Sophia K.",
  "Steven M.",
  "Olivia P.",
  "Katie A.",
  "Isabella M.",
  "Erin A.",
  "Mia W.",
  "Ryan N.",
];

const Demo: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(
    customerNames.map((name, idx) => ({
      id: idx,
      name,
      status: "Received",
    }))
  );

  useEffect(() => {
    // Animate orders through statuses
    orders.forEach((order, idx) => {
      // stagger each order’s transition
      setTimeout(() => {
        setOrders((prev) =>
          prev.map((o) =>
            o.id === order.id ? { ...o, status: "Preparing" } : o
          )
        );
      }, 2000 + idx * 500);

      setTimeout(() => {
        setOrders((prev) =>
          prev.map((o) =>
            o.id === order.id ? { ...o, status: "Ready" } : o
          )
        );
      }, 5000 + idx * 500);
    });
  }, []);

  const columns: ("Received" | "Preparing" | "Ready")[] = [
    "Received",
    "Preparing",
    "Ready",
  ];

  return (
    <section id="demo" className="py-20 px-6 bg-gray-50 text-black">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
        Demo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {columns.map((col) => (
          <div key={col} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">{col}</h3>
            <ul className="list-none p-0 space-y-3 min-h-[300px] transition-all">
              {orders
                .filter((o) => o.status === col)
                .map((o) => (
                  <li
                    key={o.id}
                    className="p-3 bg-brand/10 border border-brand rounded-lg text-center font-medium transition-all duration-500 ease-in-out transform hover:scale-105"
                  >
                    {o.name}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Demo;
