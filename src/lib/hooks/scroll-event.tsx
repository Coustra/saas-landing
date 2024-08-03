"use client";

import { useEffect, useState } from "react";

interface ScrollEvent {
  scroll: boolean;
}

export const useScrollEvent = (scrollY: number): ScrollEvent => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollY) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return { scroll };
};
