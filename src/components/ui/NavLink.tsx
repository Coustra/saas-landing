import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<typeof Link> {
  className?: string;
  variant?: "large" | "small" | "default" | "cta";
  children: React.ReactNode;
}

export const defaultLinkStyles = (style?: NavLinkProps["variant"]): string => {
  let cssStyles = "";
  switch (style) {
    case "large":
      cssStyles =
        "text-lg font-medium text-muted-foreground hover:text-inherit duration-150";
      break;
    case "small":
      cssStyles =
        "text-sm font-medium text-muted-foreground hover:text-inherit duration-150";
      break;
    case "cta":
      cssStyles =
        "text-lg font-medium text-muted-foreground bg-black hover:text-inherit duration-150";
      break;
    default:
      cssStyles =
        "font-medium text-muted-foreground hover:text-inherit duration-150";
      break;
  }
  return cssStyles;
};

export const NavLink = (props: NavLinkProps) => {
  const { className, variant } = props;
  return (
    <Link className={cn(defaultLinkStyles(variant), className)} {...props}>
      {props.children}
    </Link>
  );
};
