import Image from "next/image";



export default function AboutPage() {
  return (
    <main className="bg-white py-12  min-h-screen">
    
      <section className="max-w-7xl mx-auto px-6  pt-16 pb-8">
        <h1 className="text-2xl font-semibold text-[var(--gray)]">OUR STORY</h1>
        <p className="mt-4 max-w-3xl text-gray-700 text-lg leading-relaxed">
          CafeZo was born to combine the aroma of fresh beans with a warm welcome.
          From a small neighborhood shop to the daily stop of hundreds of coffee lovers…
          Our story is built on good coffee, friendly conversation, and sustainability.
        </p>
      </section>

      
      <section className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-3 gap-5">
        {[
          { value: "10+", label: "Years of Experience" },
          { value: "500+", label: "Daily Servings" },
          { value: "100%", label: "Arabica Focus" },
        ].map((s) => (
          <div key={s.label} className="group rounded-3xl border-l-8 border-r-4  border-green-800 shadow-xl p-5 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-[var(--primary)]">{s.value}</div>
            <div className="mt-1 text-gray-600">{s.label}</div>
          </div>
        ))}
      </section>

     
      <section className="max-w-7xl  mx-auto px-6 py-12">
        <ol className="mt-6 px-5 relative border-l-2 border-[#b08968]">
          {[ 
            { year: "2018", text: "First CafeZo opened its doors." },
            { year: "2020", text: "Online ordering and delivery launched." },
            { year: "2022", text: "Special roasting and training programs." },
            { year: "2024", text: "Full transition to sustainable packaging." },
          ].map((i) => (
            <li key={i.year} className="mb-8 ml-6">
              <span className="absolute -left-3 mt-1 h-6 w-6 rounded-full bg-green-800"></span>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full border bg-white shadow text-sm font-semibold text-gray-40">
                  {i.year}
                </span>
                <p className="text-gray-700 rounded-2xl p-2 border">{i.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      
      <section className="max-w-7xl rounded-2xl  mx-auto px-6 py-12 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Sustainability",
            desc:
              "We work with fair-trade certified farmers and minimize waste.",
          },
          {
            title: "Craft & Flavor",
            desc:
              "Every cup is prepared with care, balancing roast, grind, and brew.",
          },
          {
            title: "Community",
            desc:
              "We are the neighborhood’s meeting spot: workshops, tastings, and good talks.",
          },
        ].map((v) => (
          <div key={v.title} className="rounded-2xl border-l-3 border-[#656d4a] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[var(--primary)]">{v.title}</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
  <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">Our Team</h2>
  <p className="mt-2 text-gray-700 max-w-3xl">
    Our baristas, trainers, and roasters work every day with the same passion.
    Let’s meet!
  </p>
  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {[
      { name: "Dilara K.", role: "Head Barista", img: "/teammate1.png" },
      { name: "Erva Ö.", role: "Pastry Chef", img: "/teammate3.png" },
      { name: "Beyza Y.", role: "Head Barista", img: "/teammate2.png" },
    ].map((p) => (
      <div
        key={p.name}
        className="group rounded-2xl border-2 border-[#656d4a] bg-white p-6 shadow-sm"
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-xl">
          <Image
            src={p.img}
            alt={p.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
        <div className="mt-4">
          <div className="font-semibold text-[var(--primary)]">{p.name}</div>
          <div className="text-sm text-gray-600">{p.role}</div>
        </div>
      </div>
    ))}
  </div>
</section>


      
      <section className="max-w-5xl  mx-auto px-6 py-12">
        <div className="rounded-2xl border-2 border-[#656d4a] bg-white p-8 md:p-12 shadow-sm text-center">
          <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed">
            “Good coffee is the shortest way to start a good day.”
          </p>
          <span className="mt-3 block text-sm text-gray-500">CafeZo Philosophy</span>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-6 py-12 pb-20">
        <div className="rounded-2xl bg-[var(--primary)]/90 text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">We’d love to welcome you for a cup </h3>
            <p className="mt-2 text-white/90">Check out our menu or join our workshops.</p>
          </div>
          <div className="flex gap-3">
            <a href="/menu" className="rounded-xl bg-white/10 text-[var(--primary)] px-5 py-3 font-semibold shadow border border-white">Menu</a>
            <a href="/contact" className="rounded-xl bg-white/10 backdrop-blur px-5 py-3 font-semibold border border-white">Contact</a>
          </div>
        </div>
      </section>
    </main>
  );
}
