"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Column, Input, Row, Text, Flex } from "@once-ui-system/core";
import { person, routes, social } from "@/resources";

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  // Handle Ctrl+K / Cmd+K toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isOpen) return null;

  const validRoutes = Object.keys(routes).filter((r) => routes[r as keyof typeof routes]);
  const defaultCommands = [
    { label: "Home", shortcut: "H", action: () => router.push("/") },
    ...validRoutes.map((route) => ({
      label: route.replace("/", "").charAt(0).toUpperCase() + route.slice(2),
      shortcut: "R",
      action: () => router.push(route),
    })),
    {
      label: "Download CV",
      shortcut: "CV",
      action: () => {
        const cvLink = social.find((s) => s.name === "CV" || s.icon === "cv")?.link;
        if (cvLink) window.open(cvLink, "_blank");
      },
    },
    {
      label: "Contact Me",
      shortcut: "C",
      action: () => {
        window.location.href = `mailto:${person.email}`;
      },
    },
  ];

  const filteredCommands = defaultCommands.filter((cmd) =>
    cmd.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "var(--neutral-alpha-medium)",
        backdropFilter: "blur(4px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "15vh",
      }}
      onClick={() => setIsOpen(false)}
      onKeyDown={(e) => {
        if (e.key === "Escape") setIsOpen(false);
      }}
      role="presentation"
    >
      <Column
        onClick={(e) => e.stopPropagation()}
        background="page"
        radius="l"
        shadow="xl"
        gap="0"
        style={{ 
          overflow: "hidden", 
          width: "90%", 
          maxWidth: "550px", 
          border: "1px solid var(--neutral-border-medium)" 
        }}
      >
        <div style={{ padding: "var(--static-space-12)" }}>
          <Input
            id="cmd-palette-search"
            label=""
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Type a command or search..."
            hasPrefix={<span style={{ paddingLeft: "12px", color: "var(--neutral-on-background-weak)" }}>⌘</span>}
            autoFocus
          />
        </div>

        <Column
          fillWidth
          gap="2"
          padding="8"
          style={{ maxHeight: "400px", overflowY: "auto", borderTop: "1px solid var(--neutral-alpha-weak)" }}
        >
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd) => (
              <Row
                key={cmd.label}
                fillWidth
                vertical="center"
                horizontal="between"
                padding="12"
                radius="m"
                style={{ cursor: "pointer", transition: "var(--transition-micro)" }}
                className="hover-bg-neutral-alpha-weak"
                onClick={() => {
                  cmd.action();
                  setIsOpen(false);
                }}
              >
                <Text variant="body-strong-m">{cmd.label}</Text>
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  {cmd.shortcut}
                </Text>
              </Row>
            ))
          ) : (
            <Row padding="16" horizontal="center">
              <Text variant="body-default-s" onBackground="neutral-weak">
                No results found.
              </Text>
            </Row>
          )}
        </Column>

        <Row fillWidth padding="12" background="neutral-alpha-weak" style={{ borderTop: "1px solid var(--neutral-border-weak)" }}>
           <Text variant="body-default-xs" onBackground="neutral-weak">
              Use <kbd style={{ padding: '2px 6px', background: 'var(--neutral-alpha-strong)', borderRadius: '4px', border: '1px solid var(--neutral-border-medium)'}}>↑</kbd> <kbd style={{ padding: '2px 6px', background: 'var(--neutral-alpha-strong)', borderRadius: '4px', border: '1px solid var(--neutral-border-medium)'}}>↓</kbd> to navigate, <kbd style={{ padding: '2px 6px', background: 'var(--neutral-alpha-strong)', borderRadius: '4px', border: '1px solid var(--neutral-border-medium)'}}>Enter</kbd> to select, <kbd style={{ padding: '2px 6px', background: 'var(--neutral-alpha-strong)', borderRadius: '4px', border: '1px solid var(--neutral-border-medium)'}}>Esc</kbd> to close.
           </Text>
        </Row>
      </Column>
    </div>
  );
};
