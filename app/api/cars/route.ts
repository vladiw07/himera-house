import { NextResponse } from "next/server";
import { fetchCarsFromSheet } from "@/lib/carsFromSheet";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const cars = await fetchCarsFromSheet();
  return NextResponse.json(
    { cars },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}
