import React, { useRef, useState } from "react";
import anime from "animejs";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  strength = 30,
  className = "",
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) / (width / 2);
    const y = (e.clientY - (top + height / 2)) / (height / 2);

    anime({
      targets: btnRef.current,
      translateX: x * strength,
      translateY: y * strength,
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    anime({
      targets: btnRef.current,
      translateX: 0,
      translateY: 0,
      duration: 600,
      easing: "easeOutElastic(1, .5)",
    });
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("transition-shadow cursor-pointer select-none", className)}
      {...props}
    >
      {children}
    </button>
  );
};
