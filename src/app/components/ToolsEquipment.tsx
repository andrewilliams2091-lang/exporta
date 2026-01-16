export default function ToolsEquipment() {
  const categories = [
    {
      title: "Testing Equipment & Machines",
      link: "https://www.exportersindia.com/indian-manufacturers/t-equip-mach.htm",
      image:
        "https://dyimg77.exportersindia.com/final_catg_image/13235-159-home.jpg",
      items: [
        ["Impact Testers", "https://www.exportersindia.com/indian-suppliers/impact-testers.htm"],
        ["Hardness Tester", "https://www.exportersindia.com/indian-suppliers/hardness-tester.htm"],
        ["Tensile Machine", "https://www.exportersindia.com/indian-suppliers/tensile-machine.htm"],
        ["Testing Apparatus", "https://www.exportersindia.com/indian-suppliers/testing-apparatus.htm"],
        ["Testing Equipment", "https://www.exportersindia.com/indian-suppliers/testing-equipment.htm"],
      ],
    },
    {
      title: "Grinders, Drills & Power Tools",
      link: "https://www.exportersindia.com/indian-manufacturers/power-tool.htm",
      image:
        "https://dyimg77.exportersindia.com/final_catg_image/356959-331-home.jpg",
      items: [
        ["Heavy Drilling Machine", "https://www.exportersindia.com/indian-suppliers/heavy-drilling-machine.htm"],
        ["Sander", "https://www.exportersindia.com/indian-suppliers/sander.htm"],
        ["Power Tools", "https://www.exportersindia.com/indian-suppliers/power-tools.htm"],
        ["Electric Cutters", "https://www.exportersindia.com/indian-suppliers/electric-cutters.htm"],
        ["Marble Cutter", "https://www.exportersindia.com/indian-suppliers/marble-cutter.htm"],
      ],
    },
    {
      title: "Hammers, Pliers & Screwdrivers",
      link: "https://www.exportersindia.com/indian-manufacturers/hand-tools.htm",
      image:
        "https://dyimg77.exportersindia.com/final_catg_image/13169-416-home.jpg",
      items: [
        ["Ratchet Set", "https://www.exportersindia.com/indian-suppliers/ratchet-set.htm"],
        ["Tool Kits", "https://www.exportersindia.com/indian-suppliers/tool-kits.htm"],
        ["Hand Tool", "https://www.exportersindia.com/indian-suppliers/hand-tool.htm"],
        ["Wrench Sets", "https://www.exportersindia.com/indian-suppliers/wrench-sets.htm"],
        ["Hammers", "https://www.exportersindia.com/indian-suppliers/hammers.htm"],
      ],
    },
    {
      title: "Measuring Instruments & Equipment",
      link: "https://www.exportersindia.com/indian-manufacturers/measuring-equip.htm",
      image:
        "https://dyimg77.exportersindia.com/final_catg_image/13171-552-home.jpg",
      items: [
        ["Measuring Instruments", "https://www.exportersindia.com/indian-suppliers/measuring-instruments.htm"],
        ["Oxygen Meter", "https://www.exportersindia.com/indian-suppliers/oxygen-meter.htm"],
        ["Currency Counting Machine", "https://www.exportersindia.com/indian-suppliers/currency-counting-machines.htm"],
        ["Ultrasonic Meters", "https://www.exportersindia.com/indian-suppliers/ultrasonic-meters.htm"],
      ],
    },
    {
      title: "Weighing Scales & Measuring Tapes",
      link: "https://www.exportersindia.com/indian-manufacturers/weighing-instruments.htm",
      image:
        "https://dyimg77.exportersindia.com/final_catg_image/357305-783-home.jpg",
      items: [
        ["Weighing Scale", "https://www.exportersindia.com/indian-suppliers/weighing-scale.htm"],
        ["Scale Ruler", "https://www.exportersindia.com/indian-suppliers/scale-ruler.htm"],
        ["Digital Scales", "https://www.exportersindia.com/indian-suppliers/digital-scales.htm"],
        ["Platform Scale", "https://www.exportersindia.com/indian-suppliers/platform-scale.htm"],
        ["Table Top Scales", "https://www.exportersindia.com/indian-suppliers/table-top-scales.htm"],
      ],
    },
    {
      title: "Machine and Precision Tools",
      link: "https://www.exportersindia.com/indian-manufacturers/machine-and-precision-tools.htm",
      image:
        "https://dyimg77.exportersindia.com/final_catg_image/357115-131-home.jpg",
      items: [
        ["Turning Components", "https://www.exportersindia.com/indian-suppliers/turning-components.htm"],
        ["Spindles", "https://www.exportersindia.com/indian-suppliers/spindle.htm"],
        ["Jig Fixture", "https://www.exportersindia.com/indian-suppliers/jig-fixture.htm"],
        ["Machine Tools", "https://www.exportersindia.com/indian-suppliers/machine-tools.htm"],
        ["Punching Machines", "https://www.exportersindia.com/indian-suppliers/punching-machines.htm"],
      ],
    },
  ];

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Tools & Equipment</h2>
          <a
            href="https://www.exportersindia.com/industry/tools.htm"
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
              src="https://dyimg77.exportersindia.com/final_catg_image/12111-865.jpg"
              alt="Tools & Equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex items-end">
              <div className="p-4 text-white text-sm space-y-2">
                <p>Testing Equipment & Machines</p>
                <p>Grinders, Drills & Power Tools</p>
                <p>Hammers, Pliers & Screwdrivers</p>
                <p>Measuring Instruments & Equipment</p>

                <a
                  href="https://www.exportersindia.com/industry/tools.htm"
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
