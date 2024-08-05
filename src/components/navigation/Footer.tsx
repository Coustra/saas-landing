import React from "react";
import { ThemeToggle } from "../ui/ThemeToggler";
import { Logo } from "../ui/Logo";
import { NavLink } from "../ui/NavLink";

interface FooterColumn {
  title: string;
  links: { title: string; href: string }[];
}

const footerLinks: FooterColumn[] = [
  {
    title: "Legal",
    links: [
      { title: "Privacy Policy", href: "#" },
      { title: "Cookie Policy", href: "#" },
      { title: "Legal", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy Policy", href: "#" },
      { title: "Cookie Policy", href: "#" },
      { title: "Legal", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy Policy", href: "#" },
      { title: "Cookie Policy", href: "#" },
      { title: "Legal", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className='p-5 xl:px-0 w-full bg-inherit mb-8 border-t'>
      <div className='max-w-[1250px] m-auto w-full flex xl:flex-row flex-col justify-between gap-8 py-6'>
        <div className='min-w-[400px] flex flex-col gap-3'>
          <Logo />
          <p className='text-xs text-muted-foreground w-2/3'>
            This is the most awesome Saas Platform you have seen.
          </p>
        </div>
        <nav className='flex justify-between flex-wrap items-center flex-1 gap-6'>
          {footerLinks.map((column, index) => (
            <ul
              key={index}
              className='flex flex-col gap-3 flex-1 min-w-[200px]'
            >
              <li>
                <p className='text-sm font-bold'>{column.title}</p>
              </li>
              {column.links.map((link, index) => (
                <li key={index}>
                  <NavLink variant='small' href={link.href}>
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          ))}
        </nav>
      </div>
      <div className='max-w-[1250px] m-auto w-full flex items-center justify-between gap-4 border-t py-6'>
        <p className='text-muted-foreground text-sm font-medium'>
          © Coustra Limited
        </p>
        <ThemeToggle />
      </div>
    </footer>
  );
};
