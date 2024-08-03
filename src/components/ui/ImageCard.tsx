import React from "react";
import { Card, CardContent } from "./card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

interface ImageCardProps {
  full?: boolean;
  className?: string;
  src: string;
  alt?: string;
}

export const ImageCard = (props: ImageCardProps) => {
  return (
    <Card
      className={cn(
        "bg-muted-foreground border-[12px] border-muted-foreground relative h-auto rounded-2xl",
        props.full && "w-full",
        props.className
      )}
    >
      <AspectRatio ratio={16 / 9} className='bg-transparent'>
        <Image
          src={props.src}
          fill
          alt={props.alt || props.src}
          className='h-auto rounded-2xl object-cover object-center shadow-2xl'
        />
      </AspectRatio>
    </Card>
  );
};
