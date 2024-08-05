"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export const Logo = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const whiteLogo = "https://coustra.github.io/branding/logo/logo_white.png";
  const blackLogo = "https://coustra.github.io/branding/logo/logo_large.png";
  return (
    <Link
      className='flex items-center gap-2 flex-row hover:cursor-pointer select-none'
      href={"/"}
    >
      <Avatar className='w-6 h-6 select-none'>
        <AvatarImage
          className={"object-cover"}
          src={isDark ? whiteLogo : blackLogo}
        />
        <AvatarFallback className='bg-transparent'>
          <Skeleton className='w-full h-full rounded-full' />
        </AvatarFallback>
      </Avatar>
      <span className='font-black select-none'>Coustra</span>
    </Link>
  );
};
