/* eslint-disable @next/next/no-img-element */
"use client";

const sportsCards = [
  {
    title: "Gymnastics, Sports Equipment & Goods",
    href: "https://www.exportersindia.com/indian-manufacturers/sports-equipment.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/13896-365-home.jpg",
    links: [
      { label: "Cricket Equipment", href: "#" },
      { label: "Boxing Accessories", href: "#" },
      { label: "Footballs", href: "#" },
    ],
  },
  {
    title: "Sports Shoes, Footwear & Accessories",
    href: "https://www.exportersindia.com/indian-manufacturers/sports-shoe.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/356123-618-home.jpg",
    links: [
      { label: "Sports Shoes", href: "#" },
      { label: "Running Shoes", href: "#" },
      { label: "Tennis Shoes", href: "#" },
    ],
  },
  {
    title: "Sports Wear & Accessories",
    href: "https://www.exportersindia.com/indian-manufacturers/sportswear-accessories.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/12750-775-home.jpg",
    links: [
      { label: "Sports Uniform", href: "#" },
      { label: "Tracksuits", href: "#" },
      { label: "Boxing Shorts", href: "#" },
    ],
  },
  {
    title: "Sports and Duffle Bags",
    href: "https://www.exportersindia.com/indian-manufacturers/sports-kit-bags.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/310367-454-home.jpg",
    links: [
      { label: "Gym Bags", href: "#" },
      { label: "Kit Bags", href: "#" },
      { label: "Duffle Bag", href: "#" },
    ],
  },
  {
    title: "Swimming Pool & Water Sporting Goods",
    href: "https://www.exportersindia.com/indian-manufacturers/water-sporting-goods.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/78251-891-home.jpg",
    links: [
      { label: "Swimming Pool Goods", href: "#" },
      { label: "Water Tubes", href: "#" },
      { label: "Speed Boats", href: "#" },
    ],
  },
  {
    title: "Camping, Fishing & Hunting Equipment",
    href: "https://www.exportersindia.com/indian-manufacturers/camping.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/11639-20-home.jpg",
    links: [
      { label: "Fishing Nets", href: "#" },
      { label: "Camping Equipment", href: "#" },
      { label: "Fishing Line", href: "#" },
    ],
  },
];

export default function SportsEntertainmentSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            <a href="https://www.exportersindia.com/industry/sports-entertainment.htm">
              Sports Goods and Entertainment
            </a>
          </h2>

          <a
            href="https://www.exportersindia.com/industry/sports-entertainment.htm"
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
          >
            View All →
          </a>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          {/* Left Banner */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://dyimg77.exportersindia.com/final_catg_image/11636-852.jpg"
              alt="Sports Goods and Entertainment"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/55 p-5 text-white">
              <ul className="space-y-2 text-sm">
                <li>Exercise Machines & Equipment</li>
                <li>Dumbbells & Accessories</li>
                <li>Board Games & Table Sports</li>
                <li>Fitness & Exercise Goods</li>
              </ul>

              <a
                href="https://www.exportersindia.com/industry/sports-entertainment.htm"
                className="mt-4 inline-block text-sm font-semibold underline"
              >
                View All
              </a>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {sportsCards.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-lg border border-gray-200 p-4 transition hover:shadow-md"
              >
                <a
                  href={item.href}
                  className="mb-2 block text-sm font-semibold text-gray-900 group-hover:text-blue-600"
                >
                  {item.title}
                </a>

                <ul className="mb-3 space-y-1 text-xs text-gray-600">
                  {item.links.map((link, i) => (
                    <li key={i} className="hover:text-blue-600">
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>

                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute bottom-3 right-3 h-16 w-16 object-contain transition-transform group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
