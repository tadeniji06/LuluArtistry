"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Ada U.",
    text: "Absolutely love the service! My lashes have never looked better.",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Chidi O.",
    text: "Professional and friendly staff. Highly recommended!",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Bola S.",
    text: "The products are top-notch and the ambiance is relaxing.",
    image: "/images/testimonial3.jpg",
  },
];

export default function Testimony() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="p-6 sm:p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">What They Say About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => setActive(idx)}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <span className="font-bold">{t.name}</span>
            </div>
            {active === idx && (
              <div
                className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center z-10"
                onClick={() => setActive(null)}
              >
                <div className="bg-white rounded-lg p-6 text-black max-w-xs text-center shadow-xl">
                  <p className="mb-4">{t.text}</p>
                  <button
                    className="px-4 py-2 bg-primary-gold text-white rounded"
                    onClick={() => setActive(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
