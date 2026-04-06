import { Row, IconButton, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

type FooterProps = {
  builtWith: string;
  by: string;
};

export const Footer = ({ builtWith, by }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} / {builtWith} Next.js {by}</Text>
          <Text paddingX="4">{person.name}</Text>
        </Text>
        <Row gap="16">
          {social.map(
            (item: { name: string; icon: string; link: string }) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
          {/* <IconButton
            href="/api/rss"
            icon="link"
            tooltip="RSS Feed"
            size="s"
            variant="ghost"
          /> */}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
