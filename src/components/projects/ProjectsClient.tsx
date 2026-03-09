"use client";

import { useState } from "react";
import { Button, Column, Input, Row, Text } from "@once-ui-system/core";
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
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "AI & Data", "Mobile"];

  const filteredProjects = projects.filter((post) => {
    // Category filter logic
    let matchesCategory = true;
    const techWords = post.metadata.technologies?.map(t => t.name.toLowerCase()).join(" ") || "";
    const titleAndSummary = (post.metadata.title + " " + post.metadata.summary).toLowerCase();
    const fullSearchStr = (techWords + " " + titleAndSummary + " " + post.content).toLowerCase();

    if (activeCategory === "Frontend") {
      matchesCategory = /react|next|vue|angular|tailwind|bootstrap|scss|html|frontend/i.test(techWords + " " + titleAndSummary);
    } else if (activeCategory === "Backend") {
      matchesCategory = /node|express|go |golang|java|sql|postgres|redis|elastic|api|backend/i.test(techWords + " " + titleAndSummary);
    } else if (activeCategory === "AI & Data") {
      matchesCategory = /python|streamlit|tensorflow|keras|llm|gemini|groq|bilstm|machine learning|data monitoring/i.test(techWords + " " + titleAndSummary);
    } else if (activeCategory === "Mobile") {
      matchesCategory = /flutter|dart|mobile/i.test(techWords + " " + titleAndSummary);
    }

    const matchesSearch = fullSearchStr.includes(searchValue.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <Column fillWidth gap="xl" marginBottom="40">
      <Column fillWidth gap="24" marginBottom="32">
        {/* Search Input for Projects */}
        <Input
          id="project-search"
          label="Search Projects"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search by title, technology, or description..."
          hasPrefix={<span style={{ paddingLeft: "12px", color: "var(--neutral-on-background-weak)" }}>🔍</span>}
        />

        {/* Category Filters */}
        <Row wrap gap="8" fillWidth>
          {categories.map((category) => (
            <Button
              key={category}
              label={category}
              size="s"
              weight="default"
              variant={activeCategory === category ? "primary" : "secondary"}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </Row>
      </Column>

      {/* Projects List */}
      {!filteredProjects.length && (
        <Text variant="body-default-m" onBackground="neutral-weak">
          No projects found for "{searchValue}" {activeCategory !== "All" ? `in ${activeCategory}` : ""}.
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
