"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, Row, ToggleButton, Button } from "@once-ui-system/core";

import { routes, display, person, about, work } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

const getActiveCookieLocale = (): "en" | "id" => {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|;\s*)NEXT_LOCALE=([^;]+)/);
  const val = match?.[1];
  return val === "id" ? "id" : "en";
};

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const [activeLocale, setActiveLocale] = useState<"en" | "id">("en");

  useEffect(() => {
    setActiveLocale(getActiveCookieLocale());
  }, []);

  const switchLanguage = (locale: "en" | "id") => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    setActiveLocale(locale);
    router.refresh();
  };

  const isID = activeLocale === "id";

  const navLabels = {
    about:        isID ? "Tentang"     : about.label,
    projects:     isID ? "Proyek"      : work.label,
    experience:   isID ? "Pengalaman"  : "Experience",
    certificates: isID ? "Sertifikat"  : "Certificates",
    tags:         isID ? "Label"        : "Tags",
  };

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        <Row paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Row s={{ hide: true }}>{person.location}</Row>}
        </Row>
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>

              {routes["/about"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      label={navLabels.about}
                      selected={pathname === "/about"}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      label={pathname === "/about" ? navLabels.about : undefined}
                      selected={pathname === "/about"}
                    />
                  </Row>
                </>
              )}
              {routes["/projects"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="rocket"
                      href="/projects"
                      label={navLabels.projects}
                      selected={pathname.startsWith("/projects")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="rocket"
                      href="/projects"
                      label={pathname.startsWith("/projects") ? navLabels.projects : undefined}
                      selected={pathname.startsWith("/projects")}
                    />
                  </Row>
                </>
              )}
              {routes["/experience"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="work"
                      href="/experience"
                      label={navLabels.experience}
                      selected={pathname.startsWith("/experience")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="work"
                      href="/experience"
                      label={pathname.startsWith("/experience") ? navLabels.experience : undefined}
                      selected={pathname.startsWith("/experience")}
                    />
                  </Row>
                </>
              )}
              {routes["/certificates"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="certificate"
                      href="/certificates"
                      label={navLabels.certificates}
                      selected={pathname.startsWith("/certificates")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="certificate"
                      href="/certificates"
                      label={pathname.startsWith("/certificates") ? navLabels.certificates : undefined}
                      selected={pathname.startsWith("/certificates")}
                    />
                  </Row>
                </>
              )}
              {routes["/tags"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="hashtag"
                      href="/tags"
                      label={navLabels.tags}
                      selected={pathname.startsWith("/tags")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="hashtag"
                      href="/tags"
                      label={pathname.startsWith("/tags") ? navLabels.tags : undefined}
                      selected={pathname.startsWith("/tags")}
                    />
                  </Row>
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
              {/* Language Switcher */}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              <Row gap="4" vertical="center" paddingX="8">
                {(["en", "id"] as const).map((lang) => {
                  const isActive = activeLocale === lang;
                  return (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => switchLanguage(lang)}
                      suppressHydrationWarning
                      style={{
                        position: "relative",
                        padding: "3px 10px",
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        cursor: "pointer",
                        border: isActive
                          ? "1.5px solid var(--brand-alpha-strong)"
                          : "1.5px solid transparent",
                        background: isActive
                          ? "var(--brand-alpha-weak)"
                          : "transparent",
                        color: isActive
                          ? "var(--brand-on-background-medium)"
                          : "var(--neutral-medium)",
                        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                        boxShadow: "none",
                        transform: isActive ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      {lang.toUpperCase()}
                      {isActive && (
                        <span
                          style={{
                            position: "absolute",
                            inset: -3,
                            borderRadius: 9,
                            border: "1.5px solid var(--brand-solid-strong)",
                            opacity: 0,
                            animation: "langPulse 1.8s ease-out infinite",
                            pointerEvents: "none",
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </Row>
            </Row>
          </Row>
        </Row>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex s={{ hide: true }}>
              {display.time && <TimeDisplay timeZone={person.location} />}
            </Flex>
          </Flex>
        </Flex>
      </Row>
    </>
  );
};
