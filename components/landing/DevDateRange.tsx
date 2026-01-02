"use client";
import CurrentYear from "./CurrentYear";
export default function DevDateRange() {
  const yearDeveloped = process.env.NEXT_PUBLIC_YEAR_DEVELOPED || 2025;
  return CurrentYear() == yearDeveloped
    ? `${2025}`
    : `${yearDeveloped} - ${CurrentYear()}`;
}
