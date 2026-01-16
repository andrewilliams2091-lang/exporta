"use client";

import Image from "next/image";
import Link from "next/link";

const topCategories = [
  "Home Supplies",
  "Agriculture",
  "Food Product & Beverages",
  "Apparel & Fashion",
  "Chemicals",
  "Industrial Supplies",
  "Construction & Real Estate",
  "Furniture",
  "Health & Beauty",
];

const trendingCategories = [
  {
    title: "Christmas Decorations",
    image: "https://dyimg77.exportersindia.com/final_catg_image/355447-236.jpg",
    link: "#",
  },
  {
    title: "Winter Wear",
    image: "https://dyimg77.exportersindia.com/final_catg_image/366415-128.jpeg",
    link: "#",
  },
  {
    title: "Heating Pads",
    image: "https://dyimg77.exportersindia.com/final_catg_image/76943-113.jpg",
    link: "#",
  },
  {
    title: "Sweater",
    image: "https://dyimg77.exportersindia.com/final_catg_image/14161-629.jpg",
    link: "#",
  },
  {
    title: "Room Heater",
    image: "https://dyimg77.exportersindia.com/final_catg_image/68864-1.jpg",
    link: "#",
  },
  {
    title: "Blankets",
    image: "https://dyimg77.exportersindia.com/final_catg_image/353954-313.jpg",
    link: "#",
  },
  {
    title: "Air Purifiers",
    image: "https://dyimg77.exportersindia.com/final_catg_image/10771-671.jpg",
    link: "#",
  },
  {
    title: "Water Heaters",
    image: "https://dyimg77.exportersindia.com/final_catg_image/310848-997.jpg",
    link: "#",
  },
  {
    title: "Electric Kettle",
    image: "https://dyimg77.exportersindia.com/final_catg_image/63812-1.jpg",
    link: "#",
  },
  {
    title: "Industrial Heaters",
    image: "https://dyimg77.exportersindia.com/final_catg_image/13207-621.jpg",
    link: "#",
  },
  {
    title: "Essential Oil",
    image: "https://dyimg77.exportersindia.com/final_catg_image/355155-181.jpeg",
    link: "#",
  },
  {
    title: "Body Lotion",
    image: "https://dyimg77.exportersindia.com/final_catg_image/69944-912.jpg",
    link: "#",
  },
  {
    title: "Winter Jackets",
    image: "https://dyimg77.exportersindia.com/final_catg_image/88327-942.jpg",
    link: "#",
  },
  {
    title: "Duvets & Comforters",
    image: "https://dyimg77.exportersindia.com/final_catg_image/64379-803.jpeg",
    link: "#",
  },
  {
    title: "Ayurvedic & Herbal Powders",
    image: "https://dyimg77.exportersindia.com/final_catg_image/343853-594.jpg",
    link: "#",
  },
];

export default function CategoriesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">
      {/* MOBILE TOP CATEGORIES */}
      <div className="col-span-12 md:hidden">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {topCategories.map((cat, index) => (
            <span
              key={index}
              className="whitespace-nowrap border rounded-full px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:block md:col-span-3">
        <div className="bg-white border rounded-lg shadow-sm">
          <div className="bg-blue-500 text-white font-semibold px-4 py-3 rounded-t-lg">
            Top Categories
          </div>

          <ul className="divide-y">
            {topCategories.map((cat, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-4 py-3 group hover:bg-gray-50 transition"
              >
                <span className="text-sm">{cat}</span>
                <span className="text-gray-400 group-hover:translate-x-1 transition">
                  ›
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="#"
            className="block px-4 py-4 text-blue-600 font-medium hover:bg-gray-50"
          >
            All Categories
          </Link>
        </div>
      </aside>

      {/* TRENDING GRID */}
      <div className="col-span-12 md:col-span-9">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Trending Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {trendingCategories.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="bg-white border rounded-lg p-3 group hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="h-32 flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="object-contain group-hover:scale-105 transition-transform"
                />
              </div>

              <p className="mt-2 text-center text-sm text-blue-600 group-hover:underline">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
