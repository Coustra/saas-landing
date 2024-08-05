"use client";

import React from "react";
import { NavLink } from "../ui/NavLink";
import { Logo } from "../ui/Logo";
import { cn } from "@/lib/utils";
import { useScrollEvent } from "@/lib/hooks/scroll-event";
import { Button } from "../ui/button";
import { NavigationMenu } from "../menu/NavigationMenu";

export const Header = () => {
  const { scroll } = useScrollEvent(10);

  return (
    <header
      className={cn(
        "p-5 xl:px-0 fixed w-full top-0 z-10 bg-background/35 backdrop-blur-lg",
        scroll && "border-b"
      )}
    >
      <div className='max-w-[1250px] m-auto w-full flex items-center justify-between gap-4'>
        <nav className='w-1/3'>
          <Logo />
        </nav>
        <nav className='hidden lg:flex text-center justify-center items-center gap-8 w-1/3'>
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"#features"}>Features</NavLink>
          <NavLink href={"/pricing"}>Pricing</NavLink>
        </nav>
        <nav className='hidden lg:flex items-center justify-end gap-4 w-1/3'>
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
