"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Mic, Search, Menu, X } from "lucide-react";
import AuthModal from "./AuthModal";


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);



  useEffect(() => {
  const timer = setTimeout(() => {
    setAuthOpen(true);
  }, 3000);

  return () => clearTimeout(timer);
}, []);



  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">

      {/* ========== TOP BAR (Desktop) ========== */}
      <div className="bg-gray-100 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-around px-4 h-10">

          <div className="flex items-center gap-4">
            <span className="text-gray-700">Welcome User!</span>
            <button className="text-blue-600 font-semibold hover:underline"   onClick={() => setAuthOpen(true)}
>
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold hover:bg-blue-700"   onClick={() => setAuthOpen(true)}
>
              Join Free
            </button>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <span><span className="font-medium">Sales :</span> +91-9953717914</span>
            <span className="text-gray-300">|</span>
            <span><span className="font-medium">Support :</span> +91-9700318318</span>
          </div>

          {/* ===== Hover Dropdowns ===== */}
          <div className="flex gap-6">

            {/* Buyer */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600">
                <Image src="https://static.exportersindia.com/ei_images/svg_icon/icon_for_buyer.svg" width={18} height={18} alt="" />
                For Buyer <ChevronDown size={14} />
              </button>

              <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg border rounded text-sm hidden group-hover:block">
                <a className="block px-4 py-2 hover:bg-gray-100" href="https://www.exportersindia.com">Post Buy Requirement</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="https://www.exportersindia.com/industry/">Browse Suppliers</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="https://www.exportersindia.com/manufacturers/">Manufacturers Directory</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="https://www.exportersindia.com/b2b-marketplace.htm">Country Suppliers</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="https://www.exportersindia.com/help/buyer_faq.htm">Buyer FAQ</a>
              </div>
            </div>

            {/* Seller */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600">
                <Image src="https://static.exportersindia.com/ei_images/svg_icon/icon_for_seller.svg" width={18} height={18} alt="" />
                For Seller <ChevronDown size={14} />
              </button>

              <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg border rounded text-sm hidden group-hover:block">
                <a className="block px-4 py-2 hover:bg-gray-100" href="https://www.exportersindia.com/register-business-online?joinfree=sellurprdtshead">Sell Your Product</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="https://www.exportersindia.com/buyers/">Latest Buyleads</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="https://www.exportersindia.com/help/seller_faq.htm">Seller FAQ</a>
              </div>
            </div>

            {/* Help */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600">
                <Image src="https://static.exportersindia.com/ei_images/svg_icon/icon_help.svg" width={18} height={18} alt="" />
                Help <ChevronDown size={14} />
              </button>

              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg border rounded text-sm hidden group-hover:block">
                <a className="block px-4 py-2 hover:bg-gray-100" href="https://www.exportersindia.com/feedback.htm">Send Feedback</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="https://www.exportersindia.com">Send Complaint</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="https://www.exportersindia.com/advertise/">Advertise with us</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="https://members.exportersindia.com/contact-us.htm">Contact Us</a>
                <div className="border-t p-4 text-xs text-gray-600">
                  <div>Sales: +91-9953717914</div>
                  <div>Support: +91-9700318318</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========== MAIN HEADER ========== */}
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center justify-between gap-8">

        {/* Mobile Menu */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
            <Image src="/logo.svg" width={200} height={200} alt="" />
            {/* <span className="text-2xl font-bold text-blue-700">
            Exporters<span className="text-red-600">India</span>
            </span> */}
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-[700px] border-2 border-blue-600 rounded-full overflow-hidden h-[54px]">

            {/* Category */}
            <div className="px-6 flex items-center border-r bg-white text-sm font-medium text-gray-700 whitespace-nowrap">
            Products / Services
            <ChevronDown size={16} className="ml-2 text-gray-500" />
            </div>

            {/* Input */}
            <div className="flex-1 flex items-center px-4 gap-3">
            <input
                className="w-full outline-none text-sm text-gray-700"
                placeholder="Enter product / service to search"
            />

            {/* Google-style mic */}
            <div className="cursor-pointer">
                <svg width="22" height="22" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M12 15a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v7a3 3 0 0 0 3 3z"/>
                <path fill="#34A853" d="M11 18h2v4h-2z"/>
                <path fill="#FBBC05" d="M7 11H5c0 3.5 2.6 6.4 6 6.9v-2c-2.3-.4-4-2.4-4-4.9z"/>
                <path fill="#EA4335" d="M19 11h-2c0 2.5-1.7 4.5-4 4.9v2c3.4-.5 6-3.4 6-6.9z"/>
                </svg>
            </div>
            </div>

            {/* Search Button */}
            <button className="bg-blue-600 hover:bg-blue-700 px-10 text-white font-semibold flex items-center gap-2 rounded-full m-[2px]">
            <Search size={18} />
            Search
            </button>
        </div>

        {/* CTA */}
        <a
            href="#"
            className="hidden md:flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold px-8 h-[52px] rounded-full whitespace-nowrap shadow-sm"
        >
            Post Buy Requirement
        </a>

        </div>


      {/* ========== MOBILE MENU ========== */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="p-4 space-y-4 text-sm">
            <a className="block">For Buyer</a>
            <a className="block">For Seller</a>
            <a className="block">Help</a>
            <a className="block text-blue-600 font-semibold">Sign In</a>
            <a className="block bg-blue-600 text-white text-center py-2 rounded">
              Join Free
            </a>
            <a className="block bg-red-500 text-white text-center py-2 rounded">
              Post Buy Requirement
            </a>
          </div>
        </div>
      )}
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </header>
  );
}



