import { Button, Column, Heading, Text } from "@once-ui-system/core";
import Link from "next/link";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160" gap="16">
      <Text variant="display-strong-xl" onBackground="brand-medium">
        404
      </Text>
      <Heading variant="display-default-xs">
        System Defect Detected
      </Heading>
      <Text onBackground="neutral-weak">
        The requested module could not be compiled. The path you are looking for has either been refactored or never existed.
      </Text>
      <Column paddingTop="32">
        <Button href="/" variant="primary" label="returnToHome();" />
      </Column>
    </Column>
  );
}
