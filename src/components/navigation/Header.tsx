"use client";

import React, { useEffect } from "react";
import { NavLink } from "../ui/NavLink";
import { Logo } from "../ui/Logo";
import ShimmerButton from "../magicui/shimmer-button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useScrollEvent } from "@/lib/hooks/scroll-event";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { NavigationMenu } from "../menu/NavigationMenu";

export const Header = () => {
  const { scroll } = useScrollEvent(10);

  return (
    <header
      className={cn(
        "p-5 xl:px-0 fixed w-full top-0 z-10 backdrop-blur-lg",
        scroll && "border-b"
      )}
    >
      <div className='max-w-[1250px] m-auto w-full flex items-center justify-between gap-4'>
        <Logo />
        <nav className='hidden lg:flex text-center items-center gap-8'>
          <NavLink href={"#"}>Home</NavLink>
          <NavLink href={"#"}>Features</NavLink>
          <NavLink href={"#"}>Pricing</NavLink>
        </nav>
        <nav className='hidden lg:flex items-center gap-4'>
          <NavLink href={"#"}>Login</NavLink>

          <Button
            variant={"default"}
            size={"sm"}
            className='rounded-full px-4 font-bold'
          >
            Get started now
          </Button>
        </nav>
        <nav className='lg:hidden'>
          <NavigationMenu />
        </nav>
      </div>
    </header>
  );
};
