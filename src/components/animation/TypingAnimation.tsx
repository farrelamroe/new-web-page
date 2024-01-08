// components/TypingAnimation.tsx
import React, { useState, useEffect } from "react";

interface TypingAnimationProps {
  originalText: string;
  delay?: number;
  speed?: number;
}

export function TypingAnimation({
  originalText,
  delay,
  speed = 100,
}: TypingAnimationProps): JSX.Element {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < originalText.length) {
          setText(originalText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);

      return () => {
        clearInterval(typingInterval);
      };
    }, delay);

    return () => {
      clearTimeout(delayTimer);
    };
  }, [originalText, delay, speed]);

  return <span>{text}</span>;
}
