"use client";

import { useEffect } from "react";
import Head from "next/head";

export default function TermsPage() {
  
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.documentElement.style.scrollBehavior = "auto";
      }
    };
  }, []);

  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "definitions", label: "Definitions" },
    { id: "eligibility", label: "Service Usage Terms" },
    { id: "orders-payments", label: "Orders & Payments" },
    { id: "refunds", label: "Cancellations & Refunds" },
    { id: "ip", label: "Intellectual Property" },
    { id: "content-conduct", label: "Content & Usage Rules" },
    { id: "third-parties", label: "Third Parties & Links" },
    { id: "disclaimers", label: "Disclaimer" },
    { id: "privacy", label: "Privacy" },
    { id: "governing-law", label: "Governing Law & Disputes" },
    { id: "changes", label: "Changes" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>Terms & Conditions | CafeZo</title>
        <meta name="description" content="Service Terms and Conditions for CafeZo." />
      </Head>

      
      <section className="bg-[var(--primary,#1f2937)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
          <p className="mt-2 text-white/80">Last updated: August 13, 2025</p>
        </div>
      </section>

      
      <section className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-24 space-y-2">
            <h2 className="text-sm uppercase tracking-wider text-gray-500">Table of Contents</h2>
            <nav className="mt-2 flex flex-col">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="py-2 text-sm text-gray-700 hover:text-[var(--primary,#1f2937)]"
                >
                  {s.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => window.print()} 
              className="mt-4 inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm font-medium hover:shadow"
            >
              Print / Save as PDF
            </button>
          </div>
        </aside>

        
        <article className="lg:col-span-9 space-y-6">
        
          <Section id="introduction" title="1. Introduction">
            <p>
              These Terms and Conditions (“<strong>Terms</strong>”) govern the use of the
              website, mobile application, and all related services (collectively, the
              “<strong>Service</strong>”) provided by <strong>CafeZo</strong>.
              By using the Service, you are deemed to have accepted these Terms.
            </p>
          </Section>

          <Section id="definitions" title="2. Definitions">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>User</strong>: Any natural person visiting or using the Service.
              </li>
              <li>
                <strong>Account</strong>: A profile and identity created specifically for the User.
              </li>
              <li>
                <strong>Content</strong>: Text, images, logos, product photos, reviews, etc.
              </li>
            </ul>
          </Section>

          <Section id="eligibility" title="3. Service Usage Terms">
            <ul className="list-disc pl-5 space-y-1">
              <li>The Service is intended for individuals aged 18 and above.</li>
              <li>You are responsible for the security of your account; do not share your password.</li>
              <li>
                Illegal activity, distribution of malicious code, interference with infrastructure,
                and unauthorized data collection are prohibited.
              </li>
            </ul>
          </Section>

          <Section id="orders-payments" title="4. Orders & Payments">
            <ul className="list-disc pl-5 space-y-1">
              <li>Accepted payment methods are stated on the website.</li>
              <li>Prices may change without prior notice.</li>
              <li>
                Order confirmation is sent via email or in-app notification upon successful payment.
              </li>
            </ul>
          </Section>

          <Section id="refunds" title="5. Cancellations & Refunds">
            <p>
              Cancellation and refund processes are carried out in accordance with
              distance selling and consumer protection regulations. Special conditions for
              certain products/services (e.g., custom-made items, perishable goods) will be
              stated separately.
            </p>
          </Section>

          <Section id="ip" title="6. Intellectual Property">
            <p>
              All trademarks, logos, designs, text, photos, and software elements on the site
              belong to CafeZo or its licensors. Unauthorized copying, reproduction, or
              distribution is prohibited.
            </p>
          </Section>

          <Section id="content-conduct" title="7. Content & Usage Rules">
            <ul className="list-disc pl-5 space-y-1">
              <li>Users are responsible for the content they upload.</li>
              <li>
                Content containing hate speech, harassment, misleading information, or copyright
                infringement may be removed; accounts may be suspended.
              </li>
            </ul>
          </Section>

          <Section id="third-parties" title="8. Third Parties & Links">
            <p>
              The Service may contain links to third-party websites/services.
              CafeZo is not responsible for the content or practices of these sites.
            </p>
          </Section>

          <Section id="disclaimers" title="9. Disclaimer">
            <ul className="list-disc pl-5 space-y-1">
              <li>The Service is provided “as is” and “as available.”</li>
              <li>
                Liability for interruptions, errors, data loss, or loss of profits is limited,
                whether direct or indirect.
              </li>
            </ul>
          </Section>

          <Section id="privacy" title="10. Privacy">
            <p>
              For details on how personal data is processed, please refer to our {" "}
              <a href="/privacy" className="underline hover:no-underline">Privacy Policy</a>.
            </p>
          </Section>

          <Section id="governing-law" title="11. Governing Law & Disputes">
            <p>
              These Terms are governed by the laws of the Republic of Türkiye.
              Disputes will be resolved by the Istanbul Central (Çağlayan) Courts and Enforcement Offices.
            </p>
          </Section>

          <Section id="changes" title="12. Changes">
            <p>
              CafeZo may update these Terms at any time. Changes take effect as soon as they are
              published. Reasonable notice will be provided for significant changes.
            </p>
          </Section>

          <Section id="contact" title="13. Contact">
            <p>
              For any questions, please contact us at {" "}
              <a href="mailto:terms@cafezo.com" className="underline hover:no-underline">terms@cafezo.com</a>.
            </p>
          </Section>
        </article>
      </section>
    </main>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 rounded-2xl border p-4">
      <details open className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
          <h3 className="text-lg md:text-xl font-semibold text-[var(--primary,#111827)]">{title}</h3>
          <span className="rounded-full border px-2 py-1 text-xs text-gray-600 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <div className="mt-3 text-gray-700 leading-relaxed">{children}</div>
      </details>
    </section>
  );
}
