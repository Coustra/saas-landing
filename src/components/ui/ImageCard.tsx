import React from "react";
import { Card, CardContent } from "./card";
import Image from "next/image";

interface ImageCardProps {
  full?: boolean;
  className?: string;
}

export const ImageCard = () => {
  return (
    <Card className='bg-muted-foreground border-8 border-muted-foreground relative h-[650px] w-full rounded-xl'>
      <Image
        src='/assets/hero-light.png'
        fill
        alt='hero'
        className='h-auto rounded-xl object-cover object-center border-2 border-muted-foreground'
      />
    </Card>
  );
};
