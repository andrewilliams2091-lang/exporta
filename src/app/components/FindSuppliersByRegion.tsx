"use client";

import Image from "next/image";

const cities = [
  { name: "New Delhi", link: "https://www.exportersindia.com/delhi/", image: "https://static.exportersindia.com/mobile-images/fsbr-delhi.jpg" },
  { name: "Mumbai", link: "https://www.exportersindia.com/mumbai/", image: "https://static.exportersindia.com/mobile-images/fsbr-mumbai.jpg" },
  { name: "Gurgaon", link: "https://www.exportersindia.com/gurgaon/", image: "https://static.exportersindia.com/mobile-images/fsbr-gurgaon.jpg" },
  { name: "Noida", link: "https://www.exportersindia.com/noida/", image: "https://static.exportersindia.com/mobile-images/fsbr-noida.jpg" },
  { name: "Bangalore", link: "https://www.exportersindia.com/bangalore/", image: "https://static.exportersindia.com/mobile-images/fsbr-bangalore.jpg" },
  { name: "Ahmedabad", link: "https://www.exportersindia.com/ahmedabad/", image: "https://static.exportersindia.com/mobile-images/fsbr-ahmedabad.jpg" },
  { name: "Kolkata", link: "https://www.exportersindia.com/kolkata/", image: "https://static.exportersindia.com/mobile-images/fsbr-kolkata.jpg" },
  { name: "Chennai", link: "https://www.exportersindia.com/chennai/", image: "https://static.exportersindia.com/mobile-images/fsbr-chennai.jpg" },
  { name: "More Cities", link: "https://www.exportersindia.com/city-business-directory.htm", image: "https://static.exportersindia.com/mobile-images/more_cities.jpg" },
];

export default function FindSuppliersByRegion() {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Title */}
        <h2 className="text-[18px] font-semibold text-gray-900 mb-4">
          Find Suppliers by Region
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-[14px]">
          {cities.map((city) => (
            <a
              key={city.name}
              href={city.link}
              className="border border-gray-200 bg-white rounded-sm hover:border-red-500 hover:shadow-sm transition flex flex-col items-center justify-center py-5 px-2 cursor-pointer"
            >
              <div className="w-[56px] h-[56px] flex items-center justify-center mb-3">
                <Image
                  src={city.image}
                  alt={city.name}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              <span className="text-[13px] text-gray-800 text-center leading-tight">
                {city.name}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
