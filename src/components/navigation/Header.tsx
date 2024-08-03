"use client";

import React from "react";
import { NavLink } from "../ui/NavLink";
import { Logo } from "../ui/Logo";
import ShimmerButton from "../magicui/shimmer-button";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  return (
    <header className='p-5 xl:px-0 border-b border-zinc-200 fixed w-full top-0 z-10 bg-white/70 backdrop-blur-md'>
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
            className='shadow-2xl py-1.5'
            onClick={() => router.push("https://tally.so/r/3E02NN")}
          >
            Get in touch
          </ShimmerButton>
        </nav>
      </div>
    </header>
  );
};
