/* eslint-disable @next/next/no-img-element */
"use client";

const countries = [
  {
    name: "India",
    href: "https://www.exportersindia.com/industry/",
    flag: "https://static.exportersindia.com/mobile-images/flag-image/in.jpg",
  },
  {
    name: "UAE",
    href: "https://www.exportersindia.com/ae/",
    flag: "https://static.exportersindia.com/mobile-images/flag-image/ae.jpg",
  },
  {
    name: "USA",
    href: "https://www.exportersindia.com/us/",
    flag: "https://static.exportersindia.com/mobile-images/flag-image/us.jpg",
  },
  {
    name: "Canada",
    href: "https://www.exportersindia.com/ca/",
    flag: "https://static.exportersindia.com/mobile-images/flag-image/ca.jpg",
  },
  {
    name: "Malaysia",
    href: "https://www.exportersindia.com/my/",
    flag: "https://static.exportersindia.com/mobile-images/flag-image/my.jpg",
  },
  {
    name: "Singapore",
    href: "https://www.exportersindia.com/sg/",
    flag: "https://static.exportersindia.com/mobile-images/flag-image/sg.jpg",
  },
  {
    name: "Saudi Arabia",
    href: "https://www.exportersindia.com/sa/",
    flag: "https://static.exportersindia.com/mobile-images/flag-image/sa.jpg",
  },
  {
    name: "Australia",
    href: "https://www.exportersindia.com/au/",
    flag: "https://static.exportersindia.com/mobile-images/flag-image/au.jpg",
  },
];

export default function FindSuppliersByCountry() {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <h2 className="mb-6 text-xl font-semibold text-gray-900">
          Find Suppliers by Country
        </h2>

        {/* Countries */}
        <ul className="flex flex-wrap items-start gap-x-10 gap-y-6">
          {countries.map((country) => (
            <li key={country.name}>
              <a
                href={country.href}
                title={country.name}
                className="flex flex-col items-center text-center group"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white transition group-hover:shadow-md">
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="h-[45px] w-[70px] object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 text-sm text-gray-700">
                  {country.name}
                </span>
              </a>
            </li>
          ))}

          {/* More Countries */}
          <li>
            <a
              href="https://www.exportersindia.com/b2b-marketplace.htm"
              className="flex flex-col items-center text-center group"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white transition group-hover:shadow-md">
                <img
                  src="https://static.exportersindia.com/mobile-images/more-country.jpg"
                  alt="More Countries"
                  className="h-[12px] w-[48px] object-contain"
                  loading="lazy"
                />
              </div>
              <span className="mt-2 text-sm text-gray-700">
                More Countries
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
