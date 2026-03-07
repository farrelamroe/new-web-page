import {
  Column,
  Flex,
  Heading,
  Row,
  Text,
  IconButton,
  Tag,
  RevealFx,
} from "@once-ui-system/core";
import { getPosts } from "@/utils/posts";
import { baseURL, person } from "@/resources";
import { CustomMDX } from "@/components";
import { Projects } from "@/components/projects/Projects";
import { notFound } from "next/navigation";
import { ScrollToHash } from "@/components";

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts(["src", "app", "projects", "projects"]).find((post) => post.slug === slugPath);

  if (!post) {
    return {};
  }

  const { title, summary, image } = post.metadata;

  const ogImage = image 
    ? (image.startsWith("http") ? image : `${baseURL}${image}`)
    : `${baseURL}/api/og/generate?title=${encodeURIComponent(title)}`;

  return {
    title: `${title} - ${person.name}`,
    description: summary,
    openGraph: {
      title: `${title} - ${person.name}`,
      description: summary,
      type: "article",
      url: `${baseURL}/projects/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - ${person.name}`,
      description: summary,
      images: [ogImage],
    },
  };
}

interface Technology {
  name: string;
  icon?: string;
}

export default async function Project({ params }: { params: Promise<{ slug: string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "projects", "projects"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  return (
    <Column fillWidth>
      <RevealFx delay={0.2} speed="fast">
        <Heading variant="display-strong-l" marginBottom="24">
          {post.metadata.title}
        </Heading>
      </RevealFx>

      <Row marginBottom="32" wrap gap="8">
        {(post.metadata.technologies || []).map((tech: Technology) => (
          <Tag key={tech.name} size="l" prefixIcon={tech.icon}>
            {tech.name}
          </Tag>
        ))}
      </Row>

      <CustomMDX source={post.content} />

      <Column marginTop="80" fillWidth>
        <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
          Related projects
        </Heading>
        <Projects projects={posts} exclude={[post.slug]} range={[1, 2]} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
