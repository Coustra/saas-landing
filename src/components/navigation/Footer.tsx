import React from "react";
import { ThemeToggle } from "../ui/ThemeToggler";

export const Footer = () => {
  return (
    <footer className='p-5 xl:px-0 w-full bg-inherit mb-8'>
      <div className='max-w-[1250px] m-auto w-full flex items-center justify-between gap-4'>
        <p className='text-muted text-sm font-medium'>© Coustra Limited</p>
        <ThemeToggle />
      </div>
    </footer>
  );
};
