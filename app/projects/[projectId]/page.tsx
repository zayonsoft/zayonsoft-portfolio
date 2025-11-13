import Nav from "@/components/landing/Nav";
import Content from "./Content";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  console.log(projectId);
  return (
    <section>
      <div className="relative z-[100000]">
        <Nav />
      </div>
      <div className="pt-23 max-[701px]:pt-15">
        <Content projectId={projectId} />
      </div>
    </section>
  );
}
