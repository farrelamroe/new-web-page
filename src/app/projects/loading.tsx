import { Column, Row, Flex, Skeleton, Grid, Heading } from "@once-ui-system/core";

export default function Loading() {
  // Create an array of 6 elements to represent loading cards
  const skeletons = Array(6).fill(0);

  return (
    <Column maxWidth="m">
      <Column fillWidth marginBottom="40">
        {/* Title area skeleton */}
        <Skeleton shape="line" width="xl" height="l" radius="s" />
        <Flex marginTop="16" marginBottom="32">
          <Skeleton shape="line" width="xl" height="m" radius="s" />
        </Flex>

        {/* Filter bar skeleton */}
        <Row fillWidth marginBottom="32" gap="8">
          <Skeleton shape="line" width="l" height="l" radius="m" />
          <Skeleton shape="line" width="l" height="l" radius="m" />
          <Skeleton shape="line" width="xl" height="l" radius="m" />
          <Skeleton shape="line" width="l" height="l" radius="m" />
        </Row>
      </Column>

      {/* Grid of project card skeletons */}
      <Grid columns="3" gap="m">
        {skeletons.map((_, i) => (
          <Column
            key={`skeleton-card-${i}`}
            fillWidth
            padding="24"
            gap="16"
            border="neutral-alpha-weak"
            radius="l"
            background="surface"
          >
            <Flex fillWidth>
              <Skeleton shape="line" width="l" height="m" radius="s" />
            </Flex>
            <Skeleton shape="line" width="xl" height="m" radius="s" />
            <Skeleton shape="line" width="l" height="m" radius="s" />
            <Row gap="8" marginTop="16">
              <Skeleton shape="line" width="m" height="m" radius="m" />
              <Skeleton shape="line" width="l" height="m" radius="m" />
            </Row>
          </Column>
        ))}
      </Grid>
    </Column>
  );
}
