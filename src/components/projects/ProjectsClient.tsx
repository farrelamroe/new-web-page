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
  locale?: "en" | "id";
}

export function ProjectsClient({ projects, locale = "en" }: ProjectsClientProps) {
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const isID = locale === "id";

  const categoryAll = isID ? "Semua" : "All";
  const categoryFrontend = "Frontend";
  const categoryBackend = "Backend";
  const categoryAIData = "AI & Data";
  const categoryMobile = "Mobile";

  const categories = [categoryAll, categoryFrontend, categoryBackend, categoryAIData, categoryMobile];

  // Initialize activeCategory properly based on locale if it's default
  // But wait, if they switch language, `activeCategory` might be stuck on "All" instead of "Semua". Let's handle it by treating "All" and "Semua" interchangeably for filtering.
  const isAllCategory = activeCategory === "All" || activeCategory === "Semua";

  const filteredProjects = projects.filter((post) => {
    // Category filter logic
    let matchesCategory = true;
    const techWords = post.metadata.technologies?.map(t => t.name.toLowerCase()).join(" ") || "";
    const titleAndSummary = `${post.metadata.title} ${post.metadata.summary}`.toLowerCase();
    const fullSearchStr = `${techWords} ${titleAndSummary} ${post.content}`.toLowerCase();

    if (activeCategory === categoryFrontend) {
      matchesCategory = /react|next|vue|angular|tailwind|bootstrap|scss|html|frontend/i.test(`${techWords} ${titleAndSummary}`);
    } else if (activeCategory === categoryBackend) {
      matchesCategory = /node|express|go |golang|java|sql|postgres|redis|elastic|api|backend/i.test(`${techWords} ${titleAndSummary}`);
    } else if (activeCategory === categoryAIData) {
      matchesCategory = /python|streamlit|tensorflow|keras|llm|gemini|groq|bilstm|machine learning|data monitoring/i.test(`${techWords} ${titleAndSummary}`);
    } else if (activeCategory === categoryMobile) {
      matchesCategory = /flutter|dart|mobile/i.test(`${techWords} ${titleAndSummary}`);
    }

    const matchesSearch = fullSearchStr.includes(searchValue.toLowerCase());

    // Fix: if it's 'All' or 'Semua', let it match category unconditionally
    return (isAllCategory ? true : matchesCategory) && matchesSearch;
  });

  return (
    <Column fillWidth gap="xl" marginBottom="40">
      <Column fillWidth gap="24" marginBottom="32">
        {/* Search Input for Projects */}
        <Input
          id="project-search"
          label={isID ? "Cari Proyek" : "Search Projects"}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={isID ? "Cari berdasarkan judul, teknologi, atau deskripsi..." : "Search by title, technology, or description..."}
          hasPrefix={<span style={{ paddingLeft: "12px", color: "var(--neutral-on-background-weak)" }}>🔍</span>}
        />

        {/* Category Filters */}
        <Row wrap gap="8" fillWidth>
          {categories.map((category) => {
            // Also need to correctly show 'primary' variant if they are identical 
            const isActive = activeCategory === category || 
              (isAllCategory && (category === "All" || category === "Semua"));

            return (
              <Button
                key={category}
                label={category}
                size="s"
                weight="default"
                variant={isActive ? "primary" : "secondary"}
                onClick={() => setActiveCategory(category)}
              />
            );
          })}
        </Row>
      </Column>

      {/* Projects List */}
      {!filteredProjects.length && (
        <Text variant="body-default-m" onBackground="neutral-weak">
          {isID 
            ? `Tidak ada proyek yang ditemukan untuk "${searchValue}" ${isAllCategory ? "" : `di kategori ${activeCategory}`}.`
            : `No projects found for "${searchValue}" ${isAllCategory ? "" : `in ${activeCategory}`}.`
          }
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
