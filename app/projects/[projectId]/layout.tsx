import { DataProps } from "@/components/landing/Projects";
import fs from "fs/promises";
import type { Metadata } from "next";
import path from "path";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}): Promise<Metadata> {
  let setData = {
    title: "ZAYONSOFT's PORTFOLIO | PROJECT",
    description:
      "One of ZayonSoft - TONY-AKINLOSOTU FAVOUR ADENIRAN's Projects",
    openGraph: {
      title: "ZAYONSOFT's PORTFOLIO | PROJECT",
      description:
        "One of ZayonSoft - TONY-AKINLOSOTU FAVOUR ADENIRAN's Projects",
      images: [`/page_cover.png`],
    },
  };
  try {
    const { projectId } = await params;
    const filePath = path.join(process.cwd(), "public", "data", "data.json");
    const file = await fs.readFile(filePath, "utf-8");
    const dataset = JSON.parse(file) as DataProps[];
    const project = dataset.find((project) => project.id == projectId);

    if (project) {
      setData = {
        title: `${project.name} | ZAYONSOFT'S PORTFOLIO`,
        description: `${project.overview}`,
        openGraph: {
          title: `${project.name}`,
          description: `${project.overview}`,
          images: [`${project.preview_image}`],
        },
      };
    }
  } finally {
    return setData;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`bg-[#292F36]`}> {children}</div>;
}
