"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const stories = [
  {
    title: "How To Choose The Right Headphones For Your Use",
    date: "January 12, 2026",
    href: "https://www.exportersindia.com/web-stories/business/how-to-choose-the-right-headphones-for-your-use/",
    image:
      "https://dynamic.exportersindia.com/web_stories/bc_small/how_to_choose_the_right_headphones_for_your_use_2841_2197.jpg",
  },
  {
    title: "Why Masoor Dal Is Good For Heart Health",
    date: "January 8, 2026",
    href: "https://www.exportersindia.com/web-stories/business/why-masoor-dal-is-good-for-heart-health/",
    image:
      "https://dynamic.exportersindia.com/web_stories/bc_small/why_masoor_dal_is_good_for_heart_health_2835_1328.jpg",
  },
  {
    title: "Top 4 Organic Pulses You Should Add To Your Daily Diet",
    date: "January 8, 2026",
    href: "https://www.exportersindia.com/web-stories/foods/top-4-organic-pulses-you-should-add-to-your-daily-diet/",
    image:
      "https://dynamic.exportersindia.com/web_stories/bc_small/top_4_organic_pulses_you_should_add_to_your_daily_diet_2829_5516.jpg",
  },
  {
    title: "5 Dry Fruits You Should Eat Daily For Good Health",
    date: "January 6, 2026",
    href: "https://www.exportersindia.com/web-stories/business/5-dry-fruits-you-should-eat-daily-for-good-health/",
    image:
      "https://dynamic.exportersindia.com/web_stories/bc_small/5_dry_fruits_you_should_eat_daily_for_good_health_2823_7663.jpg",
  },
  {
    title: "Top 5 Types Of Basmati Rice You Should Know",
    date: "January 6, 2026",
    href: "https://www.exportersindia.com/web-stories/business/top-5-types-of-basmati-rice-you-should-know/",
    image:
      "https://dynamic.exportersindia.com/web_stories/bc_small/top_5_types_of_basmati_rice_you_should_know_2817_1792.jpg",
  },
  {
    title: "Best Casual Shoes For Daily Office & College Wear",
    date: "December 22, 2025",
    href: "https://www.exportersindia.com/web-stories/business/best-casual-shoes-for-daily-office-college-wear/",
    image:
      "https://dynamic.exportersindia.com/web_stories/bc_small/best_casual_shoes_for_daily_office_college_wear_2811_4402.jpg",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 6,
    partialVisibilityGutter: 20,
  },
  laptop: {
    breakpoint: { max: 1279, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1.2,
  },
};

export default function WebStories() {
  return (
    <section className="w-full bg-white py-6">
      <div className="mx-auto max-w-[1310px] px-4">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            <Link
              href="https://www.exportersindia.com/web-stories/"
              target="_blank"
              className="hover:underline"
            >
              Web Stories
            </Link>
          </h2>
        </div>

        {/* Carousel */}
        <Carousel
          responsive={responsive}
          arrows
          infinite={false}
          draggable
          swipeable
          itemClass="pr-4"
          containerClass="pb-2"
        >
          {stories.map((story, index) => (
            <Link
              key={index}
              href={story.href}
              target="_blank"
              className="block group"
            >
              <div className="relative h-[360px] w-full overflow-hidden rounded-xl bg-gray-200">
                {/* Image */}
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 z-10 p-4 text-white">
                  <h3 className="mb-1 line-clamp-2 text-sm font-semibold leading-snug">
                    {story.title}
                  </h3>
                  <span className="text-xs opacity-90">{story.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
