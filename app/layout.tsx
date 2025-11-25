import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "ZAYONSOFT | TONY-AKINLOSOTU FAVOUR ADENIRAN",
  description: "TONY-AKINLOSOTU FAVOUR ADENIRAN",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "ZAYONSOFT | TONY-AKINLOSOTU FAVOUR ADENIRAN",
    description:
      "I am a full-stack web developer specializing in building dynamic and responsive web applications using React.js and Next.js on the frontend, paired with Django for backend development. My expertise lies in creating seamless user experiences through modern frontend technologies while ensuring robust, scalable, and secure server-side architectures. I focus on writing clean, maintainable code, integrating APIs, and optimizing applications for performance. From concept to deployment, I deliver end-to-end solutions that are both visually appealing and functionally efficient.",
    images: [`/page_cover.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#292F36]`}>{children}</body>
    </html>
  );
}
