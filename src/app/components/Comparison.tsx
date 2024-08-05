"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Headline } from "@/components/ui/Headline";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import React from "react";
import CheckMark from "@/assets/checkmark.svg";
import WrongMark from "@/assets/wrongmark.svg";
import { cn } from "@/lib/utils";

interface CompareItem {
  title: string;
}

const cards: ComparisonCardProps[] = [
  {
    title: "Without ProjectPlannerAI",
    positive: false,
    items: [
      { title: "Unfinished projects" },
      { title: "Unfinished projects" },
      { title: "Unfinished projects" },
      { title: "Unfinished projects" },
    ],
  },
  {
    title: "With ProjectPlannerAI",
    positive: true,
    items: [
      { title: "Unfinished projects" },
      { title: "Unfinished projects" },
      { title: "Unfinished projects" },
      { title: "Unfinished projects" },
    ],
  },
];

export const Comparison = () => {
  return (
    <SectionWrapper>
      <Headline title='Tired of unfinished side projects?' />
      <div className='flex flex-wrap gap-6 max-sm:flex-col'>
        {cards.map((card) => (
          <ComparisonCard
            key={card.title}
            title={card.title}
            positive={card.positive}
            items={card.items}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

interface ComparisonCardProps {
  title: string;
  positive: boolean;
  items: CompareItem[];
}

const ComparisonCard = (props: ComparisonCardProps) => {
  return (
    <Card
      className={cn(
        "flex-1 sm:min-w-[400px] border-red-600 bg-red-600/5 min-h-fit",
        props.positive && "border-green-600 bg-green-600/5"
      )}
    >
      <CardHeader className='font-bold text-2xl'>{props.title}</CardHeader>
      <CardContent>
        <ul className='list-inside list-none text-xl space-y-6'>
          {props.items.map((item, key) => (
            <li className='flex items-center' key={key}>
              <span
                className={cn(
                  props.positive ? "text-green-600" : "text-red-600"
                )}
              >
                {props.positive ? (
                  <CheckMark className='mr-2 inline-block' />
                ) : (
                  <WrongMark className='mr-2 inline-block' />
                )}
              </span>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
