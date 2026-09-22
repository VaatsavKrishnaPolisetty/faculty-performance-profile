import React from "react";
import { cn } from "@/lib/utils";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent bg-gradient-to-r from-slate-400 via-white to-slate-400 font-semibold tracking-wide",
        !disabled && "animate-shine bg-[length:200%_100%]",
        className
      )}
      style={{
        animationDuration,
      }}
    >
      {text}
    </span>
  );
};
