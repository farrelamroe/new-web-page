"use client";

import { useEffect } from "react";

export const EasterEgg = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const win = window as unknown as { _hasLoggedEasterEgg?: boolean };
      // Prevent running multiple times
      if (win._hasLoggedEasterEgg) return;
      win._hasLoggedEasterEgg = true;

      const art = [
        "  _____                     _ ",
        " |  ___|                   | |",
        " | |_ __ _ _ __ _ __ ___ | |",
        " |  _/ _` | '__| '__/ _ \\| |",
        " | || (_| | |  | | |  __/| |",
        " \\_| \\__,_|_|  |_|  \\___||_|"
      ].join("\\n");

      console.log(
        "%c" + art,
        "color: #2abff0; font-weight: bold; font-family: monospace;"
      );
      console.log(
        "%cHey there! 👋 Looks like you know your way around the DevTools.",
        "font-size: 14px; font-weight: bold;"
      );
      console.log(
        "If you'd like to collaborate or just chat about tech, feel free to reach out!"
      );
    }
  }, []);

  return null;
};
