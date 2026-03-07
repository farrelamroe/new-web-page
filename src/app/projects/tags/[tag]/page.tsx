import { Column, Heading, Meta } from "@once-ui-system/core";
import { baseURL, work } from "@/resources";
import { getPosts, type Metadata } from "@/utils/posts";
import { Projects } from "@/components/projects/Projects";
import { notFound } from "next/navigation";

interface Technology {
  name: string;
  icon?: string;
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const capitalizedTag = decodedTag.charAt(0).toUpperCase() + decodedTag.slice(1);

  return Meta.generate({
    title: `Projects tagged with "${capitalizedTag}"`,
    description: `View all projects using ${capitalizedTag} technology.`,
    baseURL: baseURL,
    path: `/projects/tags/${tag}`,
  });
}

export default async function TagDetailPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const allProjects = getPosts(["src", "app", "projects", "projects"]);

  const hasTag = allProjects.some((p) =>
    (p.metadata as Metadata).technologies?.some((t: Technology) => t.name.toLowerCase() === decodedTag.toLowerCase())
  );

  if (!hasTag) {
    notFound();
  }

  const capitalizedTag = decodedTag.charAt(0).toUpperCase() + decodedTag.slice(1);

  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Heading variant="heading-strong-xl" align="center">
        Projects tagged with "{capitalizedTag}"
      </Heading>
      <Projects tagFilter={decodedTag} projects={allProjects} />
    </Column>
  );
}
