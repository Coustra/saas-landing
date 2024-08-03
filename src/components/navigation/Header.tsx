"use client";

import React, { useEffect } from "react";
import { NavLink } from "../ui/NavLink";
import { Logo } from "../ui/Logo";
import ShimmerButton from "../magicui/shimmer-button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [scroll, setScroll] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();
  return (
    <header
      className={cn(
        "p-5 xl:px-0 fixed w-full top-0 z-10 backdrop-blur-md",
        scroll && "border-b"
      )}
    >
      <div className='max-w-[1250px] m-auto w-full flex items-center justify-between gap-4'>
        <Logo />
        <nav className='flex items-center gap-4'>
          <NavLink
            href={"https://www.instagram.com/jonasdevjourney/"}
            target='_blank'
          >
            Community
          </NavLink>

          <ShimmerButton
            shimmerColor='#fff'
            shimmerDuration='1s'
            className='shadow-2xl py-1.5'
          >
            <span className='whitespace-pre-wrap text-center text-white dark:from-white dark:to-slate-900/10'>
              Get in touch
            </span>
          </ShimmerButton>
        </nav>
      </div>
    </header>
  );
};
