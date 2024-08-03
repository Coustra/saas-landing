import Link from "next/link";
import React from "react";
import { NavLink } from "../ui/NavLink";

export const Footer = () => {
  return (
    <footer className='p-5 xl:px-0 w-full bg-inherit mb-8'>
      <div className='max-w-[1250px] m-auto w-full flex items-center justify-between gap-4'>
        <p className='text-sm font-medium'>© Coustra Limited</p>
        <nav className='flex items-center gap-4'>
          <NavLink
            variant='small'
            href={"https://www.instagram.com/jonasdevjourney/"}
            target='_blank'
          >
            Community
          </NavLink>
          <NavLink variant='small' href={"https://tally.so/r/w2rW0V"}>
            Contact Us
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};
