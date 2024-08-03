import React from "react";
import { Card, CardContent } from "./card";
import Image from "next/image";

interface ImageCardProps {
  full?: boolean;
  className?: string;
}

export const ImageCard = () => {
  return (
    <Card className='bg-muted-foreground border-[12px] border-muted-foreground relative h-[650px] w-full rounded-2xl'>
      <Image
        src='/assets/hero-light.png'
        fill
        alt='hero'
        className='h-auto rounded-2xl object-cover object-center shadow-2xl'
      />
    </Card>
  );
};
