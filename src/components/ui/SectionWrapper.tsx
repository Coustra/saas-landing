import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  fullHeight?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const SectionWrapper = (props: Props) => {
  const { fullHeight, fullWidth, className } = props;
  return (
    <section
      className={cn(
        "py-5 xl:px-0",
        fullWidth || "max-w-[1250px] p-5 xl:px-0 mx-auto",
        fullHeight && "min-h-screen",
        className
      )}
    >
      {props.children}
    </section>
  );
};