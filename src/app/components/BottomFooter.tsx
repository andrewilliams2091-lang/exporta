"use client";

export default function BottomFooter() {
  return (
    <footer className="w-full bg-white">
      {/* Partner Sites */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold text-gray-700">
              Partner Sites
            </span>

            <ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <li>
                <a
                  href="https://www.placementindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://static.exportersindia.com/ei_images/our-network/pi-logo.svg"
                    alt="Placement India"
                    width={192}
                    height={42}
                    loading="lazy"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.realestateindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://static.exportersindia.com/ei_images/our-network/rei_logo.svg"
                    alt="Realestate India"
                    width={192}
                    height={42}
                    loading="lazy"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.tourtravelworld.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://static.exportersindia.com/ei_images/our-network/ttw-logo.svg"
                    alt="Tourtravel World"
                    width={192}
                    height={42}
                    loading="lazy"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.matrimonialsindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://static.exportersindia.com/ei_images/our-network/mi-logo.svg"
                    alt="Matrimonials India"
                    width={192}
                    height={42}
                    loading="lazy"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.weblinkindia.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://static.exportersindia.com/ei_images/our-network/weblink.svg"
                    alt="Weblink India"
                    width={192}
                    height={42}
                    loading="lazy"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#2b2b2b] text-gray-200 text-sm">
        <div className="max-w-[1200px] mx-auto px-6 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              Copyright © 1997-2026{" "}
              <a
                href="https://www.weblink.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Weblink.In Pvt. Ltd.
              </a>{" "}
              All rights reserved.
            </div>

            <div>
              <a
                href="https://www.exportersindia.com/privacy-policy.htm"
                className="hover:underline"
              >
                Privacy Policy
              </a>{" "}
              -{" "}
              <a
                href="https://www.exportersindia.com/terms-conditions.htm"
                className="hover:underline"
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
