"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Medicines Tonics and Drugs",
    link: "https://www.exportersindia.com/indian-manufacturers/medicines.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/13018-1-home.jpg",
    items: [
      ["Allopathic Medicine", "https://www.exportersindia.com/indian-suppliers/allopathic-medicines.htm"],
      ["Pharmaceutical Ointment", "https://www.exportersindia.com/indian-suppliers/pharmaceutical-ointment.htm"],
      ["Pharmaceutical Syrups", "https://www.exportersindia.com/indian-suppliers/pharmaceutical-syrups.htm"],
      ["Pharmaceutical Medicine", "https://www.exportersindia.com/indian-suppliers/pharmaceutical-medicine.htm"],
      ["Pharmaceutical Injection", "https://www.exportersindia.com/indian-suppliers/pharmaceutical-injection.htm"],
    ],
  },
  {
    title: "Health Care Products",
    link: "https://www.exportersindia.com/indian-manufacturers/health-care-products.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/13971-161-home.jpg",
    items: [
      ["Cellulose Powder", "https://www.exportersindia.com/indian-suppliers/cellulose-powder.htm"],
      ["Ferrous Ascorbate", "https://www.exportersindia.com/indian-suppliers/ferrous-ascorbate.htm"],
      ["Steam Vaporizer", "https://www.exportersindia.com/indian-suppliers/steam-vaporizer.htm"],
    ],
  },
  {
    title: "Medical Consultants & Treatment Centres",
    link: "https://www.exportersindia.com/indian-services/medical-consultant.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/13374-324-home.jpg",
    items: [
      ["Health Care Services", "https://www.exportersindia.com/indian-services/health-care-services.htm"],
      ["PCD Pharma Franchise", "https://www.exportersindia.com/indian-services/pcd-pharma-franchise.htm"],
      ["Hair Treatments", "https://www.exportersindia.com/indian-services/hair-treatments.htm"],
      ["Dermatology Skin Treatment", "https://www.exportersindia.com/indian-services/dermatology-skin-treatment.htm"],
      ["Dental Treatment Service", "https://www.exportersindia.com/indian-services/dental-treatment-service.htm"],
    ],
  },
  {
    title: "Dietary Supplements & Nutraceuticals",
    link: "https://www.exportersindia.com/indian-manufacturers/nutraceutical-supplements.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/358708-232-home.jpg",
    items: [
      ["Whey Protein Powder", "https://www.exportersindia.com/indian-suppliers/whey-protein-powder.htm"],
      ["Multivitamin Supplements", "https://www.exportersindia.com/indian-suppliers/multivitamin-supplements.htm"],
      ["Tulsi Drops", "https://www.exportersindia.com/indian-suppliers/tulsi-drops.htm"],
      ["Calcium Tablet", "https://www.exportersindia.com/indian-suppliers/calcium-tablet.htm"],
      ["Vitamin Powder", "https://www.exportersindia.com/indian-suppliers/vitamin-powder.htm"],
    ],
  },
  {
    title: "Digestive System Medicines & Drugs",
    link: "https://www.exportersindia.com/indian-manufacturers/gastrointestinal-drugs.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/358727-734-home.jpg",
    items: [
      ["Gastrointestinal Drug", "https://www.exportersindia.com/indian-suppliers/gastrointestinal-drug.htm"],
      ["Allopathic Liver Tonic", "https://www.exportersindia.com/indian-suppliers/liver-tonic.htm"],
      ["Antacid Drugs", "https://www.exportersindia.com/indian-suppliers/antacid-drugs.htm"],
      ["Domperidone Capsule", "https://www.exportersindia.com/indian-suppliers/domperidone-capsule.htm"],
      ["Pantoprazole Tablets", "https://www.exportersindia.com/indian-suppliers/pantoprazole-tablets.htm"],
    ],
  },
  {
    title: "Pain Relief Drugs & Medicines",
    link: "https://www.exportersindia.com/indian-manufacturers/pain-relief-drugs-medicines.htm",
    image: "https://dyimg77.exportersindia.com/final_catg_image/360259-299-home.jpg",
    items: [
      ["Anti Inflammatory Drugs", "https://www.exportersindia.com/indian-suppliers/anti-inflammatory-drugs.htm"],
      ["Pain Relief Drugs", "https://www.exportersindia.com/indian-suppliers/pain-relief-drugs.htm"],
      ["Arthritic Drugs", "https://www.exportersindia.com/indian-suppliers/arthritic-drugs.htm"],
      ["Ayurvedic Joint Health Powder", "https://www.exportersindia.com/indian-suppliers/ayurvedic-joint-health-powder.htm"],
      ["Aceclofenac Tablets", "https://www.exportersindia.com/indian-suppliers/aceclofenac-tablets.htm"],
    ],
  },
];

export default function PharmaceuticalDrugsSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            <Link href="https://www.exportersindia.com/industry/pharmaceutical-drugs-medicines.htm">
              Pharmaceutical Drugs & Medicines
            </Link>
          </h2>

          <Link
            href="https://www.exportersindia.com/industry/pharmaceutical-drugs-medicines.htm"
            className="text-sm font-medium text-blue-600 hover:underline flex items-center gap-1"
          >
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Left Banner */}
          <div className="relative rounded-xl overflow-hidden group h-[420px]">
            <Image
              src="https://dyimg77.exportersindia.com/final_catg_image/11132-396.jpg"
              alt="Pharmaceutical Drugs & Medicines"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
              <ul className="space-y-2 text-white text-sm mb-4">
                <li><a className="hover:underline" href="https://www.exportersindia.com/indian-manufacturers/pharmaceuticals-biotechnology.htm">Pharmaceutical Raw Materials</a></li>
                <li><a className="hover:underline" href="https://www.exportersindia.com/indian-manufacturers/sexual-wellness-products.htm">Sexual Wellness Products</a></li>
                <li><a className="hover:underline" href="https://www.exportersindia.com/indian-manufacturers/cardiovascular-medication.htm">Cardiovascular Medication & Drugs</a></li>
                <li><a className="hover:underline" href="https://www.exportersindia.com/indian-manufacturers/animal-health-care.htm">Animal Health Care & Veterinary Medicines</a></li>
              </ul>

              <a
                href="https://www.exportersindia.com/industry/pharmaceutical-drugs-medicines.htm"
                className="inline-block bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded hover:bg-gray-100 w-fit"
              >
                View All
              </a>
            </div>
          </div>

          {/* Category Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="border rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <a href={cat.link} className="font-semibold text-gray-900 hover:text-blue-600">
                    {cat.title}
                  </a>

                  <ul className="mt-3 space-y-1 text-sm text-gray-600">
                    {cat.items.map(([label, url]) => (
                      <li key={label}>
                        <a href={url} className="hover:text-blue-600 hover:underline">
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={90}
                    height={90}
                    className="object-contain"
                  />

                  <a href={cat.link} className="text-blue-600 font-semibold text-sm">
                    →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
