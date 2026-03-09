"use client";

import { GitHubCalendar } from "react-github-calendar";
import { social } from "@/resources";
import { Column, Text, Row } from "@once-ui-system/core";
import { useEffect, useState } from "react";

export const GithubContributions = () => {
  const [mounted, setMounted] = useState(false);

  // Extract GitHub username from global social list
  const githubLink = social?.find((s) => s.name === "GitHub")?.link || "";
  const username = githubLink.split('/').pop() || "";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !username) {
    return null;
  }

  // Define clear colors for the graph based on the current theme
  const themeLevelColors = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <Column
      fillWidth
      padding="32"
      background="surface"
      border="neutral-alpha-weak"
      radius="l"
      shadow="m"
      gap="24"
    >
      <Row fillWidth horizontal="between" vertical="end">
        <Text variant="heading-strong-l">GitHub Activity</Text>
      </Row>
      <Column fillWidth style={{ overflowX: "auto" }} paddingBottom="8">
        <GitHubCalendar
          username={username}
          colorScheme="dark"
          theme={themeLevelColors}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
        />
      </Column>
    </Column>
  );
};
