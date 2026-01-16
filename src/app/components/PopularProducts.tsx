"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Product = {
  title: string;
  image: string;
  price: string;
  unit?: string;
  url: string;
};

const products: Product[] = [
  {
    title: "Pure Leather Men Formal Shoes, Color : Black",
    image:
      "https://img2.exportersindia.com/product_images/bc-small/2024/12/2949015/mens-leather-formal-shoes-1733224276-1039886.jpeg",
    price: "₹ 500 - ₹ 3,500",
    unit: "/Pair",
    url: "#",
  },
  {
    title: "Essart PU Leather Watch Box (WC-T-03)",
    image:
      "https://img1.exportersindia.com/product_images/bc-small/dir_55/1625250/essart-pu-leather-watch-box-wc-t-03-tan-1477656943-2513897.jpeg",
    price: "₹ 2,499",
    unit: "/Piece",
    url: "#",
  },
  {
    title: "Aluminum D Type Heater, For Industrial",
    image:
      "https://img3.exportersindia.com/product_images/bc-small/2024/1/4679118/watermark/d-type-heater-1516099476-3584165.jpeg",
    price: "₹ 20 - ₹ 35",
    unit: "/Inch",
    url: "#",
  },
  {
    title: "Stainless Steel Benson Polymeric HPLC Column",
    image:
      "https://img2.exportersindia.com/product_images/bc-small/2018/8/4532996/benson-polymeric-hplc-columns-1534779700-4212222.jpg",
    price: "₹ 75,000",
    unit: "/Piece",
    url: "#",
  },
  {
    title: "PVC Ladies Sandal, Style : Modern",
    image:
      "https://img3.exportersindia.com/product_images/bc-small/2023/9/6561098/watermark/pvc-ladies-sandal-1571306049-5120156.jpeg",
    price: "₹ 100 - ₹ 500",
    unit: "/Pair",
    url: "#",
  },
  {
    title: "BAJAJ Electric Automatic BUVC-W 4W",
    image:
      "https://img3.exportersindia.com/product_images/bc-small/2023/9/4436708/watermark/buvc-w-4w-1594283314-5514255.jpg",
    price: "₹ 4,500",
    unit: "/Piece",
    url: "#",
  },
];

export default function PopularProducts() {

    const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 6,
    slidesToSlide: 6,
  },
  laptop: {
    breakpoint: { max: 1279, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};

  return (
    <section className="bg-[#f5f5f5] py-6">
      <div className="max-w-[1266px] mx-auto px-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Popular Products
        </h2>

        <Carousel
          responsive={responsive}
          arrows
          infinite={false}
          containerClass="pb-2"
          itemClass="px-2"
        >
          {products.map((item, index) => (
            <div key={index} className="w-[201px]">
              <a
                href={item.url}
                className="block bg-white border rounded-md p-2 hover:shadow-sm transition"
              >
                {/* Image */}
                <div className="h-[170px] flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="max-h-full object-contain"
                  />
                </div>

                {/* Title */}
                <p className="mt-2 text-[13px] text-blue-700 leading-snug line-clamp-2">
                  {item.title}
                </p>

                {/* Price */}
                <p className="mt-1 text-[13px] text-gray-700">
                  {item.price}{" "}
                  {item.unit && (
                    <span className="text-gray-500">{item.unit}</span>
                  )}
                </p>
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
