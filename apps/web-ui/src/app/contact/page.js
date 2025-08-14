"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    
    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ type: "error", msg: "Please fill in the required fields." });
      return;
    }

    try {
      setStatus({ type: "loading", msg: "Sending..." });
    
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Sending error");
      setStatus({ type: "success", msg: "Your message has been received. Thank you!" });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ type: "error", msg: "Something went wrong. Please try again later." });
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary, #2d2a26)]">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            For questions, suggestions, or collaboration requests, fill out the form
            or contact us through the channels below.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Form */}
        <div className="rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[var(--primary, #2d2a26)]">Contact Form</h2>
          <p className="mt-2 text-sm text-gray-500">* marked fields are required</p>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                <input name="name" type="text" required placeholder="e.g. Dilara Kuloğlu"
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none focus:border-[var(--accent,#a47551)] focus:ring-2 focus:ring-[var(--accent,#a47551)]/20" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input name="email" type="email" required placeholder="example@mail.com"
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none focus:border-[var(--accent,#a47551)] focus:ring-2 focus:ring-[var(--accent,#a47551)]/20" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" type="tel" placeholder="05xx xxx xx xx"
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none focus:border-[var(--accent,#a47551)] focus:ring-2 focus:ring-[var(--accent,#a47551)]/20" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input name="subject" type="text" placeholder="Subject"
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none focus:border-[var(--accent,#a47551)] focus:ring-2 focus:ring-[var(--accent,#a47551)]/20" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message *</label>
              <textarea name="message" rows={5} required placeholder="Write your message"
                className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none focus:border-[var(--accent,#a47551)] focus:ring-2 focus:ring-[var(--accent,#a47551)]/20" />
            </div>

            
            <label className="inline-flex items-start gap-3 text-sm text-gray-600 select-none">
              <input name="kvkk" type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
              I agree to the processing of my personal data for contact purposes.
            </label>

            <button type="submit" disabled={status.type === "loading"}
              className="group mt-2 inline-flex items-center justify-center rounded-2xl bg-[var(--primary,#2d2a26)] px-5 py-3 text-white font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-60">
              <span>Send</span>
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </button>

            {status.type !== "idle" && (
              <p className={`text-sm ${status.type === "success" ? "text-green-600" : status.type === "error" ? "text-red-600" : "text-gray-600"}`}>
                {status.msg}
              </p>
            )}
          </form>
        </div>

        
        <aside className="space-y-6">
          <div className="rounded-3xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[var(--primary,#2d2a26)]">Contact Information</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-center gap-3"><span className="font-medium">Phone:</span>
                <a className="underline-offset-2 hover:underline" href="tel:+905551112233">+90 555 111 22 33</a></li>
              <li className="flex items-center gap-3"><span className="font-medium">Email:</span>
                <a className="underline-offset-2 hover:underline" href="mailto:info@cafezo.com">info@cafezo.com</a></li>
              <li className="flex items-center gap-3"><span className="font-medium">Address:</span>
                <span>Uskudar / Istanbul</span></li>
            </ul>

            <div className="mt-6 h-[220px] w-full overflow-hidden rounded-2xl">
              <iframe
                title="CafeZo Location"
                src="https://www.google.com/maps?q=Uskudar,Istanbul&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[var(--primary,#2d2a26)]">Opening Hours</h3>
            <dl className="mt-3 grid grid-cols-2 gap-y-2 text-gray-700">
              <dt>Mon–Fri</dt><dd>08:30 – 22:00</dd>
              <dt>Sat</dt><dd>10:00 – 23:30</dd>
              <dt>Sun</dt><dd>10:00 – 23:30</dd>
            </dl>
          </div>

          <div className="rounded-3xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[var(--primary,#2d2a26)]">Social Media</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { label: "Instagram", href: "https://instagram.com/" },
                { label: "Twitter", href: "https://x.com/" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                   className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:border-[var(--accent,#a47551)] hover:text-[var(--accent,#a47551)] transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          
          <div className="rounded-3xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[var(--primary,#2d2a26)]">Frequently Asked Questions</h3>
            <Accordion
              items={[
                { q: "Do you accept reservations?", a: "Currently, reservations are only accepted by phone." },
                { q: "Is there parking?", a: "There are paid parking spaces on our street." },
                { q: "Do you allow pets?", a: "Our outdoor area is pet-friendly." },
              ]}
            />
          </div>
        </aside>
      </section>
    </main>
  );
}

function Accordion({ items = [] }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="divide-y divide-gray-200">
      {items.map((it, idx) => (
        <button
          key={idx}
          onClick={() => setOpen((v) => (v === idx ? null : idx))}
          className="w-full py-3 text-left"
          aria-expanded={open === idx}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-800">{it.q}</span>
            <svg className={`h-5 w-5 transition-transform ${open === idx ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
          </div>
          <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${open === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className="overflow-hidden text-sm text-gray-600 pr-6">
              <p className="py-2">{it.a}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
