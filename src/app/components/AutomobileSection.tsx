/* eslint-disable @next/next/no-img-element */
"use client";

const automobileCards = [
  {
    title: "Brakes & Braking Systems",
    href: "https://www.exportersindia.com/indian-manufacturers/brake-system.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/356374-152-home.jpeg",
    links: [
      { label: "Brake Shoe", href: "#" },
      { label: "Thrustor Brake", href: "#" },
      { label: "Brake Drum", href: "#" },
      { label: "Brake Pads", href: "#" },
      { label: "Wheel Cylinder", href: "#" },
    ],
  },
  {
    title: "Auto Interior Accessories",
    href: "https://www.exportersindia.com/indian-manufacturers/interior-accessories.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/12741-693-home.jpg",
    links: [
      { label: "Driving Helmets", href: "#" },
      { label: "Car Shampoo", href: "#" },
      { label: "Car Covers", href: "#" },
      { label: "Mud Flap", href: "#" },
      { label: "Vehicle Horn", href: "#" },
    ],
  },
  {
    title: "Piston and Crankshaft Assemblies",
    href: "https://www.exportersindia.com/indian-manufacturers/piston-crankshaft.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/356699-77-home.jpg",
    links: [
      { label: "Crankshafts", href: "#" },
      { label: "Piston Rings", href: "#" },
      { label: "Camshafts", href: "#" },
      { label: "Cylinder Liners", href: "#" },
      { label: "Cylinder Head", href: "#" },
    ],
  },
  {
    title: "Clutches, Clutch Parts & Accessories",
    href: "https://www.exportersindia.com/indian-manufacturers/clutch-parts-accessories.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/356661-502-home.jpg",
    links: [
      { label: "Clutch Plates", href: "#" },
      { label: "Clutch Assembly", href: "#" },
      { label: "Clutch Kit", href: "#" },
      { label: "Pressure Plates", href: "#" },
      { label: "Clutch Cover", href: "#" },
    ],
  },
  {
    title: "Automobile Components & Fittings",
    href: "https://www.exportersindia.com/indian-manufacturers/auto-fittings.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/356350-468-home.jpg",
    links: [
      { label: "Automotive Spare Parts", href: "#" },
      { label: "Truck Axles", href: "#" },
      { label: "Brass Auto Parts", href: "#" },
      { label: "Two Wheeler Spare Parts", href: "#" },
      { label: "Bike Spare Parts", href: "#" },
    ],
  },
  {
    title: "Automobile Repair Tools & Equipment",
    href: "https://www.exportersindia.com/indian-manufacturers/auto-repair-tools.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/356368-789-home.jpg",
    links: [
      { label: "Tyres Machinery", href: "#" },
      { label: "Frame Machine", href: "#" },
      { label: "Wheel Chocks", href: "#" },
      { label: "Wheel Hubs", href: "#" },
      { label: "Auto Repair Equipment", href: "#" },
    ],
  },
];

export default function AutomobileSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            <a href="https://www.exportersindia.com/industry/automobile.htm">
              Automobile
            </a>
          </h2>

          <a
            href="https://www.exportersindia.com/industry/automobile.htm"
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
              src="https://dyimg77.exportersindia.com/final_catg_image/10193-679.jpg"
              alt="Automobile"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/55 p-5 text-white">
              <ul className="space-y-2 text-sm">
                <li>Engine & Engine Parts</li>
                <li>Auto Electrical Parts & Components</li>
                <li>Automotive Body Coach Building</li>
                <li>Fuel Injection System & Assemblies</li>
              </ul>

              <a
                href="https://www.exportersindia.com/industry/automobile.htm"
                className="mt-4 inline-block text-sm font-semibold underline"
              >
                View All
              </a>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {automobileCards.map((item, index) => (
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
