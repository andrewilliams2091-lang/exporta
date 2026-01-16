"use client";

import { useState } from "react";

const testimonials = [
  {
    message:
      "I had some issues with managing my account over their portal initially but the support staff have helped me quite effectively.",
    name: "Mr. Jenti Patel,",
    company: "Tirmurti Cement Products, India",
  },
  {
    message:
      "Good B2B portal for buyers and sellers. I am enjoying the services provided by the team of exporters India. Keep it up.",
    name: "Mr. G. Pradyumna Kumar,",
    company: "Vallabha Gems And Minerals, India",
  },
  {
    message:
      "Thanks, this is exactly what I was looking for. Less problems, more solutions, keep working like this and nothing will break.",
    name: "Mr. Khushal Meena,",
    company: "Shri Vinayak Trading Company, India",
  },
];

export default function ClientTestimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1275px] mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold text-black mb-12">
          Client Testimonial
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-sm rounded-sm p-8 relative"
            >
              {/* Quote Icon */}
              <span className="text-orange-500 text-4xl leading-none block mb-4">
                “
              </span>

              {/* Message */}
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                {item.message}
              </p>

              {/* Name */}
              <p className="text-sm font-semibold text-black">
                {item.name}
              </p>

              {/* Company */}
              <p className="text-sm text-gray-500">
                {item.company}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-2 w-2 rounded-full transition ${
                active === index
                  ? "bg-blue-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <a
            href="https://www.exportersindia.com/testimonials.htm"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
