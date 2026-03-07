import { Column, Heading, Meta, Tag, Text, RevealFx, Grid, Flex } from "@once-ui-system/core";
import { baseURL, work } from "@/resources";
import { getTags } from "@/utils/posts";
import Link from "next/link";

export async function generateMetadata() {
  return Meta.generate({
    title: `Tags – ${work.title}`,
    description: "Explore projects by technology tags.",
    baseURL: baseURL,
    path: "/projects/tags",
  });
}

export default function TagsPage() {
  const tagCounts = getTags();
  const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <RevealFx delay={0.2}>
        <Heading variant="display-strong-s" align="center">
          All Technologies
        </Heading>
      </RevealFx>
      <Grid columns="5" m={{ columns: 4 }} s={{ columns: 2 }} gap="8" paddingX="l">
        {sortedTags.map(([tag, count], index) => (
          <RevealFx key={tag} delay={0.05 * index}>
            <Link href={`/projects/tags/${tag.toLowerCase()}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <Flex
                fillWidth
                paddingX="12"
                paddingY="16"
                radius="l"
                border="neutral-alpha-medium"
                gap="4"
                vertical="center"
                horizontal="center"
                direction="column"
                className="interactive-tag"
                style={{ 
                  height: '100%',
                  minHeight: '100px'
                }}
              >
                <Tag size="s">{tag}</Tag>
                <Text variant="label-default-xs" onBackground="neutral-weak" align="center">
                  {count} {count === 1 ? 'project' : 'projects'}
                </Text>
              </Flex>
            </Link>
          </RevealFx>
        ))}
      </Grid>
    </Column>
  );
}
