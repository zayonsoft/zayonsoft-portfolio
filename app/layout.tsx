import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZAYONSOFT PORTFOLIO | TONY-AKINLOSOTU FAVOUR ADENIRAN",
  description: "TONY-AKINLOSOTU FAVOUR ADENIRAN",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
