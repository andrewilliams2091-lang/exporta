"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const clientLogos = [
  {
    href: "https://www.exportersindia.com/show-url.php?id=ab|order_id=1476250",
    src: "https://dynamic.exportersindia.com/banner/1476250.gif",
    alt: "Guppa Gounder Spices",
  },
  {
    href: "https://www.exportersindia.com/show-url.php?id=ab|order_id=1541407",
    src: "https://dynamic.exportersindia.com/banner/1541407.gif",
    alt: "SRG Enterprises",
  },
  {
    href: "https://www.exportersindia.com/show-url.php?id=ab|order_id=1545320",
    src: "https://dynamic.exportersindia.com/banner/1545320.gif",
    alt: "UDPM EXPORT IMPORT",
  },
  {
    href: "https://www.realestateindia.com",
    src: "https://static.exportersindia.com/ei_images/banners/realesateindia.gif",
    alt: "RealEstateIndia",
    rel: "nofollow",
  },
  {
    href: "https://www.tourtravelworld.com",
    src: "https://static.exportersindia.com/ei_images/banners/tourtravelworld.gif",
    alt: "TourTravelWorld",
    rel: "nofollow",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 2,
  },
};

export default function ClientLogoSlider() {
  return (
    <section className="tw-w-full tw-py-8"> 
      <div className="tw-max-w-[1150px] !tw-px-[6.5rem]">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          arrows
          draggable
          swipeable
          pauseOnHover
          keyBoardControl
          containerClass="tw-w-full"
          itemClass="tw-flex tw-items-center tw-justify-center"
        >
          {clientLogos.map((logo, index) => (
            <a
              key={index}
              href={logo.href}
              target="_blank"
              rel={`noopener noreferrer ${logo.rel ?? ""}`}
              className="tw-flex tw-items-center tw-justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                loading="lazy"
                className="tw-h-[100px] tw-w-[200px] tw-object-contain tw-transition tw-duration-300 hover:tw-scale-105"
              />
            </a>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
