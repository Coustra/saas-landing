import { Headline } from "@/components/ui/Headline";
import { PricingCards } from "@/components/ui/PricingCards";
import { PricingTable } from "@/components/ui/PricingTable";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import React from "react";

export const Pricing = () => {
  return (
    <SectionWrapper id='pricing'>
      <Headline section='Pricing' title='Manage your projects today!' />
      <PricingCards />
      {/* <PricingTable /> */}
    </SectionWrapper>
  );
};
