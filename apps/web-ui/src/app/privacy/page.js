
export const metadata = {
  title: "Privacy Policy | CafeZo",
  description:
    "CafeZo Privacy Policy: what data we collect, how we use it, and your rights.",
};

export default function PrivacyPage() {
  const today = "August 13, 2025"; 

  return (
    <main className="min-h-screen bg-white">

      <section className="max-w-5xl mx-auto px-6 pt-16 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary, #0f172a)]">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          Effective Date: <span className="font-medium">{today}</span>
        </p>
        <p className="mt-6 text-gray-700 leading-relaxed">
          At CafeZo, we value the privacy of our visitors and customers.
          This policy explains how personal data is collected, used, shared,
          and protected within our website and services.
        </p>
      </section>

      
      <nav className="max-w-5xl mx-auto px-6 pb-4">
        <ul className="flex flex-wrap gap-3 text-sm">
          {[
            ["Information Collected", "#info"],
            ["Purposes of Use", "#use"],
            ["Sharing", "#share"],
            ["Retention Period", "#retention"],
            ["Security", "#security"],
            ["User Rights", "#rights"],
            ["Cookies", "#cookies"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="inline-block rounded-full border px-3 py-1 hover:bg-gray-50"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 pb-16 space-y-10">
        <section id="info">
          <h2 className="text-xl font-semibold text-slate-800">
            1. Information Collected
          </h2>
          <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <span className="font-medium">Provided by the user:</span>{" "}
              full name, email, phone number, delivery address, payment details.
            </li>
            <li>
              <span className="font-medium">Automatically collected:</span> IP address,
              device/browser information, page view statistics, referring URL.
            </li>
            <li>
              <span className="font-medium">From third parties:</span> limited data
              from services such as payment providers, analytics tools (e.g., Google Analytics).
            </li>
          </ul>
        </section>

        <section id="use">
          <h2 className="text-xl font-semibold text-slate-800">
            2. Purposes of Use
          </h2>
          <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
            <li>Processing orders, billing, and delivery.</li>
            <li>Customer support and account management.</li>
            <li>Improving site functionality and user experience.</li>
            <li>
              Campaign and announcement messages (only with your consent;
              you may opt out at any time).
            </li>
            <li>Security, fraud prevention, and misuse prevention.</li>
          </ul>
        </section>

        <section id="share">
          <h2 className="text-xl font-semibold text-slate-800">
            3. Information Sharing
          </h2>
          <p className="mt-3 text-gray-700">
            We do not share your personal information with third parties
            except in the following cases:
          </p>
          <ul className="mt-2 list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <span className="font-medium">Service providers:</span> shipping,
              payment infrastructure, hosting, analytics, etc. (only as necessary).
            </li>
            <li>
              <span className="font-medium">Legal obligations:</span> requests from
              official authorities under applicable laws.
            </li>
            <li>
              <span className="font-medium">Explicit consent:</span> when you approve sharing.
            </li>
          </ul>
        </section>

        <section id="retention">
          <h2 className="text-xl font-semibold text-slate-800">
            4. Data Retention Period
          </h2>
          <p className="mt-3 text-gray-700">
            Data is retained for as long as necessary for the purposes for which it was collected,
            taking into account the minimum/maximum periods required by applicable laws.
            Once the period expires, data is securely deleted, anonymized, or archived.
          </p>
        </section>

        <section id="security">
          <h2 className="text-xl font-semibold text-slate-800">
            5. Security Measures
          </h2>
          <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
            <li>SSL/TLS encryption during transmission.</li>
            <li>Access authorization and audit mechanisms.</li>
            <li>Up-to-date security patches and infrastructure monitoring.</li>
          </ul>
          <p className="mt-2 text-gray-700">
            No method of transmission over the internet is 100% secure; we apply reasonable
            measures with the utmost care.
          </p>
        </section>

        <section id="rights">
          <h2 className="text-xl font-semibold text-slate-800">
            6. User Rights (KVKK/GDPR)
          </h2>
          <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
            <li>Access and request information about your data.</li>
            <li>Request corrections and updates.</li>
            <li>Request deletion/erasure (subject to legal exceptions).</li>
            <li>Opt out of marketing communications at any time.</li>
            <li>
              Object to processing and request data portability
              (where applicable).
            </li>
          </ul>
          <p className="mt-2 text-gray-700">
            To exercise these rights, please contact{" "}
            <a
              href="mailto:privacy@cafezo.com"
              className="underline underline-offset-4"
            >
              privacy@cafezo.com
            </a>.
          </p>
        </section>

        <section id="cookies">
          <h2 className="text-xl font-semibold text-slate-800">
            7. Cookies and Similar Technologies
          </h2>
          <p className="mt-3 text-gray-700">
            We use cookies for site functionality and usage analytics.
            You can manage or disable your cookie preferences via your browser settings.
            Disabling cookies may affect the functionality of some features.
          </p>
          <div className="mt-4 border rounded-xl divide-y">
            <details className="p-4">
              <summary className="cursor-pointer font-medium">
                What are essential cookies?
              </summary>
              <p className="mt-2 text-gray-700">
                These are necessary for core functions such as maintaining sessions
                and managing the cart, and cannot be disabled.
              </p>
            </details>
            <details className="p-4">
              <summary className="cursor-pointer font-medium">
                What are analytics cookies?
              </summary>
              <p className="mt-2 text-gray-700">
                Cookies that help us measure visit and interaction statistics.
                They are subject to your consent.
              </p>
            </details>
          </div>
        </section>

        <section id="contact">
          <h2 className="text-xl font-semibold text-slate-800">8. Contact</h2>
          <p className="mt-3 text-gray-700">
            For questions about our privacy policy:
          </p>
          <ul className="mt-2 text-gray-700">
            <li>
              📧{" "}
              <a
                href="mailto:privacy@cafezo.com"
                className="underline underline-offset-4"
              >
                info@cafezo.com
              </a>
            </li>
            <li>📍 Istanbul, Türkiye</li>
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            This policy may be updated from time to time.
            Changes take effect once published on this page.
          </p>
        </section>
      </section>
    </main>
  );
}
