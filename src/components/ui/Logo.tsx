import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      className='flex items-center gap-2 flex-row hover:cursor-pointer select-none'
      href={"/"}
    >
      <Avatar className='w-6 h-6 select-none'>
        <AvatarImage className='object-cover' src='/branding/logo.png' />
        <AvatarFallback>CT</AvatarFallback>
      </Avatar>
      <p className='font-light select-none'>Coustra</p>
    </Link>
  );
};
