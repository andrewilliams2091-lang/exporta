export default function HomeFurnishings() {
  const categories = [
    {
      title: "Blankets & Quilts",
      link: "https://www.exportersindia.com/indian-manufacturers/blankets.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/13768-837-home.jpg",
      items: [
        ["Blankets", "https://www.exportersindia.com/indian-suppliers/blanket.htm"],
        ["Quilts", "https://www.exportersindia.com/indian-suppliers/quilts.htm"],
        ["Dohar Set", "https://www.exportersindia.com/indian-suppliers/dohar-set.htm"],
        ["Thermal Blankets", "https://www.exportersindia.com/indian-suppliers/thermal-blankets.htm"],
        ["Woollen Blanket", "https://www.exportersindia.com/indian-suppliers/woollen-blanket.htm"],
      ],
    },
    {
      title: "Bed Linen & Bedspreads",
      link: "https://www.exportersindia.com/indian-manufacturers/bedroom-furnishing.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/13763-136-home.jpg",
      items: [
        ["Duvets & Comforters", "https://www.exportersindia.com/indian-suppliers/duvets.htm"],
        ["Comforter Set", "https://www.exportersindia.com/indian-suppliers/comforter-set.htm"],
        ["Bed Comforters", "https://www.exportersindia.com/indian-suppliers/bed-comforters.htm"],
        ["Duvet Covers", "https://www.exportersindia.com/indian-suppliers/duvet-covers.htm"],
        ["Bed Covers", "https://www.exportersindia.com/indian-suppliers/bed-covers.htm"],
      ],
    },
    {
      title: "Carpets and Rugs",
      link: "https://www.exportersindia.com/indian-manufacturers/carpets-rugs.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/13757-968-home.jpg",
      items: [
        ["Wool Rugs", "https://www.exportersindia.com/indian-suppliers/wool-rugs.htm"],
        ["Wool Carpets", "https://www.exportersindia.com/indian-suppliers/woolen-carpets.htm"],
        ["Hand Woven Rugs", "https://www.exportersindia.com/indian-suppliers/hand-woven-rugs.htm"],
        ["Floor Carpet", "https://www.exportersindia.com/indian-suppliers/floor-carpet.htm"],
        ["Floor Rugs", "https://www.exportersindia.com/indian-suppliers/floor-rugs.htm"],
      ],
    },
    {
      title: "Door Mats & Bath Mats",
      link: "https://www.exportersindia.com/indian-manufacturers/door-bath-mats.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/310394-550-home.jpg",
      items: [
        ["Floor Mats", "https://www.exportersindia.com/indian-suppliers/floor-mats.htm"],
        ["Coir Mat", "https://www.exportersindia.com/indian-suppliers/coir-mat.htm"],
        ["Jute Mats", "https://www.exportersindia.com/indian-suppliers/jute-mats.htm"],
        ["Polypropylene Mat", "https://www.exportersindia.com/indian-suppliers/polypropylene-mat.htm"],
        ["Printed Mats", "https://www.exportersindia.com/indian-suppliers/printed-mats.htm"],
      ],
    },
    {
      title: "Drapes and Curtains",
      link: "https://www.exportersindia.com/indian-manufacturers/curtain.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/13758-937-home.jpg",
      items: [
        ["Designer Curtains", "https://www.exportersindia.com/indian-suppliers/designer-curtains.htm"],
        ["Printed Curtains", "https://www.exportersindia.com/indian-suppliers/printed-curtains.htm"],
        ["Cotton Curtains", "https://www.exportersindia.com/indian-suppliers/cotton-curtains.htm"],
        ["PVC Curtains", "https://www.exportersindia.com/indian-suppliers/pvc-curtains.htm"],
        ["Window Curtains", "https://www.exportersindia.com/indian-suppliers/window-curtains.htm"],
      ],
    },
    {
      title: "Kitchen Linens & Textiles",
      link: "https://www.exportersindia.com/indian-manufacturers/kitchen-linen.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/13771-103-home.jpg",
      items: [
        ["Kitchen Towel Set", "https://www.exportersindia.com/indian-suppliers/kitchen-towel-set.htm"],
        ["Kitchen Rolls", "https://www.exportersindia.com/indian-suppliers/kitchen-rolls.htm"],
        ["Dishcloths", "https://www.exportersindia.com/indian-suppliers/dishcloths.htm"],
        ["Kitchen Napkins", "https://www.exportersindia.com/indian-suppliers/kitchen-napkins.htm"],
        ["Oven Mitts", "https://www.exportersindia.com/indian-suppliers/oven-mitts.htm"],
      ],
    },
  ];

  return (
    <section id="home-furnishings" className="w-full py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            <a href="https://www.exportersindia.com/industry/home-furnishings.htm">
              Home Furnishings
            </a>
          </h2>
          <a
            href="https://www.exportersindia.com/industry/home-furnishings.htm"
            className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
          >
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Banner */}
          <div className="relative overflow-hidden rounded-lg group lg:col-span-1">
            <img
              src="https://dyimg77.exportersindia.com/final_catg_image/13756-485.jpg"
              alt="Home Furnishings"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 flex items-end">
              <div className="p-4 text-white text-sm space-y-2">
                <ul className="space-y-1">
                  <li><a href="https://www.exportersindia.com/indian-manufacturers/cushions.htm">Cushion & Cushion Covers</a></li>
                  <li><a href="https://www.exportersindia.com/indian-manufacturers/table-linen.htm">Tablecloths, Table Linen and Placemats</a></li>
                  <li><a href="https://www.exportersindia.com/indian-manufacturers/blinds-wallpapers.htm">Blinds, Wallpapers And Accessories</a></li>
                  <li><a href="https://www.exportersindia.com/indian-manufacturers/mattress.htm">PU Foam, Spring & Coir Mattresses</a></li>
                </ul>
                <a
                  href="https://www.exportersindia.com/industry/home-furnishings.htm"
                  className="inline-block mt-2 bg-red-500 px-3 py-1 rounded text-white text-xs"
                >
                  View All
                </a>
              </div>
            </div>
          </div>

          {/* Category Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat, index) => (
              <div key={index} className="border rounded-lg p-4 flex flex-col justify-between hover:shadow-md transition">

                <div>
                  <a href={cat.link} className="font-semibold text-sm mb-2 inline-block hover:text-blue-600">
                    {cat.title} →
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
