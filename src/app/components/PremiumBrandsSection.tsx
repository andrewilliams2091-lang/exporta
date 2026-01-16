/* eslint-disable @next/next/no-img-element */
"use client";

const premiumBrands = [
  {
    name: "Salzer Electronics Limited",
    href: "https://www.exportersindia.com/salzerelectronics/",
    logo: "https://dyimg77.exportersindia.com/premium_logo/109162.jpg",
  },
  {
    name: "Ramsons Industries",
    href: "https://www.exportersindia.com/ramsons-industries-mathura/",
    logo: "https://dyimg77.exportersindia.com/premium_logo/5708435.jpg",
  },
  {
    name: "Link Locks Pvt. Ltd.",
    href: "https://www.exportersindia.com/link-locks-pvt-ltd/",
    logo: "https://dyimg77.exportersindia.com/premium_logo/13239319.jpg",
  },
  {
    name: "Bakewell Biscuits Pvt. Ltd.",
    href: "https://www.exportersindia.com/bakewellbiscuits/",
    logo: "https://dyimg77.exportersindia.com/premium_logo/384373.jpg",
  },
  {
    name: "TATA Steel Limited",
    href: "https://www.exportersindia.com/tatasteel-jajpur-odisha/",
    logo: "https://dyimg77.exportersindia.com/premium_logo/12597708.jpg",
  },
  {
    name: "Bodycare Creations Ltd.",
    href: "https://www.exportersindia.com/bodycare-creations/",
    logo: "https://dyimg77.exportersindia.com/premium_logo/306069.jpg",
  },
  {
    name: "Star Impact Pvt. Ltd.",
    href: "https://www.exportersindia.com/star-impact/",
    logo: "https://dyimg77.exportersindia.com/premium_logo/4239573.jpg",
  },
  {
    name: "Naulakha Surfactants",
    href: "https://www.exportersindia.com/naulakha-surfactants/",
    logo: "https://dyimg77.exportersindia.com/premium_logo/26114.jpg",
  },
  {
    name: "Victory Electric Vehicles International Limited",
    href: "https://www.exportersindia.com/victory-electric-vehicles-international/",
    logo: "https://dyimg77.exportersindia.com/premium_logo/1779004.jpg",
  },
  {
    name: "Nilkamal Limited",
    href: "https://www.exportersindia.com/nilkamal-ltd/",
    logo: "https://dyimg77.exportersindia.com/premium_logo/373397.jpg",
  },
  {
    name: "Sheela Foam Ltd.",
    href: "https://www.exportersindia.com/sheela-foam-ltd/",
    logo: "https://dyimg77.exportersindia.com/premium_logo/5362606.jpg",
  },
  {
    name: "Jindal Textile Industries Private Limited",
    href: "https://www.exportersindia.com/jindal-woollen/",
    logo: "https://dyimg77.exportersindia.com/premium_logo/1805714.jpg",
  },
];

export default function PremiumBrandsSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <h2 className="mb-6 text-xl font-semibold text-gray-900">
          Associated <span className="text-blue-600">Premium Brands</span>
        </h2>

        {/* Brands Grid */}
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {premiumBrands.map((brand, index) => (
            <li key={index}>
              <a
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[110px] items-center justify-center rounded border border-gray-200 bg-white p-4 transition hover:shadow-md"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
