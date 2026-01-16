"use client";

import { useState } from "react";

export default function ExportersIndiaFooterText() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full bg-white border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        <div className="relative">
          <p
            className={`text-[13px] leading-[22px] text-gray-600 tracking-wide transition-all duration-300 ${
              expanded ? "max-h-[1000px]" : "max-h-[66px] overflow-hidden"
            }`}
          >
            Exporters India is India's largest searchable B2B marketplace and
            Exporters Directory that connects Manufacturers Exporters Suppliers
            and Buyers to generate value from unlimited online trade opportunities
            and Buyer Enquiries. ExportersIndia.com is the trusted B2B Marketplace
            where only genuine business enquiries supplement trade deals between
            buyers, suppliers, exporters and importers of every origin. A number of
            manufacturers, suppliers, exporters, wholesaler, traders and service
            providers get maximum exposure to the potential buyers with Exporters
            India. At Exporters India, a slew of global business entities meet,
            initiate, share and gain from underlying trade opportunities.
          </p>

          {/* Gradient fade when collapsed */}
          {!expanded && (
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 text-[12px] text-blue-600 hover:underline font-medium"
          >
            {expanded ? "Read Less.." : "Read More.."}
          </button>
        </div>
      </div>
    </section>
  );
}
