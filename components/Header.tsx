"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Начало" },
  { href: "/cars", label: "Автомобили" },
  { href: "/leasing", label: "Лизинг" },
  { href: "/services", label: "Услуги" },
  { href: "/faq", label: "ЧЗВ" },
  { href: "/contact", label: "Контакти" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav className="flex h-22 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <div className="relative h-20 w-[220px] sm:w-[260px] md:w-[320px]">
              <Image
                src="/logo.svg"
                alt="Himera House"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden flex-1 items-center justify-end gap-8 whitespace-nowrap md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`relative text-sm font-medium transition-colors ${
                      active
                        ? "text-neutral-900"
                        : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-neutral-900" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="relative z-[110] inline-flex items-center justify-center rounded-md p-2 text-neutral-800 hover:bg-neutral-100 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-0 block h-[2px] w-6 bg-current transition-transform duration-200 ${
                  open ? "translate-y-[9px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] block h-[2px] w-6 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[18px] block h-[2px] w-6 bg-current transition-transform duration-200 ${
                  open ? "-translate-y-[9px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        {/* Backdrop: starts UNDER the header so logo + icon stay visible */}
        <button
          aria-label="Close menu"
          className={`fixed inset-x-0 bottom-0 top-20 z-[80] bg-black/30 backdrop-blur-sm transition-opacity ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Panel: full width under header */}
        <div
          className={`fixed inset-x-0 top-20 z-[90] border-t border-neutral-200 bg-white shadow-lg transition-all duration-200 ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-4 py-4">
            <ul className="flex flex-col gap-2">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`block w-full rounded-lg px-4 py-3 text-sm font-medium transition ${
                        active
                          ? "bg-neutral-900 text-white"
                          : "text-neutral-800 hover:bg-neutral-100"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
