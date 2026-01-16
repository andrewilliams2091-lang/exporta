export default function FoodBeverages() {
  const categories = [
    {
      title: "Dry Fruits & Nuts",
      link: "https://www.exportersindia.com/indian-manufacturers/dry-fruits.htm",
      image:
        "https://dyimg77.exportersindia.com/final_catg_image/10069-954-home.jpg",
      items: [
        ["Almond", "https://www.exportersindia.com/indian-suppliers/almonds.htm"],
        [
          "Dehydrated Fruits",
          "https://www.exportersindia.com/indian-suppliers/dehydrated-fruits.htm",
        ],
        [
          "Cashew Nuts",
          "https://www.exportersindia.com/indian-suppliers/cashew-nuts.htm",
        ],
        [
          "Edible Nuts",
          "https://www.exportersindia.com/indian-suppliers/edible-nuts.htm",
        ],
        [
          "Cashew Nuts W400",
          "https://www.exportersindia.com/indian-suppliers/cashew-nuts-w400.htm",
        ],
      ],
    },
    {
      title: "Tea & Coffee",
      link: "https://www.exportersindia.com/indian-manufacturers/tea-coffee.htm",
      image:
        "https://dyimg77.exportersindia.com/final_catg_image/10031-643-home.jpg",
      items: [
        ["Tea", "https://www.exportersindia.com/indian-suppliers/tea.htm"],
        ["Coffee", "https://www.exportersindia.com/indian-suppliers/coffee.htm"],
        [
          "Instant Coffee",
          "https://www.exportersindia.com/indian-suppliers/instant-coffee.htm",
        ],
        [
          "Green Tea",
          "https://www.exportersindia.com/indian-suppliers/green-tea.htm",
        ],
        [
          "Herbal Tea",
          "https://www.exportersindia.com/indian-suppliers/herbal-tea.htm",
        ],
      ],
    },
    {
      title: "Food Grains & Cereals",
      link: "https://www.exportersindia.com/indian-manufacturers/f-grains.htm",
      image:
        "https://dyimg77.exportersindia.com/final_catg_image/10060-913-home.jpg",
      items: [
        ["Flours", "https://www.exportersindia.com/indian-suppliers/flours.htm"],
        [
          "Basmati Rice",
          "https://www.exportersindia.com/indian-suppliers/basmati-rice.htm",
        ],
        [
          "Pulses",
          "https://www.exportersindia.com/indian-suppliers/pulses.htm",
        ],
        [
          "Non Basmati Rice",
          "https://www.exportersindia.com/indian-suppliers/non-basmati-rice.htm",
        ],
        [
          "Broken Rice",
          "https://www.exportersindia.com/indian-suppliers/broken-rice.htm",
        ],
      ],
    },
    {
      title: "Cooking Spices and Masala",
      link: "https://www.exportersindia.com/indian-manufacturers/spices.htm",
      image:
        "https://dyimg77.exportersindia.com/final_catg_image/13950-481-home.jpg",
      items: [
        [
          "Curry Leaves",
          "https://www.exportersindia.com/indian-suppliers/curry-leaves.htm",
        ],
        [
          "Turmeric Powder",
          "https://www.exportersindia.com/indian-suppliers/turmeric-powder.htm",
        ],
        [
          "Green Cardamom",
          "https://www.exportersindia.com/indian-suppliers/elaichi.htm",
        ],
        [
          "Coriander Seeds",
          "https://www.exportersindia.com/indian-suppliers/coriander-seeds.htm",
        ],
        [
          "Beet Root Powder",
          "https://www.exportersindia.com/indian-suppliers/beet-root-powder.htm",
        ],
      ],
    },
    {
      title: "Dairy & Milk Products",
      link:
        "https://www.exportersindia.com/indian-manufacturers/milk-dairy-products.htm",
      image:
        "https://dyimg77.exportersindia.com/final_catg_image/11029-60-home.jpg",
      items: [
        [
          "Cow Ghee",
          "https://www.exportersindia.com/indian-suppliers/cow-ghee.htm",
        ],
        [
          "Milk Powder",
          "https://www.exportersindia.com/indian-suppliers/milk-powder.htm",
        ],
        [
          "Paneer",
          "https://www.exportersindia.com/indian-suppliers/paneer.htm",
        ],
        ["Milk", "https://www.exportersindia.com/indian-suppliers/milk.htm"],
        [
          "Skimmed Milk Powder",
          "https://www.exportersindia.com/indian-suppliers/skim-milk-powder.htm",
        ],
      ],
    },
    {
      title: "Food Additives & Ingredients",
      link:
        "https://www.exportersindia.com/indian-manufacturers/food-additives.htm",
      image:
        "https://dyimg77.exportersindia.com/final_catg_image/11002-72-home.jpg",
      items: [
        [
          "Acetic Acid",
          "https://www.exportersindia.com/indian-suppliers/acetic-acid.htm",
        ],
        [
          "Cocoa Powder",
          "https://www.exportersindia.com/indian-suppliers/cocoa-powder.htm",
        ],
        [
          "Food Preservative",
          "https://www.exportersindia.com/indian-suppliers/food-preservative.htm",
        ],
        [
          "Mint Powder",
          "https://www.exportersindia.com/indian-suppliers/mint-powder.htm",
        ],
        [
          "Lemon Powder",
          "https://www.exportersindia.com/indian-suppliers/lemon-powder.htm",
        ],
      ],
    },
  ];

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Food Products &amp; Beverages
          </h2>
          <a
            href="https://www.exportersindia.com/industry/food-beverages.htm"
            className="text-sm text-blue-600 hover:underline flex items-center gap-2"
          >
            View All →
          </a>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Banner */}
          <div className="relative overflow-hidden rounded-lg lg:col-span-1">
            <img
              src="https://dyimg77.exportersindia.com/final_catg_image/10988-989.jpg"
              alt="Food Products & Beverages"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex items-end">
              <div className="p-4 text-white text-sm space-y-2">
                <p>Fresh, Dried &amp; Preserved Vegetables</p>
                <p>Juices, Soft Drinks, Soups &amp; Mineral Water</p>
                <p>Confectionery &amp; Bakery Products</p>
                <p>Fresh, Dried &amp; Preserved Fruits</p>

                <a
                  href="https://www.exportersindia.com/industry/food-beverages.htm"
                  className="inline-block mt-2 bg-red-600 text-white text-xs px-4 py-2 rounded"
                >
                  View All
                </a>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 flex flex-col justify-between hover:shadow-md transition bg-white"
              >
                <div>
                  <a
                    href={cat.link}
                    className="font-semibold text-sm mb-2 inline-flex justify-between w-full hover:text-blue-600"
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
