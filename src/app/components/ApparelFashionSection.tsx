"use client";

const bannerLinks = [
  {
    label: "Bags, Pouches, Card Holder & Cases",
    href: "https://www.exportersindia.com/indian-manufacturers/multiutility-bags.htm",
  },
  {
    label: "Sarees & Lehenga",
    href: "https://www.exportersindia.com/indian-manufacturers/sarees-lehenga.htm",
  },
  {
    label: "Men Shirts, Jeans & Clothing",
    href: "https://www.exportersindia.com/indian-manufacturers/mens-clothing.htm",
  },
  {
    label: "Designer & Fashion Bags",
    href: "https://www.exportersindia.com/indian-manufacturers/designer-fashion-bags.htm",
  },
];

const categories = [
  {
    title: "Winter Clothing & Accessories",
    href: "https://www.exportersindia.com/indian-manufacturers/winter-clothing.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/12793-389-home.jpeg",
    links: [
      "Winter Jackets",
      "Sweater",
      "Sweatshirt",
      "Cardigans",
      "Winter Hoodies",
    ],
  },
  {
    title: "Ladies Dresses, Apparels & Clothings",
    href: "https://www.exportersindia.com/indian-manufacturers/womens-clothing.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/10189-957-home.jpg",
    links: [
      "Ladies Woolen Kurti",
      "Ladies Jackets",
      "Palazzo Suit",
      "Women Wear",
      "Ladies Tops",
    ],
  },
  {
    title: "Unisex Clothing",
    href: "https://www.exportersindia.com/indian-manufacturers/unisex-clothings.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/353918-148-home.jpg",
    links: [
      "Winter Coat",
      "Knitted Garment",
      "Overcoats",
      "ZIP Hoodie",
      "Casual Shirts",
    ],
  },
  {
    title: "Scarves, Stoles, Shawls and Bandanas",
    href: "https://www.exportersindia.com/indian-manufacturers/scarves-stoles.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/355993-404-home.jpg",
    links: ["Scarves", "Stoles", "Wool Scarf"],
  },
  {
    title: "Apparel Fabrics & Dress Materials",
    href: "https://www.exportersindia.com/indian-manufacturers/te-fabrics.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/12606-570-home.jpg",
    links: [
      "Fabric",
      "Knitted Fabrics",
      "Synthetic Fabrics",
      "Natural Fabrics",
      "Dress Materials",
    ],
  },
  {
    title: "Badges, Emblems & Lanyards",
    href: "https://www.exportersindia.com/indian-manufacturers/emblems-badges.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/344781-844-home.jpg",
    links: [
      "Elastic Ribbon",
      "Lanyards",
      "Emblems",
      "Cloth Patches",
      "Polyester Ribbon",
    ],
  },
];

export default function ApparelFashionSection() {
  return (
    <section id="fashion-apparel" className="py-12 bg-white">
      <div className="max-w-[1275px] mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-black">
            <a href="https://www.exportersindia.com/industry/fashion-apparel.htm">
              Apparel & Fashion
            </a>
          </h2>

          <a
            href="https://www.exportersindia.com/industry/fashion-apparel.htm"
            className="text-sm font-medium text-blue-600 flex items-center gap-2 hover:underline"
          >
            View All
            <svg
              className="w-4 h-4"
              viewBox="4 9.28 23.91 13.44"
              fill="currentColor"
            >
              <path d="M21.188 9.281 19.78 10.72 24.063 15H4v2h20.063l-4.282 4.281 1.407 1.438L27.905 16Z" />
            </svg>
          </a>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
          {/* Left Banner */}
          <div className="relative rounded overflow-hidden">
            <img
              src="https://dyimg77.exportersindia.com/final_catg_image/10086-968.jpg"
              alt="Apparel & Fashion"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50 p-5 flex flex-col justify-between">
              <ul className="space-y-2 text-sm text-white">
                {bannerLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="https://www.exportersindia.com/industry/fashion-apparel.htm"
                className="mt-4 inline-block text-sm font-medium text-white underline"
              >
                View All
              </a>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="border border-gray-200 bg-white p-4 relative group"
              >
                <h3 className="text-sm font-semibold mb-2 leading-snug">
                  <a href={cat.href} className="hover:text-blue-600">
                    {cat.title}
                  </a>
                </h3>

                <ul className="text-sm text-gray-600 space-y-1 mb-3">
                  {cat.links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>

                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-20 h-20 object-cover absolute bottom-4 right-4"
                />

                <a
                  href={cat.href}
                  className="absolute bottom-4 left-4 text-blue-600 text-sm font-medium"
                >
                  →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
