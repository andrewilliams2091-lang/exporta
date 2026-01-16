"use client";
import Image from "next/image";

const bannerLinks = [
  { name: "Food Storage Containers & Boxes", url: "https://www.exportersindia.com/indian-manufacturers/containers-boxes.htm" },
  { name: "Briefcases, Portfolio & Laptop Bags", url: "https://www.exportersindia.com/indian-manufacturers/bags.htm" },
  { name: "Flower Pots, Garden & Wall Planters", url: "https://www.exportersindia.com/indian-manufacturers/pots-planters.htm" },
  { name: "Coffee Mugs, Teapot & Tea Sets", url: "https://www.exportersindia.com/indian-manufacturers/teapot-tea-sets.htm" },
];

const categories = [
  {
    title: "Dinnerware, Tableware and Serving Utensils",
    url: "https://www.exportersindia.com/indian-manufacturers/dinnerware-tableware.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/12663-107-home.jpg",
    items: ["Stainless Steel Serving Utensils", "Dinnerware", "Copper Pot", "Steel Trays", "Cake Stand"],
  },
  {
    title: "Cleaning Wipes & Liquids",
    url: "https://www.exportersindia.com/indian-manufacturers/cleaning-products.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/355286-664-home.jpg",
    items: ["Liquid Cleaner", "Hydrogen Peroxide", "Floor Cleaner", "Bathroom Cleaner"],
  },
  {
    title: "Kitchenware and Cookware",
    url: "https://www.exportersindia.com/indian-manufacturers/kitchenware.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/13155-378-home.jpg",
    items: ["Cauldron", "Saucepan", "Kitchen Utensil", "Chapati Tawa", "Dosa Plate"],
  },
  {
    title: "Incense, Incensory & Pooja Articles",
    url: "https://www.exportersindia.com/indian-manufacturers/incense-incensory.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/12656-920-home.jpg",
    items: ["Incense Sticks", "Raw Incense Stick", "Rose Incense Sticks", "Dhoop Sticks", "Cotton Wicks"],
  },
  {
    title: "Buckets, Mugs & Storage Bins",
    url: "https://www.exportersindia.com/indian-manufacturers/buckets-mugs-storage-bins.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/310442-2-home.jpg",
    items: ["Storage Basket", "Steel Basket", "Plastic Buckets", "Steel Buckets", "Steel Dustbin"],
  },
  {
    title: "Soaps & Detergents",
    url: "https://www.exportersindia.com/indian-manufacturers/soaps-detergents.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/11961-198-home.jpg",
    items: ["Sodium Sulphate", "Dishwash Liquid", "Liquid Detergent"],
  },
];

export default function HomeSuppliesSection() {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[18px] font-semibold text-gray-900">Home Supplies</h2>
          <a href="https://www.exportersindia.com/industry/home-supplies.htm" className="text-sm text-blue-600 hover:underline">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">

          {/* LEFT BANNER */}
          <div className="relative h-[420px] rounded overflow-hidden">
            <Image
              src="https://dyimg77.exportersindia.com/final_catg_image/11948-574.jpg"
              alt="Home Supplies"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-between">
              <ul className="space-y-2 text-sm text-white">
                {bannerLinks.map((b) => (
                  <li key={b.name}>
                    <a href={b.url} className="hover:underline">{b.name}</a>
                  </li>
                ))}
              </ul>

              <a
                href="https://www.exportersindia.com/industry/home-supplies.htm"
                className="bg-white text-gray-900 text-sm font-medium py-2 text-center rounded"
              >
                View All
              </a>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <div key={cat.title} className="border border-gray-200 rounded p-3 hover:shadow-sm transition">
                <div className="flex justify-between items-start mb-2">
                  <a href={cat.url} className="text-[13px] font-semibold text-gray-900 leading-tight hover:text-blue-600">
                    {cat.title}
                  </a>
                  <img src="https://static.exportersindia.com/ei_images/arrow-right.svg" className="w-4 h-4" />
                </div>

                <div className="flex gap-3">
                  <ul className="text-[12px] text-gray-600 space-y-1 flex-1">
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="w-[70px] h-[70px] flex-shrink-0">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
