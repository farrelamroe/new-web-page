"use client";

import { useState } from "react";
import { Column, Input, Row, Text, Icon } from "@once-ui-system/core";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";
import type { Metadata } from "@/utils/posts";

interface Technology {
  name: string;
  icon?: string;
}

interface Project {
  metadata: Metadata;
  slug: string;
  content: string;
}

interface ProjectsProps {
  projects: Project[];
  range?: [number, number?];
  exclude?: string[];
  tagFilter?: string;
}

export function Projects({ projects, range, exclude, tagFilter }: ProjectsProps) {
  const [searchValue, setSearchValue] = useState("");
  let allProjects = [...projects];

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  // Filter by tag if prop is provided
  if (tagFilter) {
    allProjects = allProjects.filter((post) =>
      post.metadata.technologies?.some(
        (t: Technology) => t.name.toLowerCase() === tagFilter.toLowerCase()
      )
    );
  }

  // Filter by search value
  const filteredProjects = allProjects.filter((post) => {
    const searchContent = (
      post.metadata.title +
      post.metadata.summary +
      (post.metadata.technologies?.map((t: Technology) => t.name).join(" ") || "")
    ).toLowerCase();
    return searchContent.includes(searchValue.toLowerCase());
  });

  const sortedProjects = filteredProjects.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40">
      {!tagFilter && (
        <Row fillWidth paddingX="l" horizontal="center" gap="12" s={{ direction: 'column' }}>
          <Row maxWidth="s" fillWidth>
            <Input
              id="search-projects"
              label="Search projects"
              placeholder="Search items..."
              value={searchValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
            />
          </Row>
          <Row vertical="center">
            <Link href="/projects/tags" style={{ textDecoration: 'none' }}>
              <Row
                paddingX="12"
                paddingY="4"
                radius="m"
                border="neutral-alpha-medium"
                gap="8"
                vertical="center"
                className="interactive-tag"
                style={{ transition: 'all 0.2s ease' }}
              >
                <Icon name="tag" size="s" onBackground="neutral-weak" />
                <Text variant="label-default-s">View all tags</Text>
              </Row>
            </Link>
          </Row>
        </Row>
      )}

      {displayedProjects.length > 0 ? (
        <Column fillWidth gap="xl" paddingX="l">
          {displayedProjects.map((post, index) => (
            <ProjectCard
              priority={index < 2}
              key={post.slug}
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
      ) : (
        <Column fillWidth vertical="center" paddingTop="xl" gap="m">
          <Icon name="search" size="l" onBackground="neutral-weak" />
          <Text variant="body-default-m" onBackground="neutral-weak">
            No projects found matching your search.
          </Text>
        </Column>
      )}
    </Column>
  );
}
