import React, { useEffect, useRef } from "react";
import anime from "animejs";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1200,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}) => {
  const numRef = useRef<HTMLSpanElement>(null);
  const prevVal = useRef(0);

  useEffect(() => {
    const obj = { val: prevVal.current };
    const anim = anime({
      targets: obj,
      val: value,
      duration,
      easing: "easeOutExpo",
      update: () => {
        if (numRef.current) {
          numRef.current.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
        }
      },
      complete: () => {
        prevVal.current = value;
      },
    });

    return () => {
      anim.pause();
    };
  }, [value, duration, decimals, prefix, suffix]);

  return <span ref={numRef} className={className}>{`${prefix}${value.toFixed(decimals)}${suffix}`}</span>;
};
