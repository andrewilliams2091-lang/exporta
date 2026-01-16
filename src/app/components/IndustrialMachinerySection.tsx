/* eslint-disable @next/next/no-img-element */
"use client";

const machineryCards = [
  {
    title: "Food Processing Machines & Plants",
    href: "https://www.exportersindia.com/indian-manufacturers/food-process-plants.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/14164-834-home.jpg",
    links: [
      { label: "Chapati Making Machine", href: "#" },
      { label: "Gravy Machine", href: "#" },
      { label: "Appalam Machine", href: "#" },
    ],
  },
  {
    title: "Grinding & Milling Tools & Machinery",
    href: "https://www.exportersindia.com/indian-manufacturers/grinding-machinery.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/13485-619-home.jpg",
    links: [
      { label: "Pulverizers", href: "#" },
      { label: "Ball Mill", href: "#" },
      { label: "Disintegrator", href: "#" },
    ],
  },
  {
    title: "Oil Mill & Extraction Machinery",
    href: "https://www.exportersindia.com/indian-manufacturers/oil-processing-machines.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/14180-301-home.jpg",
    links: [
      { label: "Oil Production Plant", href: "#" },
      { label: "Oil Extraction Machine", href: "#" },
      { label: "Oil Mill Machinery", href: "#" },
    ],
  },
  {
    title: "Material Handling Machines & Systems",
    href: "https://www.exportersindia.com/indian-manufacturers/material-handling-machines-systems.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/310355-552-home.jpg",
    links: [
      { label: "Material Handling Equipments", href: "#" },
      { label: "Hydraulic Truck Unloader", href: "#" },
      { label: "Hand Pallet Truck", href: "#" },
    ],
  },
  {
    title: "Cutting Machines & Equipment",
    href: "https://www.exportersindia.com/indian-manufacturers/metal-cutting.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/13334-542-home.jpg",
    links: [
      { label: "Cutting Machine", href: "#" },
      { label: "Plasma Cutting Machine", href: "#" },
      { label: "Cut Off Machine", href: "#" },
    ],
  },
  {
    title: "Water Treatment & Purification Plant",
    href: "https://www.exportersindia.com/indian-manufacturers/water-treatment-system.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/13840-103-home.jpg",
    links: [
      { label: "Water Treatment Plant", href: "#" },
      { label: "Water Softener", href: "#" },
      { label: "Industrial RO Plant", href: "#" },
    ],
  },
];

export default function IndustrialMachinerySection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            <a href="https://www.exportersindia.com/industry/machines.htm">
              Industrial Machinery
            </a>
          </h2>

          <a
            href="https://www.exportersindia.com/industry/machines.htm"
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
          >
            View All →
          </a>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          {/* Left Banner */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://dyimg77.exportersindia.com/final_catg_image/12112-25.jpg"
              alt="Industrial Machinery"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/55 p-5 text-white">
              <ul className="space-y-2 text-sm">
                <li>Machines and Equipments</li>
                <li>Conveyors System & Components</li>
                <li>Pollution Control Machines</li>
                <li>Industrial Ovens & Furnaces</li>
              </ul>

              <a
                href="https://www.exportersindia.com/industry/machines.htm"
                className="mt-4 inline-block text-sm font-semibold underline"
              >
                View All
              </a>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {machineryCards.map((item, idx) => (
              <div
                key={idx}
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
