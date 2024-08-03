import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageCard } from "@/components/ui/ImageCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import React from "react";

export default function Hero() {
  return (
    <SectionWrapper className='flex items-center justify-center flex-col gap-8 pt-24 mt-0'>
      <h1 className='text-7xl font-bold text-center max-w-[800px]'>
        Manage Your Side Projects in One Place
      </h1>
      <p className='text-center text-lg max-w-[400px] font-medium'>
        Track, maintain, and streamline every aspect of your side projects with
        ProjectPlannerAI
      </p>
      <Button
        variant={"default"}
        size={"sm"}
        className='rounded-full px-8 text-base font-bold'
      >
        Get started now
      </Button>
      <ImageCard />
    </SectionWrapper>
  );
}
