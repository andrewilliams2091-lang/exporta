export default function CosmeticsPersonalCare() {
  const categories = [
    {
      title: "Body & Personal Care Products",
      link: "https://www.exportersindia.com/indian-manufacturers/body-care.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/13501-595-home.jpg",
      items: [
        ["Body Lotion", "https://www.exportersindia.com/indian-suppliers/body-lotion.htm"],
        ["Hand Sanitizer", "https://www.exportersindia.com/indian-suppliers/hand-sanitizer.htm"],
        ["Hand Wash", "https://www.exportersindia.com/indian-suppliers/liquid-hand-wash.htm"],
        ["Face Wash", "https://www.exportersindia.com/indian-suppliers/face-wash.htm"],
        ["Sanitary Napkins", "https://www.exportersindia.com/indian-suppliers/sanitary-napkins.htm"],
      ],
    },
    {
      title: "Child & Baby Care Products",
      link: "https://www.exportersindia.com/indian-manufacturers/baby-products.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/11996-822-home.jpg",
      items: [
        ["Baby Diapers", "https://www.exportersindia.com/indian-suppliers/baby-diapers.htm"],
        ["Baby Care Products", "https://www.exportersindia.com/indian-suppliers/baby-care-products.htm"],
        ["Baby Powder", "https://www.exportersindia.com/indian-suppliers/baby-powder.htm"],
        ["Baby Bag", "https://www.exportersindia.com/indian-suppliers/baby-bag.htm"],
        ["Baby Bibs", "https://www.exportersindia.com/indian-suppliers/baby-bibs.htm"],
      ],
    },
    {
      title: "Massage Products, Equipment & Spa Devices",
      link: "https://www.exportersindia.com/indian-manufacturers/massage-products.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/13973-268-home.jpeg",
      items: [
        ["Massage Roller", "https://www.exportersindia.com/indian-suppliers/massage-roller.htm"],
        ["Massager", "https://www.exportersindia.com/indian-suppliers/massager.htm"],
        ["Stone Massage Wands", "https://www.exportersindia.com/indian-suppliers/stone-massage-wands.htm"],
        ["Massage Table", "https://www.exportersindia.com/indian-suppliers/massage-table.htm"],
      ],
    },
    {
      title: "Cosmetics, Hair Care & Beauty Products",
      link: "https://www.exportersindia.com/indian-manufacturers/makeup.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/13513-479-home.jpg",
      items: [
        ["Hair Oil", "https://www.exportersindia.com/indian-suppliers/hair-oil.htm"],
        ["Hair Shampoo", "https://www.exportersindia.com/indian-suppliers/hair-shampoo.htm"],
        ["Henna", "https://www.exportersindia.com/indian-suppliers/henna.htm"],
        ["Skin Care Cosmetics", "https://www.exportersindia.com/indian-suppliers/skin-care-cosmetics.htm"],
        ["Cosmetics", "https://www.exportersindia.com/indian-suppliers/cosmetics.htm"],
      ],
    },
    {
      title: "Soaps & Detergents",
      link: "https://www.exportersindia.com/indian-manufacturers/soaps-detergents.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/11961-198-home.jpg",
      items: [
        ["Sodium Sulphate", "https://www.exportersindia.com/indian-suppliers/sodium-sulphate.htm"],
        ["Dishwash Liquid", "https://www.exportersindia.com/indian-suppliers/dishwashing-liquids.htm"],
        ["Liquid Detergent", "https://www.exportersindia.com/indian-suppliers/liquid-detergent.htm"],
      ],
    },
    {
      title: "Fragrances and Perfumes",
      link: "https://www.exportersindia.com/indian-manufacturers/body-fragrances.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/12589-876-home.jpg",
      items: [
        ["Perfume Set", "https://www.exportersindia.com/indian-suppliers/perfume-set.htm"],
        ["Fragrances", "https://www.exportersindia.com/indian-suppliers/fragrances.htm"],
        ["Attar", "https://www.exportersindia.com/indian-suppliers/attar.htm"],
        ["Kewra Water", "https://www.exportersindia.com/indian-suppliers/kewra-water.htm"],
        ["Deodorants", "https://www.exportersindia.com/indian-suppliers/deodorants.htm"],
      ],
    },
  ];

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Cosmetics & Personal Care</h2>
          <a
            href="https://www.exportersindia.com/industry/cosmetics-personal-care.htm"
            className="text-sm text-blue-600 hover:underline"
          >
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Banner */}
          <div className="relative overflow-hidden rounded-lg lg:col-span-1">
            <img
              src="https://dyimg77.exportersindia.com/final_catg_image/354854-950.jpg"
              alt="Cosmetics & Personal Care"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex items-end">
              <div className="p-4 text-white text-sm space-y-2">
                <p>Herbal & Ayurvedic Cosmetics</p>
                <p>Salon & Beauty Equipment</p>
                <p>Body & Personal Care</p>
                <p>Fragrances & Perfumes</p>

                <a
                  href="https://www.exportersindia.com/industry/cosmetics-personal-care.htm"
                  className="inline-block mt-2 bg-red-600 text-white text-xs px-4 py-2 rounded"
                >
                  View All
                </a>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 flex flex-col justify-between hover:shadow-md transition bg-white"
              >
                <div>
                  <a
                    href={cat.link}
                    className="font-semibold text-sm mb-2 flex justify-between hover:text-blue-600"
                  >
                    {cat.title}
                    <span>→</span>
                  </a>

                  <ul className="space-y-1 text-sm text-blue-600">
                    {cat.items.map(([label, url], i) => (
                      <li key={i}>
                        <a href={url} className="hover:underline">
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3 overflow-hidden rounded">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-[90px] object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
