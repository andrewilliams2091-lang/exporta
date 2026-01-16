export default function ConsumerElectronics() {
  const categories = [
    {
      title: "Heaters, Thermostats & Heating Devices",
      link: "https://www.exportersindia.com/indian-manufacturers/heaters.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/10819-472-home.jpg",
      items: [
        ["Water Heaters", "https://www.exportersindia.com/indian-suppliers/water-heaters.htm"],
        ["Immersion Heaters", "https://www.exportersindia.com/indian-suppliers/immersion-heaters.htm"],
        ["Electric Geyser", "https://www.exportersindia.com/indian-suppliers/electric-geyser.htm"],
        ["Heating Mantles", "https://www.exportersindia.com/indian-suppliers/heating-mantles.htm"],
        ["Industrial Air Heater", "https://www.exportersindia.com/indian-suppliers/air-heater.htm"],
      ],
    },
    {
      title: "Kitchen Appliances",
      link: "https://www.exportersindia.com/indian-manufacturers/kitchen-appliances.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/12562-271-home.jpg",
      items: [
        ["Induction Cooker", "https://www.exportersindia.com/indian-suppliers/induction-cookers.htm"],
        ["Electric Kettle", "https://www.exportersindia.com/indian-suppliers/electric-kettle.htm"],
        ["Hot Pots", "https://www.exportersindia.com/indian-suppliers/hot-pots.htm"],
        ["Mixer Grinders", "https://www.exportersindia.com/indian-suppliers/mixer-grinder.htm"],
        ["Barbecue Grill", "https://www.exportersindia.com/indian-suppliers/barbecue-grill.htm"],
      ],
    },
    {
      title: "Electric & Home Appliances",
      link: "https://www.exportersindia.com/indian-manufacturers/appliances.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/355414-923-home.jpg",
      items: [
        ["Air Purifiers", "https://www.exportersindia.com/indian-suppliers/air-purifiers.htm"],
        ["Electric Irons", "https://www.exportersindia.com/indian-suppliers/electric-irons.htm"],
        ["Dishwasher", "https://www.exportersindia.com/indian-suppliers/dishwasher.htm"],
        ["Washing Machine Spare Parts", "https://www.exportersindia.com/indian-suppliers/washing-machine-spare-parts.htm"],
      ],
    },
    {
      title: "Domestic Fans, AC & Coolers",
      link: "https://www.exportersindia.com/indian-manufacturers/air-conditioners.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/10772-94-home.jpg",
      items: [
        ["Air Coolers", "https://www.exportersindia.com/indian-suppliers/air-coolers.htm"],
        ["Pedestal Fan", "https://www.exportersindia.com/indian-suppliers/pedestal-fan.htm"],
        ["Ceiling Fans", "https://www.exportersindia.com/indian-suppliers/ceiling-fans.htm"],
        ["Air Fan", "https://www.exportersindia.com/indian-suppliers/air-fan.htm"],
        ["Wall Fan", "https://www.exportersindia.com/indian-suppliers/wall-fan.htm"],
      ],
    },
    {
      title: "Freezers, Refrigerators & Chillers",
      link: "https://www.exportersindia.com/indian-manufacturers/refrigeration-and-cooling.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/77697-264-home.jpg",
      items: [
        ["Water Cooler", "https://www.exportersindia.com/indian-suppliers/water-cooler.htm"],
        ["Freezers", "https://www.exportersindia.com/indian-suppliers/freezers.htm"],
        ["Ice Making Machine", "https://www.exportersindia.com/indian-suppliers/ice-making-machine.htm"],
        ["Commercial Refrigerator", "https://www.exportersindia.com/indian-suppliers/commercial-refrigerator.htm"],
        ["Vertical Refrigerator", "https://www.exportersindia.com/indian-suppliers/vertical-refrigerator.htm"],
      ],
    },
    {
      title: "Cleaning Machines & Equipments",
      link: "https://www.exportersindia.com/indian-manufacturers/cleaning-equipment.htm",
      image: "https://dyimg77.exportersindia.com/final_catg_image/12122-246-home.jpg",
      items: [
        ["Laminar Air Flow", "https://www.exportersindia.com/indian-suppliers/laminar-air-flow.htm"],
        ["Cleaning Machine", "https://www.exportersindia.com/indian-suppliers/cleaning-machine.htm"],
        ["Floor Sweeper", "https://www.exportersindia.com/indian-suppliers/floor-sweeper.htm"],
        ["Ultrasonic Machine", "https://www.exportersindia.com/indian-suppliers/ultrasonic-machine.htm"],
        ["High Pressure Washer", "https://www.exportersindia.com/indian-suppliers/high-pressure-washer.htm"],
      ],
    },
  ];

  return (
    <section id="consumer-electronics" className="w-full py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Consumer Electronics</h2>
          <a
            href="https://www.exportersindia.com/industry/consumer-electronics.htm"
            className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
          >
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Banner */}
          <div className="relative overflow-hidden rounded-lg group lg:col-span-1">
            <img
              src="https://dyimg77.exportersindia.com/final_catg_image/10770-685.jpg"
              alt="Consumer Electronics"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 flex items-end">
              <div className="p-4 text-white text-sm space-y-2">
                <p>Decorative Lights, Lamps & Lamp Shades</p>
                <p>Adaptors, Plugs and Sockets</p>
                <p>Indoor Lights, Lighting Fittings & Accessories</p>
                <p>Street, Flood & Commercial Lights</p>
                <a
                  href="https://www.exportersindia.com/industry/consumer-electronics.htm"
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
              <div
                key={index}
                className="border rounded-lg p-4 flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <a
                    href={cat.link}
                    className="font-semibold text-sm mb-2 inline-block hover:text-blue-600"
                  >
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
