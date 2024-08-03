import Image from "next/image";
import React from "react";
import { ImageCard } from "./ImageCard";
import { cn } from "@/lib/utils";

interface ImageTextProps {
  src: string;
  title: string;
  description: string;
  section?: string;
  imageRight?: boolean;
}

export const ImageText = (props: ImageTextProps) => {
  const { src, title, description, section } = props;
  return (
    <div
      className={cn(
        "my-24 flex md:items-center gap-8 md:flex-row flex-col last:mb-0",
        props.imageRight && "md:flex-row-reverse"
      )}
    >
      <ImageCard
        className='flex-[2] w-full'
        src={src}
        alt={"feature-image-" + title}
      />
      <div className='flex flex-col gap-2 flex-1 min-w-[300px]'>
        {section && (
          <h3 className='text-base font-bold tracking-tighter text-primary'>
            {section}
          </h3>
        )}
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </div>
    </div>
  );
};
