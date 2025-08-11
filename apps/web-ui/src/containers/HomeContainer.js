"use client";

import HomeSlider from "@/components/HomeSlider";
import AnnouncementBar from "@/components/AnnouncementBar";

export default function HomeContainer() {
  return (
    <div>
      <HomeSlider className ="mb-12" />
      <section className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4 bg-white space-y-6">
        <h1 className="text-4xl font-bold text-[var(--primary)]">Freshly Brewed Happiness</h1>
        <div className="w-24 h-1 bg-[var(--accent)] my-3 rounded-full"></div>

       
        <AnnouncementBar  />
        <p className="text-gray-40 text-lg mb-8 max-w-xl space-y-4">
            Take a look at our menu to try our coffees made from the freshest beans!
        </p>
      </section>
    </div>
  );
}
