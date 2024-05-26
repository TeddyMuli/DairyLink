"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-row gap-4 justify-center place-items-center">
      <Link href="/terms">Terms of Service</Link>
      <Link href="/privacypolicy">Privacy Policy</Link>
      <p>© {currentYear} DairyLink</p>
    </div>
  );
}
