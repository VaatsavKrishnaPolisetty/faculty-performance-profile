import React, { useRef, useEffect } from "react";
import anime from "animejs";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  className = "",
  animateBy = "words",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  useEffect(() => {
    if (!containerRef.current) return;
    const spans = containerRef.current.querySelectorAll(".blur-item");
    
    anime({
      targets: spans,
      opacity: [0, 1],
      filter: ["blur(12px)", "blur(0px)"],
      translateY: [15, 0],
      delay: anime.stagger(delay),
      duration: 800,
      easing: "easeOutCubic",
    });
  }, [text, delay]);

  return (
    <h1 ref={containerRef} className={cn("inline-flex flex-wrap gap-x-2 font-bold", className)}>
      {elements.map((el, i) => (
        <span key={i} className="blur-item inline-block opacity-0" style={{ filter: "blur(12px)" }}>
          {el}&nbsp;
        </span>
      ))}
    </h1>
  );
};
