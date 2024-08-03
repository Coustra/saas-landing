import { Headline } from "@/components/ui/Headline";
import { ImageText } from "@/components/ui/ImageText";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { title } from "process";
import React from "react";

export default function Features() {
  return (
    <SectionWrapper id='features' className='mb-0'>
      <Headline
        title='Side Project Mastery, Effortlessly Within Reach'
        section='Features'
      />
      <ImageText
        src='/assets/hero-light.png'
        section='Finances'
        title='Financial Overview at Your Fingertips'
        description='Keep your financial health in check with a clear, concise view of profits, revenues, and expenses, all updated in real-time for informed decision-making.'
      />
      <ImageText
        imageRight
        src='/assets/hero-light.png'
        section='Finances'
        title='Financial Overview at Your Fingertips'
        description='Keep your financial health in check with a clear, concise view of profits, revenues, and expenses, all updated in real-time for informed decision-making.'
      />
      <ImageText
        src='/assets/hero-light.png'
        section='Finances'
        title='Financial Overview at Your Fingertips'
        description='Keep your financial health in check with a clear, concise view of profits, revenues, and expenses, all updated in real-time for informed decision-making.'
      />
    </SectionWrapper>
  );
}
