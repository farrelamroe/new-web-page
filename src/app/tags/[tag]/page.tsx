import { getPosts } from "@/utils/utils";
import { getLocale } from "@/app/dictionaries";
import { Column, Heading, Text, RevealFx, Flex } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import { baseURL } from "@/resources";

export async function generateStaticParams() {
  const allProjects = getPosts(["src", "app", "projects", "projects", "en"]);
  const tags = new Set<string>();

  for (const project of allProjects) {
    if (project.metadata.technologies) {
      for (const tech of project.metadata.technologies) {
        tags.add(tech.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"));
      }
    }
  }

  return Array.from(tags).map((tag) => ({
    tag: tag,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const tagTitle = tag.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return {
    title: `${tagTitle} Projects | Farrel Amroe Azhari`,
    description: `Projects built using ${tagTitle}.`,
    openGraph: {
      title: `${tagTitle} Projects | Farrel Amroe Azhari`,
      description: `Projects built using ${tagTitle}.`,
      url: `${baseURL}/tags/${tag}`,
      siteName: "Farrel Amroe Azhari",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: `${tagTitle} Projects | Farrel Amroe Azhari`,
      description: `Projects built using ${tagTitle}.`,
      card: "summary_large_image",
    },
  };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const locale = await getLocale();
  const allProjects = getPosts(["src", "app", "projects", "projects", locale]);
  const displayTitle = tag.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const filteredProjects = allProjects.filter((project) => {
    if (!project.metadata.technologies) return false;
    return project.metadata.technologies.some(
      (tech) => tech.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === tag
    );
  });

  return (
    <Column maxWidth="m" paddingTop="24" fillWidth>
      <Column fillWidth paddingX="l" gap="m">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          {displayTitle}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" align="center" marginBottom="32">
          {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} built with this technology.
        </Text>

        <Column fillWidth gap="xl" marginBottom="40">
          {filteredProjects.map((post, index) => (
            <ProjectCard
              key={post.slug}
              priority={index < 2}
              href={`/projects/${post.slug}`}
              images={post.metadata.images}
              title={post.metadata.title}
              description={post.metadata.summary}
              content={post.content}
              avatars={[]}
              technologies={post.metadata.technologies || []}
              link={post.metadata.link || ""}
            />
          ))}
        </Column>
      </Column>
    </Column>
  );
}
