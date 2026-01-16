"use client";

export default function UpperFooter() {
  return (
    <section className="bg-[#0b1f3f] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Our Services */}
          <div>
            <h3 className="text-orange-500 text-sm font-semibold mb-4 uppercase">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="#" className="hover:underline">Advertise with us</a></li>
              <li><a href="#" className="hover:underline">Membership Plan</a></li>
              <li><a href="#" className="hover:underline">Banner Advertisement</a></li>
            </ul>
          </div>

          {/* Buyers */}
          <div>
            <h3 className="text-orange-500 text-sm font-semibold mb-4 uppercase">
              Buyers
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="#" className="hover:underline">Post Your Requirement</a></li>
              <li><a href="#" className="hover:underline">Browse Suppliers</a></li>
              <li><a href="#" className="hover:underline">Manufacturers Directory</a></li>
              <li><a href="#" className="hover:underline">Country Suppliers</a></li>
              <li><a href="#" className="hover:underline">Buyer FAQ</a></li>
            </ul>
          </div>

          {/* Sellers */}
          <div>
            <h3 className="text-orange-500 text-sm font-semibold mb-4 uppercase">
              Sellers
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a
                  href="#"
                  className="hover:underline font-medium"
                >
                  Sell Your Product
                </a>
              </li>
              <li><a href="#" className="hover:underline">Latest Buyleads</a></li>
              <li><a href="#" className="hover:underline">Seller FAQ</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-orange-500 text-sm font-semibold mb-4 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Web Stories</a></li>
              <li><a href="#" className="hover:underline">Jobs & Careers</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Feedback</a></li>
              <li><a href="#" className="hover:underline">Complaint</a></li>
              <li><a href="#" className="hover:underline">Testimonials</a></li>
              <li><a href="#" className="hover:underline">Disclaimer</a></li>
              <li><a href="#" className="hover:underline">Sitemap</a></li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold"
                >
                  <span className="bg-orange-500 text-white text-[10px] px-1 py-[1px] rounded">
                    LIVE
                  </span>
                  COVERAGE
                </a>
              </li>
            </ul>
          </div>

          {/* App Store + Social */}
          <div className="space-y-6">
            <div className="space-y-3">
              <img
                src="https://static.exportersindia.com/ei_images/apple_store_icon.svg"
                alt="Apple App"
                width={130}
                height={39}
              />
              <img
                src="https://static.exportersindia.com/ei_images/google_store_icon.svg"
                alt="Google App"
                width={130}
                height={39}
              />
            </div>

            <div>
              <p className="text-sm font-medium mb-3">Connect with us</p>
              <div className="flex items-center gap-3">
                <img src="https://static.exportersindia.com/ei_images/icon_facebook.svg" alt="" width={30} />
                <img src="https://static.exportersindia.com/ei_images/icon_twitter.svg?v=1" alt="" width={30} />
                <img src="https://static.exportersindia.com/ei_images/icon_linkedin.svg" alt="" width={30} />
                <img src="https://static.exportersindia.com/ei_images/icon_pinterest.svg" alt="" width={30} />
                <img src="https://static.exportersindia.com/ei_images/icon_blog.svg" alt="" width={30} />
                <img src="https://static.exportersindia.com/ei_images/icon_instagram.svg" alt="" width={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
