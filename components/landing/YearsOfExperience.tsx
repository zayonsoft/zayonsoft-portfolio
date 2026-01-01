"use client";
import CurrentYear from "./CurrentYear";

export default function YearsOfExperience() {
  const startYear = Number(process.env.NEXT_PUBLIC_START_YEAR) || CurrentYear();
  return CurrentYear() - startYear;
}
