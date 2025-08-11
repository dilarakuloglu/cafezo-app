"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-gray/500 mt-16">
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray/500 text-sm">
            © {new Date().getFullYear()} CafeZo — All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/privacy"
              className="hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <span className="opacity-40">•</span>
            <Link
              href="/terms"
              className="hover:underline underline-offset-4"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
