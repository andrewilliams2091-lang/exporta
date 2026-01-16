"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


 const recentBlogs = [
  {
    title: "Benefits of Using an Electric Kettle for Faster, Safer Boiling",
    image: "https://dyimg77.exportersindia.com/blog_images/20260114144628.jpg",
    url: "https://www.exportersindia.com/blog/benefits-of-using-an-electric-kettle.htm",
  },
  {
    title: "Top 8 Red Sandalwood Manufacturers in India",
    image: "https://dyimg77.exportersindia.com/blog_images/20260109143823.jpg",
    url: "https://www.exportersindia.com/blog/top-8-red-sandalwood-manufacturers-in-india.htm",
  },
  {
    title: "Top 7 Makhana Manufacturers in India",
    image: "https://dyimg77.exportersindia.com/blog_images/20260103125638.jpg",
    url: "https://www.exportersindia.com/blog/top-7-makhana-manufacturers-in-india.htm",
  },
  {
    title: "10 Healthy Soups to Boost Immunity During Winter",
    image: "https://dyimg77.exportersindia.com/blog_images/20251231142107.jpg",
    url: "https://www.exportersindia.com/blog/10-healthy-soups-to-boost-immunity-during-winter.htm",
  },
  {
    title: "10 Budget-Friendly New Year Party Ideas to Celebrate at Home",
    image: "https://dyimg77.exportersindia.com/blog_images/20251226143449.jpg",
    url: "https://www.exportersindia.com/blog/10-budget-friendly-new-year-party-ideas.htm",
  },
  {
    title: "Top 10 Milk Khoya Manufacturers in India",
    image: "https://dyimg77.exportersindia.com/blog_images/20251225151530.jpg",
    url: "https://www.exportersindia.com/blog/top-10-milk-khoya-manufacturers-in-india.htm",
  },
  {
    title: "Top 7 Room Heater Manufacturers in India",
    image: "https://dyimg77.exportersindia.com/blog_images/20251222144128.jpg",
    url: "https://www.exportersindia.com/blog/top-7-room-heater-manufacturers-in-india.htm",
  },
];


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1.2,
  },
};

export default function RecentBlogs() {
  return (
    <div className="inblogBox">
      <div className="max-w-[1285px] mx-auto px-4">
        <h2 className="text-lg font-semibold mb-4">Recent Blogs</h2>

        <Carousel
          responsive={responsive}
          arrows
          infinite={false}
          itemClass="pr-6"
          containerClass="pb-2"
        >
          {recentBlogs.map((blog, index) => (
            <div key={index} className="w-[310px] !pr-6">
              <a
                href={blog.url}
                className="block text-[#333]"
              >
                <div className="h-[200px] rounded-md overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-sm mt-2 leading-snug">
                  {blog.title}
                </p>
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
