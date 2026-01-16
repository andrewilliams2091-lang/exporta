/* eslint-disable @next/next/no-img-element */
"use client";

const constructionCards = [
  {
    title: "Prefabricated & Portable Buildings",
    href: "https://www.exportersindia.com/indian-manufacturers/prefab-portable-building.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/78869-562-home.jpg",
    links: [
      { label: "Office Container", href: "#" },
      { label: "Portable Cabins", href: "#" },
      { label: "Mobile Cabins", href: "#" },
    ],
  },
  {
    title: "Hardware Fittings and Accessories",
    href: "https://www.exportersindia.com/indian-manufacturers/hardware-fittings-ei.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/78435-47-home.jpg",
    links: [
      { label: "Steel Angles", href: "#" },
      { label: "MS Channel", href: "#" },
      { label: "Ferrules", href: "#" },
    ],
  },
  {
    title: "Door, Window, Handles & Fittings",
    href: "https://www.exportersindia.com/indian-manufacturers/door-window-fittings.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/355178-748-home.jpg",
    links: [
      { label: "Door Handles", href: "#" },
      { label: "Brass Handles", href: "#" },
      { label: "Door Knob", href: "#" },
    ],
  },
  {
    title: "Paints, Varnishes & Wall Putty",
    href: "https://www.exportersindia.com/indian-manufacturers/paints-and-varnishes.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/355183-428-home.jpg",
    links: [
      { label: "Paints", href: "#" },
      { label: "Primer Paint", href: "#" },
      { label: "Wall Putty", href: "#" },
    ],
  },
  {
    title: "Sanitary Ware & Fittings",
    href: "https://www.exportersindia.com/indian-manufacturers/sanitary-ware-fittings.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/13995-105-home.jpg",
    links: [
      { label: "Bathroom Sanitary Ware", href: "#" },
      { label: "Water Closet", href: "#" },
      { label: "Kitchen Sink", href: "#" },
    ],
  },
  {
    title: "Pipe & Tube Fittings",
    href: "https://www.exportersindia.com/indian-manufacturers/pipe-tube-fittings.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/10689-243-home.jpg",
    links: [
      { label: "Industrial Coupler", href: "#" },
      { label: "Quick Couplings", href: "#" },
      { label: "Forged Steel Fittings", href: "#" },
    ],
  },
];

export default function RealEstateConstructionSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            <a href="https://www.exportersindia.com/industry/realestate-construction.htm">
              Realestate, Building & Construction
            </a>
          </h2>

          <a
            href="https://www.exportersindia.com/industry/realestate-construction.htm"
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
              src="https://dyimg77.exportersindia.com/final_catg_image/10660-914.jpg"
              alt="Realestate, Building & Construction"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/55 p-5 text-white">
              <ul className="space-y-2 text-sm">
                <li>Wood and Lumber</li>
                <li>Cladding Materials & Panels</li>
                <li>Bricks & Construction Materials</li>
                <li>PVC, HDPE & Plastic Pipes</li>
              </ul>

              <a
                href="https://www.exportersindia.com/industry/realestate-construction.htm"
                className="mt-4 inline-block text-sm font-semibold underline"
              >
                View All
              </a>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {constructionCards.map((item, index) => (
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
