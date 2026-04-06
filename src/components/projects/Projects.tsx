import { getPosts } from "@/utils/utils";
import { ProjectsClient } from "./ProjectsClient";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  locale?: "en" | "id";
}

export function Projects({ range, exclude, locale = "en" }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "projects", "projects", locale]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return <ProjectsClient projects={displayedProjects} locale={locale} />;
}
