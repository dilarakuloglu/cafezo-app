"use client";

import HomeSlider from "@/components/HomeSlider";
import AnnouncementBar from "@/components/AnnouncementBar";

export default function HomeContainer() {
  return (
    <div className="bg-white">
      
      <HomeSlider className="mb-12" />

      <section className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[50vh] text-center px-4 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
          Freshly Brewed Happiness
        </h1>

        <div className="w-40 h-1 bg-[var(--accent)] rounded-full" />

        
        <AnnouncementBar className=" mt-24 text-gray-700" />

        

        <p className=" mt-12 text-gray-600 text-lg max-w-xl">
          Take a look at our menu to try our coffees made from the freshest beans!
        </p>
        <div className=" w-40 h-1 bg-[var(--accent)] rounded-full" />

      </section>
    </div>
  );
}
