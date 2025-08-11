"use client";

import { useEffect, useMemo, useState } from "react";

export default function AnnouncementBar() {
  const [time, setTime] = useState(null);

  // İstanbul saati API 
  const fetchTime = async () => {
    try {
      const res = await fetch("https://worldtimeapi.org/api/timezone/Europe/Istanbul", { cache: "no-store" });
      const data = await res.json();
      setTime(new Date(data.datetime));
    } catch (e) {
      console.error("Saat alınamadı:", e);
    }
  };

  useEffect(() => {
    fetchTime();                        
    const t1 = setInterval(fetchTime, 60_000); // her dakika yenile
    return () => clearInterval(t1);
  }, []);

  
  const timeText = useMemo(() => {
    if (!time) return "...";
    return new Intl.DateTimeFormat("tr-TR", { hour: "2-digit", minute: "2-digit" }).format(time);
  }, [time]);

  const isPromo = time ? time.getHours() >= 19 : false;

  // Kayan içerik 
  const message = isPromo
    ? `İstanbul saati ${timeText} • Akşam Kampanyası: 2 Al 1 Öde başladı! • Latte + Brownie ikilisi dene! • `
    : `İstanbul saati ${timeText} • Her gün 19:00’da tüm kahvelerde 2 Al 1 Öde kampanyasını kaçırma ! • En taze çekirdekler bizde • `;

  return (
    <div className={`${isPromo ? "bg-latte text-white" : "bg-gray-100 text-gray-800"}`}>
  <div className="mx-auto max-w-7xl h-10 px-4 flex items-center overflow-hidden">
    {/* Marquee hattı */}
    <div className="relative w-full overflow-hidden">
      <span
        className="marquee text-sm font-medium"
        style={{ "--marquee-duration": "60s" }} // hız 
      >
        {message.repeat(4)}
      </span>
    </div>
  </div>
</div>

    
  );
}
