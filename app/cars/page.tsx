"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { cars as carsData, type Car } from "@/data/cars";

const MOBILE_BG = "https://himera.mobile.bg";

function statusLabel(status: any) {
  switch (status) {
    case "available":
      return "Налична";
    case "reserved":
      return "Капарирана";
    case "sold":
      return "Продадена";
    case "germany":
      return "Налична в Германия";
    default:
      return null;
  }
}

function statusClass(status: any) {
  // neutral palette only (matches your site)
  switch (status) {
    case "available":
      return "bg-emerald-50 text-emerald-900 border-emerald-200";
    case "reserved":
      return "bg-amber-50 text-amber-900 border-amber-200";
    case "sold":
      return "bg-gray-100 text-gray-700 border-gray-200";
    case "germany":
      return "bg-blue-50 text-blue-900 border-blue-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function CarCard({ car }: { car: Car }) {
  const [active, setActive] = useState(0);
  const img = car.images[Math.min(active, car.images.length - 1)];

  const badge = statusLabel((car as any).status);

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="relative h-56 w-full bg-gray-100">
        <Image
          src={img}
          alt={car.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />

        {/* Prepared status badge (enable when you start using status in data) */}
        {badge && (
          <div className="absolute left-4 top-4">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${statusClass(
                (car as any).status
              )}`}
            >
              {badge}
            </span>
          </div>
        )}

        {/* Simple image dots if multiple photos */}
        {car.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur-sm">
            {car.images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Image ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 w-2 rounded-full ${
                  i === active ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-base font-semibold text-gray-900">{car.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{car.subtitle}</p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
          {car.year ? (
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
              {car.year}
            </span>
          ) : null}
          {car.fuel ? (
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
              {car.fuel}
            </span>
          ) : null}
          {car.transmission ? (
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
              {car.transmission}
            </span>
          ) : null}
          {typeof car.mileageKm === "number" ? (
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
              {car.mileageKm.toLocaleString("bg-BG")} км
            </span>
          ) : null}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-gray-900">
            {car.price ?? "По запитване"}
          </span>

          <a
            href={car.mobileBgUrl || MOBILE_BG}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-xs font-medium text-white hover:bg-gray-800"
          >
            Виж в mobile.bg
          </a>
        </div>
      </div>
    </article>
  );
}

export default function CarsPage() {
  const [query, setQuery] = useState("");
  const [fuel, setFuel] = useState<string>("all");
  const [trans, setTrans] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return carsData.filter((c) => {
      const matchesQ =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.subtitle.toLowerCase().includes(q);

      const matchesFuel = fuel === "all" ? true : c.fuel === fuel;
      const matchesTrans = trans === "all" ? true : c.transmission === trans;

      return matchesQ && matchesFuel && matchesTrans;
    });
  }, [query, fuel, trans]);

  return (
    <main className="min-h-screen bg-white">
      {/* Page header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                Автомобили
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
                Разгледайте актуалните предложения. За цена и условия — вижте
                обявата в mobile.bg или се свържете с нас.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={MOBILE_BG}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800"
                >
                  Всички обяви в mobile.bg
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50"
                >
                  Запитване
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-gray-700">
              <div className="text-xs text-gray-500">Резултати</div>
              <div className="mt-1 font-semibold text-gray-900">
                {filtered.length} автомобила
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Търсене (марка, модел...)"
              className="h-11 w-full rounded-md border border-gray-200 px-4 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
            />

            <select
              value={fuel}
              onChange={(e) => setFuel(e.target.value)}
              className="h-11 w-full rounded-md border border-gray-200 px-4 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
            >
              <option value="all">Гориво (всички)</option>
              <option value="Бензин">Бензин</option>
              <option value="Дизел">Дизел</option>
              <option value="Хибрид">Хибрид</option>
              <option value="Електрически">Електрически</option>
            </select>

            <select
              value={trans}
              onChange={(e) => setTrans(e.target.value)}
              className="h-11 w-full rounded-md border border-gray-200 px-4 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
            >
              <option value="all">Скоростна кутия (всички)</option>
              <option value="Автоматик">Автоматик</option>
              <option value="Ръчни">Ръчни</option>
            </select>

            <a
              href={MOBILE_BG}
              target="_blank"
              rel="noreferrer"
              className="h-11 rounded-md bg-gray-900 px-4 text-sm font-medium text-white hover:bg-gray-800 inline-flex items-center justify-center"
            >
              Отвори mobile.bg
            </a>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-sm text-gray-600">
              Няма намерени резултати. Опитайте с друга ключова дума или филтри.
            </div>
          )}

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Не намирате търсения автомобил?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Изпратете запитване и ще ви предложим варианти според бюджет и
              изисквания — включително внос по заявка.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                Свържете се с нас
              </Link>
              <a
                href={MOBILE_BG}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                Всички обяви в mobile.bg
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
