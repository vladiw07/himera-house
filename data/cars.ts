export type CarStatus = "available" | "reserved" | "sold" | "germany";

export type Car = {
  id: string;
  title: string;
  subtitle: string; // e.g. "Автоматик • Дизел • 2019"
  price?: string;   // "по запитване" or "38 900 лв"
  year?: number;
  mileageKm?: number;
  fuel?: "Бензин" | "Дизел" | "Хибрид" | "Електрически";
  transmission?: "Автоматик" | "Ръчни";
  images: string[]; // paths from /public
  mobileBgUrl?: string; // for now: link to the listing
  // status?: CarStatus; // enable later when ready
};

export const cars: Car[] = [
  {
    id: "volvo-s90-2018",
    title: "Volvo S90",
    subtitle: "Автоматик • Дизел • 2018",
    price: "По запитване",
    year: 2018,
    mileageKm: 128000,
    fuel: "Дизел",
    transmission: "Автоматик",
    images: ["/cars/car-1.png", "/cars/car-2.png"],
    mobileBgUrl: "https://himera.mobile.bg", // replace with exact listing later
    // status: "available",
  },
  {
    id: "skoda-octavia-combi-2019",
    title: "Skoda Octavia Combi",
    subtitle: "Автоматик • Дизел • 2019",
    price: "По запитване",
    year: 2019,
    mileageKm: 154000,
    fuel: "Дизел",
    transmission: "Автоматик",
    images: ["/cars/car-2.png"],
    mobileBgUrl: "https://himera.mobile.bg",
    // status: "reserved",
  },
];
