"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HomeSlider() {
  const slides = [
    { src: "/slider/latte.jpg", alt: "İced Coffee " },
    { src: "/slider/brownie.jpg", alt: "Fresh Desserts" },
    { src: "/slider/latte_art.jpg", alt: "Latte Art" },
  ];

  return (
    <div className="w-full h-[320px] md:h-[420px] lg:h-[520px]">
      <Swiper
        centeredSlides
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i} className="h-full">
            <div className="relative w-full h-full">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-cover object-center"
                priority={i === 0}
              />
             {/* Koyu geçiş efekti */}
              <div className=" pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />

              {/* Başlık */ }
              <div className="absolute left-1/2 bottom-8 -translate-x-1/2 text-center">
                <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-[0_8px_24px_rgba(0,0,0,.7)]">
                  {s.alt}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
