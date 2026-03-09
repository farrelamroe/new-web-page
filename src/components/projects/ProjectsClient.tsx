"use client";

import { useState } from "react";
import { Column, Input, Text } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface Technology {
  name: string;
  icon?: string;
}

interface ProjectMetadata {
  title: string;
  summary: string;
  images: string[];
  link?: string;
  technologies?: Technology[];
}

interface Project {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
}

interface ProjectsClientProps {
  projects: Project[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const [searchValue, setSearchValue] = useState("");

  const filteredProjects = projects.filter((post) => {
    const searchContent =
      post.metadata.title +
      post.metadata.summary +
      post.metadata.technologies?.map((t) => t.name).join(" ") +
      post.content;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <Column fillWidth gap="xl" marginBottom="40">
      {/* Search Input for Projects */}
      <Column fillWidth gap="8" marginBottom="32">
        <Input
          id="project-search"
          label="Search Projects"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search by title, technology, or description..."
          hasPrefix={<span style={{ paddingLeft: "12px", color: "var(--neutral-on-background-weak)" }}>🔍</span>}
        />
      </Column>

      {/* Projects List */}
      {!filteredProjects.length && (
        <Text variant="body-default-m" onBackground="neutral-weak">
          No projects found for "{searchValue}".
        </Text>
      )}

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
  );
}
