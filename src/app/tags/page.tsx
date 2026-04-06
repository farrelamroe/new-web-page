import { getPosts } from "@/utils/utils";
import { Column, Heading, Text, Row, Tag, RevealFx, Flex } from "@once-ui-system/core";
import Link from "next/link";
import { baseURL } from "@/resources";
import { getLocale } from "@/app/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const title = locale === "id" ? "Label | Farrel Amroe Azhari" : "Tags | Farrel Amroe Azhari";
  const desc = locale === "id" ? "Jelajahi proyek berdasarkan keterampilan teknis dan kategori." : "Explore projects by technical skills and categories.";
  return {
    title: title,
    description: desc,
    openGraph: {
      title: title,
      description: desc,
      url: `${baseURL}/tags`,
      siteName: "Farrel Amroe Azhari",
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    twitter: {
      title: title,
      description: desc,
      card: "summary_large_image",
    },
  };
}

export default async function Tags() {
  const locale = await getLocale();
  const allProjects = getPosts(["src", "app", "projects", "projects", locale]);

  // Extract and count all tags (technologies) safely
  const tagCounts: Record<string, { count: number; icon?: string; name: string }> = {};

  for (const project of allProjects) {
    if (project.metadata.technologies && Array.isArray(project.metadata.technologies)) {
      for (const tech of project.metadata.technologies) {
        // Create a URL-safe slug for the tag
        const slug = tech.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        
        if (tagCounts[slug]) {
          tagCounts[slug].count++;
        } else {
          tagCounts[slug] = {
            count: 1,
            icon: tech.icon,
            name: tech.name, // Keep the original formatted name
          };
        }
      }
    }
  }

  // Sort tags by frequency (most used first)
  const sortedTagKeys = Object.keys(tagCounts).sort(
    (a, b) => tagCounts[b].count - tagCounts[a].count
  );

  return (
    <Column maxWidth="m" paddingTop="24" fillWidth>
      <Column fillWidth paddingX="l" gap="m">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Tags
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" align="center" marginBottom="32">
          Explore projects organized by technology stack and tools.
        </Text>

        <Flex wrap gap="16">
          {sortedTagKeys.length === 0 && <Text>No tags found.</Text>}
          {sortedTagKeys.map((tagSlug) => {
            const tagData = tagCounts[tagSlug];
            return (
              <Link key={tagSlug} href={`/tags/${tagSlug}`} style={{ textDecoration: "none" }}>
                <Row vertical="center" gap="8" className="interactive-tag-container" style={{ cursor: "pointer" }}>
                  <Tag size="l" prefixIcon={tagData.icon} className={`interactive-tag${tagData.icon ? ` tag-icon-${tagData.icon}` : ""}`}>
                    {tagData.name}
                  </Tag>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    ({tagData.count})
                  </Text>
                </Row>
              </Link>
            );
          })}
        </Flex>
      </Column>
    </Column>
  );
}
